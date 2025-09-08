import { useState } from 'react';
import Modal from 'react-modal';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  UserGroupIcon, 
  DocumentArrowDownIcon,
  XMarkIcon,
  PlusIcon,
  TrashIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

// Helper function to format time to 12-hour AM/PM format with full date
const formatTime = (dateString) => {
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };
  return new Date(dateString).toLocaleString('en-US', options);
};

// Helper function to calculate meeting duration
const calculateDuration = (start, end) => {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const durationMs = endTime - startTime;

  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.ceil((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  if (hours === 0) {
    return `${minutes}m`;
  } else if (minutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${minutes}m`;
  }
};

const reportTypes = [
    { value: 'normal', label: 'Executive Summary', description: 'High-level overview with key decisions' },
    { value: 'speaker_ranking', label: 'Speaker Analysis', description: 'Participation and contribution metrics' },
    { value: 'sentiment', label: 'Sentiment Report', description: 'Meeting mood and engagement analysis' },
    { value: 'interval', label: 'Time-based Analysis', description: 'Breakdown by time intervals' }
  ];
  
  const reportFormats = [
    { value: 'pdf', label: 'PDF Document', icon: '📄' },
    { value: 'docx', label: 'Word Document', icon: '📝' }
  ];
  
  // Modal Styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: 'none',
      borderRadius: '12px',
      maxWidth: '500px',
      width: '95%',
      maxHeight: '90vh',
      overflow: 'hidden'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
  };

  const MeetCard = ({ meet }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reportType, setReportType] = useState('');
    const [reportFormat, setReportFormat] = useState('');
    const [meetingTitle, setMeetingTitle] = useState(meet.meetingTitle);
    const [loading, setLoading] = useState(false);
    const [interval, setInterval] = useState(undefined);
    const [error, setError] = useState(null);
    const [emails, setEmails] = useState(['']);

    const addEmail = () => {
        setEmails([...emails, '']);
    };
    
    const removeEmail = (index) => {
        const newEmails = emails.filter((_, i) => i !== index);
        setEmails(newEmails);
    };
    
    const handleEmailChange = (e, index) => {
        const newEmails = [...emails];
        newEmails[index] = e.target.value;
        setEmails(newEmails);
    };
    
    const openModal = () => {
      setIsModalOpen(true);
      setMeetingTitle(meet.meetingTitle);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setMeetingTitle(meet.meetingTitle);
      setError(null);
      setReportType('');
      setReportFormat('');
      setInterval(undefined);
      setEmails(['']);
    };
  
    const handleGenerateReport = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      const payload = {
        meeting_title: meetingTitle,
        report_type: reportType,
        report_format: reportFormat,
        meeting_id: meet._id,
        report_interval: interval,
        emails
      };

      if(interval) payload[interval] = interval;
  
      try {
        const response = await fetch('/api/get-report', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to generate report');
        }
  
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
  
        const link = document.createElement('a');
        link.href = url;
        const fileExtension = reportFormat === 'pdf' ? 'pdf' : 'docx';
        link.download = `${meetingTitle.replace(/\s+/g, '_')}_report.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        meet.meetingTitle = meetingTitle;
        closeModal();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    return (
        <>
            <div className="card hover:border-primary-200 group transition-all duration-200 hover:shadow-medium">
                {/* Meeting Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                            {meet.meetingTitle}
                        </h3>
                        <div className="flex items-center text-sm text-secondary-500">
                            <UserGroupIcon className="h-4 w-4 mr-1" />
                            <span>Hosted by {meet.convenor}</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
                    </div>
                </div>

                {/* Meeting Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div>
                        <div className="flex items-center text-sm text-secondary-600 mb-1">
                            <CalendarDaysIcon className="h-4 w-4 mr-1 text-secondary-400" />
                            <span className="font-medium">Start:</span>
                        </div>
                        <p className="text-sm text-secondary-800">{formatTime(meet.meetingStartTimeStamp)}</p>
                    </div>
                    <div>
                        <div className="flex items-center text-sm text-secondary-600 mb-1">
                            <ClockIcon className="h-4 w-4 mr-1 text-secondary-400" />
                            <span className="font-medium">Duration:</span>
                        </div>
                        <p className="text-sm text-secondary-800">{calculateDuration(meet.meetingStartTimeStamp, meet.meetingEndTimeStamp)}</p>
                    </div>
                </div>

                {/* Participants */}
                <div className="mb-4">
                    <div className="flex justify-between items-start text-sm">
                        <div className="flex-1 mr-4">
                            <p className="text-secondary-600 font-medium mb-1">Speakers:</p>
                            <p className="text-secondary-800">{meet.speakers.length > 0 ? meet.speakers.join(', ') : 'No speakers identified'}</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-secondary-600 font-medium mb-1">Attendees:</p>
                            <p className="text-secondary-800">{meet.attendees.length > 0 ? meet.attendees.join(', ') : 'No attendees listed'}</p>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={openModal}
                    className="w-full btn-primary flex items-center justify-center"
                >
                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                    Generate Intelligence Report
                </button>
            </div>

            {/* Modal for Report Generation */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Generate Intelligence Report"
            >
                <div className="bg-white rounded-xl overflow-hidden">
                    {/* Modal Header */}
                    <div className="bg-primary-600 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-heading font-semibold text-white">
                                Generate Intelligence Report
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-primary-100 hover:text-white transition-colors duration-200"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 max-h-96 overflow-y-auto">
                        <form onSubmit={handleGenerateReport} className="space-y-6">
                            {/* Meeting Title */}
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                    Meeting Title
                                </label>
                                <input
                                    type="text"
                                    value={meetingTitle}
                                    onChange={(e) => setMeetingTitle(e.target.value)}
                                    className="input-field"
                                    placeholder="Enter meeting title"
                                />
                            </div>

                            {/* Report Type */}
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                    Report Type
                                </label>
                                <div className="grid gap-3">
                                    {reportTypes.map((type) => (
                                        <label key={type.value} className="relative">
                                            <input
                                                type="radio"
                                                name="reportType"
                                                value={type.value}
                                                checked={reportType === type.value}
                                                onChange={(e) => {
                                                    setReportType(e.target.value);
                                                    setInterval(undefined);
                                                }}
                                                className="sr-only"
                                            />
                                            <div className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                                                reportType === type.value 
                                                    ? 'border-primary-500 bg-primary-50' 
                                                    : 'border-gray-200 hover:border-primary-300'
                                            }`}>
                                                <div className="font-medium text-secondary-900">{type.label}</div>
                                                <div className="text-sm text-secondary-600 mt-1">{type.description}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                {/* Interval Input for Time-based Analysis */}
                                {reportType === "interval" && (
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                                            Analysis Interval (minutes)
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="60"
                                            value={interval}
                                            onChange={(e) => setInterval(e.target.value)}
                                            className="input-field"
                                            placeholder="e.g., 5, 10, 15"
                                            required
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Report Format */}
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                    Export Format
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {reportFormats.map((format) => (
                                        <label key={format.value} className="relative">
                                            <input
                                                type="radio"
                                                name="reportFormat"
                                                value={format.value}
                                                checked={reportFormat === format.value}
                                                onChange={(e) => setReportFormat(e.target.value)}
                                                className="sr-only"
                                            />
                                            <div className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 text-center ${
                                                reportFormat === format.value 
                                                    ? 'border-primary-500 bg-primary-50' 
                                                    : 'border-gray-200 hover:border-primary-300'
                                            }`}>
                                                <div className="text-2xl mb-1">{format.icon}</div>
                                                <div className="font-medium text-secondary-900">{format.label}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Email Recipients */}
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">
                                    Email Recipients
                                </label>
                                <div className="space-y-3">
                                    {emails.map((email, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => handleEmailChange(e, index)}
                                                className="input-field flex-1"
                                                placeholder="Enter email address"
                                                required
                                            />
                                            {emails.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeEmail(index)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                                >
                                                    <TrashIcon className="h-5 w-5" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addEmail}
                                        className="flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                                    >
                                        <PlusIcon className="h-4 w-4 mr-1" />
                                        Add Another Email
                                    </button>
                                </div>
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-red-700 text-sm">{error}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Modal Footer */}
                    <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn-secondary"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={handleGenerateReport}
                            className={`btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading || !reportType || !reportFormat}
                        >
                            {loading ? (
                                <>
                                    <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                                    Generate Report
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default MeetCard;
