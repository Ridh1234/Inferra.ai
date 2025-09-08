
import { 
  MicrophoneIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const SignInPage = () => {
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    const callbackUrl = "http://localhost:3000/api/oauth/google";
    window.open(callbackUrl, "_self");
  };

  const features = [
    {
      icon: MicrophoneIcon,
      title: "Real-time Transcripts",
      description: "AI-powered speech-to-text with enterprise-grade accuracy"
    },
    {
      icon: DocumentTextIcon,
      title: "Smart Summaries",
      description: "Intelligent meeting insights and action items"
    },
    {
      icon: ChartBarIcon,
      title: "Analytics Dashboard",
      description: "Track meeting performance and team collaboration"
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "SOC 2 compliant with bank-grade encryption"
    }
  ];

  const benefits = [
    "Reduce meeting overhead by 40%",
    "Never miss important decisions",
    "Automatic action item tracking",
    "Seamless team collaboration",
    "Enterprise-grade security"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Branding and Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-600 text-white p-12 flex-col justify-center">
        <div className="max-w-md">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">I</span>
            </div>
            <h1 className="text-3xl font-heading font-bold">Inferra.ai</h1>
          </div>

          <h2 className="text-4xl font-heading font-bold mb-6 leading-tight">
            Transform Meetings into Strategic Intelligence
          </h2>
          
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join thousands of teams using AI-powered meeting intelligence to boost productivity and never miss important insights.
          </p>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-accent-200 mr-3 flex-shrink-0" />
                <span className="text-primary-100">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
              <div className="text-2xl font-bold mb-1">99.2%</div>
              <div className="text-sm text-primary-200">Accuracy</div>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
              <div className="text-2xl font-bold mb-1">10k+</div>
              <div className="text-sm text-primary-200">Teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center mr-3">
              <span className="text-xl font-bold text-white">I</span>
            </div>
            <span className="logo-text text-2xl font-heading font-bold">Inferra.ai</span>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-secondary-600">
                Sign in to access your meeting intelligence dashboard
              </p>
            </div>

            {/* Features Grid - Mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <feature.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-6 py-4 border border-gray-300 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 hover:border-primary-300 group"
            >
              <img 
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                alt="Google Logo" 
                className="w-6 h-6 mr-3" 
              />
              <span className="font-medium text-secondary-700 group-hover:text-primary-600">
                Continue with Google
              </span>
            </button>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-center text-xs text-secondary-500 mb-4">
                Trusted by 10,000+ teams worldwide
              </p>
              <div className="flex justify-center space-x-6 text-xs text-secondary-400">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-4 w-4 mr-1" />
                  <span>SOC 2</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-1" />
                  <span>GDPR</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-1" />
                  <span>Enterprise</span>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <p className="mt-6 text-center text-xs text-secondary-500 leading-relaxed">
              By signing in, you agree to our Terms of Service and Privacy Policy. 
              We use secure Google OAuth and only collect necessary information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
