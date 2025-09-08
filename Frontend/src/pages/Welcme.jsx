
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  ClockIcon, 
  UserGroupIcon,
  CameraIcon,
  EnvelopeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

function Welcome() {
  const features = [
    {
      icon: UserGroupIcon,
      title: "Track Your Meetings",
      description: "Comprehensive meeting management with attendee tracking and intelligent organization.",
      emoji: "📋"
    },
    {
      icon: DocumentTextIcon,
      title: "Generate Intelligence Reports",
      description: "AI-powered reports in multiple formats with customizable insights and analytics.",
      emoji: "📝"
    },
    {
      icon: EnvelopeIcon,
      title: "Automated Distribution",
      description: "Seamlessly send reports to stakeholders with automated email delivery.",
      emoji: "✉️"
    }
  ];

  const reportTypes = [
    {
      icon: ChartBarIcon,
      title: "Speaker Analytics",
      description: "Deep insights into individual contributions, participation metrics, and engagement patterns."
    },
    {
      icon: ClockIcon,
      title: "Temporal Analysis",
      description: "Time-based insights showing meeting flow, discussion patterns, and optimal engagement windows."
    },
    {
      icon: HeartIcon,
      title: "Sentiment Intelligence",
      description: "Advanced emotional analysis revealing meeting dynamics, team morale, and decision-making patterns."
    },
    {
      icon: DocumentTextIcon,
      title: "Executive Summaries",
      description: "Comprehensive overviews with key decisions, action items, and strategic insights for leadership."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Welcome to the Future of Meeting Intelligence
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-secondary-900 mb-6">
            Welcome to
            <span className="logo-text block">Inferra.ai</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-secondary-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            Your enterprise-grade AI companion that transforms every meeting into strategic intelligence, 
            actionable insights, and collaborative excellence.
          </p>
        </div>
      </section>

      {/* What is Inferra.ai Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-6">
              What is Inferra.ai?
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Inferra.ai is a sophisticated Chrome extension engineered for enterprise teams who demand 
              excellence in meeting documentation and intelligence. Our AI-powered platform seamlessly 
              integrates with your workflow to deliver unprecedented insights from every conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ChartBarIcon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                    AI-Powered Intelligence
                  </h3>
                  <p className="text-secondary-600">
                    Advanced natural language processing and machine learning algorithms analyze every aspect 
                    of your meetings to extract meaningful insights and actionable intelligence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DocumentTextIcon className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-secondary-600">
                    Bank-grade encryption, SOC 2 compliance, and enterprise-ready security features 
                    ensure your sensitive meeting data remains protected and confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                    Seamless Integration
                  </h3>
                  <p className="text-secondary-600">
                    Effortlessly integrates with Google Meet and your existing workflow, requiring 
                    zero disruption to your team's established meeting processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-6">Platform Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">99.2%</div>
                  <div className="text-primary-100 text-sm">Transcription Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-primary-100 text-sm">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">10k+</div>
                  <div className="text-primary-100 text-sm">Enterprise Teams</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-primary-100 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive features designed for modern enterprise teams who value efficiency and intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group hover:border-primary-200">
                <div className="text-6xl mb-4">{feature.emoji}</div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Reports Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-6">
              Advanced Intelligence Reports
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Choose from multiple AI-powered analysis frameworks, each designed to extract 
              specific insights that drive strategic decision-making and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reportTypes.map((type, index) => (
              <div key={index} className="card hover:border-primary-200 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors duration-200">
                    <type.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Intelligence Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <CameraIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Visual Intelligence Integration
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Capture and integrate screenshots, presentations, and visual content directly into your 
            intelligence reports for comprehensive context and enhanced clarity.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 rounded-lg text-primary-100">
            <CameraIcon className="h-5 w-5 mr-2" />
            <span>Automated visual context capture</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <HeartIcon className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-secondary-300">
              Engineered with excellence by the Inferra.ai team
            </p>
          </div>
          <p className="text-secondary-500 text-sm">
            Empowering enterprise teams with intelligent meeting solutions since 2024
          </p>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
