# Inferra.ai 🤖

An intelligent meeting platform that leverages AI to enhance meeting productivity through transcription, analysis, and automated report generation.

## 🎯 Overview

Inferra.ai is a comprehensive meeting management platform that combines real-time AI transcription, intelligent analysis, and automated report generation to transform how teams conduct and follow up on meetings. The platform integrates seamlessly with Google Meet through a Chrome extension and provides a complete web-based interface for meeting management.

## 🏗️ Architecture

![System Architecture](https://github.com/Ridh1234/Inferra.ai/blob/main/Infeera%20architecture%20(2).png)

## 🖥️ User Interface

![User Interface](https://github.com/Ridh1234/Inferra.ai/blob/main/Inferra%20interface.png)

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality assurance

### Node.js Backend
- **Node.js** - Server runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### AI Backend
- **Python** - Core AI processing language
- **Flask/FastAPI** - API framework for AI services
- **AI/ML Libraries** - For transcription and analysis

### Chrome Extension
- **JavaScript** - Extension logic
- **Chrome APIs** - Browser integration
- **Google Meet Integration** - Real-time meeting capture

## 🚀 Features

- **Real-time Transcription** - Live meeting transcription through Google Meet integration
- **AI-Powered Analysis** - Intelligent meeting content analysis and insights
- **Automated Reports** - Generate comprehensive meeting reports automatically
- **User Authentication** - Secure user management and session handling
- **Meeting Management** - Create, join, and manage meetings seamlessly
- **Chrome Extension** - Direct integration with Google Meet for enhanced functionality

## 📁 Project Structure

```
Inferra.ai/
├── Frontend/                    # React frontend application
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   ├── index.html             # HTML template
│   └── components/            # React components
├── node_backend/              # Node.js API server
│   ├── index.js              # Server entry point
│   ├── controllers/          # Request handlers
│   ├── models/              # Database models
│   └── middleware/          # Custom middleware
├── AI-backend/              # Python AI services
│   ├── app.py              # Flask/FastAPI application
│   ├── aiscript.py         # AI processing logic
│   ├── report_generator.py # Report generation service
│   └── requirements.txt    # Python dependencies
├── google-meet-chrome-extension/ # Chrome extension
│   ├── manifest.json       # Extension configuration
│   ├── background.js       # Background script
│   └── content.js         # Content script for Google Meet
└── assets/                # Static assets and documentation
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MongoDB
- Chrome browser (for extension)

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

### Node.js Backend Setup
```bash
cd node_backend
npm install
npm start
```

### AI Backend Setup
```bash
cd AI-backend
pip install -r requirements.txt
python app.py
```

### Chrome Extension Setup
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `google-meet-chrome-extension` folder

## 🔄 User Flow

1. **Authentication** - Users sign in through the web interface
2. **Meeting Creation** - Create or join meetings through the platform
3. **Google Meet Integration** - Chrome extension captures meeting data in real-time
4. **AI Processing** - Meeting content is processed by AI backend for transcription and analysis
5. **Report Generation** - Automated reports are generated and made available for download
6. **Meeting Management** - View past meetings, reports, and analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

