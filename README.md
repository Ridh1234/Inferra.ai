# 🤖 Inferra.ai

<div align="center">

![Inferra.ai Logo](https://img.shields.io/badge/Inferra.ai-AI%20Powered%20Meetings-blue?style=for-the-badge&logo=openai&logoColor=white)

**An intelligent meeting platform that leverages AI to enhance meeting productivity through transcription, analysis, and automated report generation.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)

</div>

---

## 📋 Table of Contents
- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🖥️ User Interface](#️-user-interface)
- [📊 Data Flow](#-data-flow)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Installation & Setup](#-installation--setup)
- [🔄 User Flow](#-user-flow)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Overview

Inferra.ai is a comprehensive meeting management platform that combines **real-time AI transcription**, **intelligent analysis**, and **automated report generation** to transform how teams conduct and follow up on meetings. The platform integrates seamlessly with Google Meet through a Chrome extension and provides a complete web-based interface for meeting management.

<div align="center">

### 🌟 Transform Your Meetings with AI

| Before Inferra.ai | After Inferra.ai |
|:---:|:---:|
| ❌ Manual note-taking | ✅ Automated transcription |
| ❌ Missed action items | ✅ AI-extracted insights |
| ❌ Time-consuming reports | ✅ Instant AI-generated summaries |
| ❌ Lost meeting context | ✅ Searchable meeting archive |

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎙️ **Real-time Transcription**
- Live meeting transcription through Google Meet integration
- High-accuracy speech-to-text conversion
- Multi-speaker identification
- Real-time processing with minimal latency

### 🧠 **AI-Powered Analysis**
- Intelligent meeting content analysis
- Automatic action item extraction
- Key topic and decision identification
- Sentiment analysis and engagement metrics

</td>
<td width="50%">

### 📄 **Automated Reports**
- Generate comprehensive meeting reports automatically
- Customizable report templates
- Export to PDF, Word, and other formats
- Integration with popular productivity tools

### 🔐 **Enterprise Security**
- Secure user authentication and authorization
- End-to-end encryption for meeting data
- GDPR compliant data handling
- Role-based access control

</td>
</tr>
</table>

---

## 🏗️ Architecture

<div align="center">

![System Architecture](https://github.com/Ridh1234/Inferra.ai/blob/main/Infeera%20architecture%20(2).png)

*Comprehensive system architecture showing the interaction between all components*

</div>

---

## 🖥️ User Interface

<div align="center">

![User Interface](https://github.com/Ridh1234/Inferra.ai/blob/main/Inferra%20interface.png)

*Modern, intuitive interface designed for seamless user experience*

</div>

---

## 📊 Data Flow

<div align="center">

![Data Flow Diagram](https://github.com/Ridh1234/Inferra.ai/blob/main/Sequence%20diagram.png)

*Detailed sequence diagram showing the complete data flow through the system*

</div>

The data flow follows these key stages:
1. **Authentication** → User signs in and gets authenticated
2. **Meeting Setup** → Create or join meetings through the platform
3. **Real-time Capture** → Chrome extension captures Google Meet audio/text
4. **AI Processing** → Python backend processes and analyzes meeting data
5. **Storage & Retrieval** → MongoDB stores results for future access
6. **Report Generation** → AI generates and delivers comprehensive reports

---

## 🛠️ Tech Stack

<div align="center">

### Frontend Stack
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

### Backend Stack
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mongoose](https://img.shields.io/badge/Mongoose-F04D35?style=for-the-badge&logo=mongodb&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

### Tools & Extensions
![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Google Meet](https://img.shields.io/badge/Google%20Meet-00897B?style=for-the-badge&logo=googlemeet&logoColor=white)

</div>

<details>
<summary><strong>📚 Detailed Tech Stack</strong></summary>

### 🎨 Frontend
- **React** - Modern UI framework for building interactive user interfaces
- **Vite** - Fast build tool and development server with HMR
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **ESLint** - Code linting and quality assurance

### 🖥️ Node.js Backend
- **Node.js** - Server runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling for Node.js

### 🧠 AI Backend
- **Python** - Core AI processing language
- **Flask/FastAPI** - Lightweight API framework for AI services
- **AI/ML Libraries** - Advanced libraries for transcription and analysis

### 🌐 Chrome Extension
- **JavaScript** - Extension logic and DOM manipulation
- **Chrome APIs** - Browser integration and real-time data capture
- **Google Meet Integration** - Seamless meeting data extraction

</details>

---

## 📁 Project Structure

```
🗂️ Inferra.ai/
├── 🎨 Frontend/                    # React frontend application
│   ├── 📄 App.jsx                 # Main application component
│   ├── 📄 main.jsx               # Application entry point
│   ├── 📄 index.html             # HTML template
│   └── 📁 components/            # Reusable React components
│       ├── 📄 AuthContext.jsx    # Authentication context
│       ├── 📄 SignInPage.jsx     # User authentication page
│       └── 📄 ...                # Other components
├── 🖥️ node_backend/              # Node.js API server
│   ├── 📄 index.js              # Server entry point
│   ├── 📁 controllers/          # Request handlers
│   │   ├── 📄 meetController.js  # Meeting management
│   │   └── 📄 ...               # Other controllers
│   ├── 📁 models/              # Database models
│   ├── 📁 middleware/          # Custom middleware
│   └── 📄 package.json         # Node.js dependencies
├── 🧠 AI-backend/              # Python AI services
│   ├── 📄 app.py              # Flask/FastAPI application
│   ├── 📄 aiscript.py         # AI processing logic
│   ├── 📄 report_generator.py # Automated report generation
│   └── 📄 requirements.txt    # Python dependencies
├── 🌐 google-meet-chrome-extension/ # Chrome extension
│   ├── 📄 manifest.json       # Extension configuration
│   ├── 📄 background.js       # Background service worker
│   ├── 📄 content.js         # Content script for Google Meet
│   └── 📄 popup.html         # Extension popup interface
└── 📁 assets/                # Static assets and documentation
    ├── 🖼️ images/            # UI mockups and diagrams
    ├── 🔤 fonts/             # Custom fonts
    └── 📚 docs/              # Additional documentation
```

---

## 🚀 Installation & Setup

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

```bash
Node.js (v16.0 or higher)   ✅
Python (v3.8 or higher)     ✅
MongoDB (v4.4 or higher)    ✅
Chrome Browser              ✅
Git                         ✅
```

### 🎨 Frontend Setup

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev

# The frontend will be available at http://localhost:5173
```

### 🖥️ Node.js Backend Setup

```bash
# Navigate to backend directory
cd node_backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start the server
npm start

# The API will be available at http://localhost:3000
```

### 🧠 AI Backend Setup

```bash
# Navigate to AI backend directory
cd AI-backend

# Create virtual environment
python -m venv inferra-env

# Activate virtual environment
# On Windows:
inferra-env\Scripts\activate
# On macOS/Linux:
source inferra-env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the AI service
python app.py

# The AI API will be available at http://localhost:5000
```

### 🌐 Chrome Extension Setup

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **"Developer mode"** in the top right
3. Click **"Load unpacked"**
4. Select the `google-meet-chrome-extension` folder
5. Pin the extension to your Chrome toolbar
6. Grant necessary permissions when prompted

### 🗄️ Database Setup

```bash
# Start MongoDB service
# On Windows (if installed as service):
net start MongoDB

# On macOS (using Homebrew):
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# Create database and collections (optional - will be created automatically)
mongosh
use inferra_ai
db.createCollection("users")
db.createCollection("meetings")
db.createCollection("reports")
```
### Detailed User Journey

1. **🔐 Authentication**
   - Users sign in through the secure web interface
   - JWT tokens ensure session security
   - Role-based permissions are assigned

2. **📅 Meeting Management**
   - Create new meetings or join existing ones
   - Schedule future meetings with calendar integration
   - Invite participants via email

3. **🌐 Google Meet Integration**
   - Chrome extension automatically detects Google Meet sessions
   - Real-time audio capture and processing
   - Minimal impact on meeting performance

4. **🧠 AI Processing**
   - Live transcription with speaker identification
   - Real-time sentiment analysis and key topic extraction
   - Action items and decisions are automatically highlighted

5. **📊 Report Generation**
   - Comprehensive meeting summaries generated instantly
   - Customizable report templates for different use cases
   - Export options for various file formats

6. **📥 Results & Analytics**
   - Download reports in PDF, Word, or plain text
   - Share reports with team members
   - Access meeting analytics and trends

---
### 🚀 Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Inferra.ai.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Link any relevant issues
   - Wait for code review and feedback

### 🐛 Reporting Issues

Found a bug or have a feature request? Please create an issue with:
- Clear description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots or error logs (if applicable)
---
⭐ **Star this repository if you find it helpful!** ⭐
</div>
