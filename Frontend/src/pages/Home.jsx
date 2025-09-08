import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { ArrowRightIcon, PlayIcon, CheckIcon } from "@heroicons/react/24/solid";
import { 
  MicrophoneIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon 
} from "@heroicons/react/24/outline";

function Home() {
  const { state } = useAuthContext();
  const navigate = useNavigate();

  const features = [
    {
      icon: MicrophoneIcon,
      title: "Real-time Transcription",
      description: "AI-powered speech-to-text with 99%+ accuracy for seamless meeting documentation."
    },
    {
      icon: DocumentTextIcon,
      title: "Smart Summaries",
      description: "Intelligent meeting summaries highlighting key decisions, action items, and insights."
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description: "Track meeting performance, participation metrics, and team collaboration patterns."
    },
    {
      icon: ClockIcon,
      title: "Time Optimization",
      description: "Reduce meeting overhead by 40% with automated documentation and follow-ups."
    },
    {
      icon: UserGroupIcon,
      title: "Team Collaboration",
      description: "Seamless integration with your existing workflow and team communication tools."
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC 2, GDPR, and enterprise standards."
    }
  ];

  const testimonials = [
    {
      quote: "Inferra.ai transformed how we document meetings. Our productivity increased by 60% in just the first month.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp Inc."
    },
    {
      quote: "The AI-generated summaries are incredibly accurate. It's like having a personal assistant in every meeting.",
      author: "Michael Rodriguez",
      role: "Head of Product",
      company: "StartupXYZ"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-32 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Now available for Google Meet
            </div>
            
            <h1 className="hero-title text-5xl lg:text-7xl font-heading font-bold text-secondary-900 mb-12 leading-tight">
              Transform Meetings into
              <span className="logo-text block mt-2">Strategic Intelligence</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-secondary-600 mb-10 max-w-4xl mx-auto leading-relaxed mt-16">
              Inferra.ai leverages advanced AI to automatically generate meeting transcripts, 
              intelligent summaries, and actionable insights for enterprise teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => state?.user ? navigate("/dashboard") : navigate("/login")} 
                className="btn-primary flex items-center text-lg px-8 py-4"
              >
                Get Started Free
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              
              <button className="btn-secondary flex items-center text-lg px-8 py-4">
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-500">
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Everything you need for intelligent meetings
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive AI-powered meeting intelligence that scales with your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:border-primary-200 group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
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

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
                  Seamless Google Meet Integration
                </h3>
                <p className="text-lg text-secondary-600 mb-6">
                  Install our Chrome extension and transform every Google Meet into 
                  a documented, searchable knowledge asset. More platforms coming soon.
                </p>
                <button 
                  onClick={() => state?.user ? navigate("/dashboard") : navigate("/login")}
                  className="btn-primary"
                >
                  Install Extension
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl p-8 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">99.2%</div>
                    <div className="text-primary-100">Transcription Accuracy</div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-semibold">40%</div>
                      <div className="text-xs text-primary-100">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">24/7</div>
                      <div className="text-xs text-primary-100">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Trusted by forward-thinking teams
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <blockquote className="text-lg text-secondary-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                    <div className="text-secondary-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to revolutionize your meetings?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of teams already using Inferra.ai to transform their meeting productivity
          </p>
          <button 
            onClick={() => state?.user ? navigate("/dashboard") : navigate("/login")}
            className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Start Free Trial Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
