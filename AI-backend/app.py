from dotenv import load_dotenv
load_dotenv()
from flask import Flask, send_from_directory, request, jsonify
import os
from huggingface_hub import InferenceClient

from report_generator import generate_reports # Main function to generate reports based on user input
from report_generator import PDF_Type, DOCX_Type # Report formats
from report_generator import NormalReport, SpeakerRankingReport, SentimentReport, IntervalReport # Report types

app = Flask(__name__)

# Set up Hugging Face Inference Client
hf_client = InferenceClient(
    api_key=os.environ.get("HF_TOKEN")
)
@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    '''
    Expects a file upload (audio) with key 'audio'.
    Returns: {"transcript": ..., "subtitles": ...}
    '''
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file uploaded'}), 400
    audio_file = request.files['audio']
    # Save the uploaded file temporarily
    temp_path = os.path.join('temp', audio_file.filename)
    os.makedirs('temp', exist_ok=True)
    audio_file.save(temp_path)
    try:
        output = hf_client.automatic_speech_recognition(temp_path, model="openai/whisper-large-v3")
        # output is typically a dict with 'text' and possibly 'segments' for subtitles
        transcript = output.get('text', '') if isinstance(output, dict) else output
        subtitles = output.get('segments', []) if isinstance(output, dict) else []
        return jsonify({"transcript": transcript, "subtitles": subtitles})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

@app.route('/report',methods=['POST'])
def get_report():
    '''Expecting: {
        "meeting_data": {},
        "report_type": "normal"/"speaker_ranking"/"sentiment"/"interval",
        "report_format": "pdf"/"docx"
    }'''
    receieved_data = request.json

    if not receieved_data:
        return jsonify({'error':'No data received'}), 400

    meeting_data = receieved_data['meeting_data']
    report_type = receieved_data['report_type']
    report_format = receieved_data['report_format']

    if 'report_interval' in receieved_data:
        report_interval = receieved_data['report_interval']

    # Validate meeting_data
    if not meeting_data:
        return jsonify({'error':'Meeting data is empty'}), 400
    if "meetingTitle" not in meeting_data or "meetingStartTimeStamp" not in meeting_data or "meetingEndTimeStamp" not in meeting_data or "attendees" not in meeting_data or 'speakers' not in meeting_data or 'transcriptData' not in meeting_data or "speakerDuration" not in meeting_data:
        return jsonify({'error':'Invalid meeting data'}), 400

    if report_type == 'normal':
        report_type = NormalReport
    elif report_type == 'speaker_ranking':
        report_type = SpeakerRankingReport
    elif report_type == 'sentiment':
        report_type = SentimentReport
    elif report_type == 'interval':
        report_type = IntervalReport
    else:
        return jsonify({'error':'Invalid report type'}), 400

    if report_format == 'pdf':
        report_format = PDF_Type
    elif report_format == 'docx':
        report_format = DOCX_Type
    else:
        return jsonify({'error':'Invalid report format'}), 400

    # Generate
    if report_type == IntervalReport and not report_interval:
        return jsonify({'error':'Interval report needs interval'}), 400
    
    if report_type == IntervalReport:
        file_name = generate_reports(meeting_data, report_type, report_format, report_interval)
    else:
        file_name = generate_reports(meeting_data, report_type, report_format)
    file_name = file_name.split('/')[-1] # file_name is the path to the file(including ./reports/), we only need the file name
    return send_from_directory('./reports',file_name)

if __name__ == '__main__':
    app.run(port=8000,debug=True)