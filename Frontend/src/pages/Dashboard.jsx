import { useEffect, useState } from 'react';
import MeetCard from '../components/MeetCard';
import { 
  ExclamationTriangleIcon, 
  ArrowPathIcon, 
  CalendarDaysIcon,
  ChartBarIcon,
  UsersIcon,
  ClockIcon,
  DocumentTextIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [meets, setMeets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoEnabled, setAutoEnabled] = useState(false);

  // Mock stats for professional dashboard
  const stats = [
    {
      icon: CalendarDaysIcon,
      label: "Total Meetings",
      value: meets.length.toString(),
      change: "+12%",
      changeType: "positive"
    },
    {
      icon: ClockIcon,
      label: "Hours Saved",
      value: Math.floor(meets.length * 0.75).toString(),
      change: "+18%",
      changeType: "positive"
    },
    {
      icon: DocumentTextIcon,
      label: "Reports Generated",
      value: Math.floor(meets.length * 1.2).toString(),
      change: "+25%",
      changeType: "positive"
    },
    {
      icon: UsersIcon,
      label: "Team Members",
      value: "8",
      change: "+2",
      changeType: "positive"
    }
  ];

  useEffect(() => {
    const fetchMeets = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/meet', {
          method: "GET",
          credentials: 'include'
        });

        const data = await response.json();
        if (!response.ok) throw (data);
        setMeets(data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAutoEnabled = async () => {
      try {
        const response = await fetch('/api/auto-enabled', {
          method: 'GET',
          credentials: 'include',
        });
        const { autoEnabled } = await response.json();
        setAutoEnabled(autoEnabled || false);
      } catch (error) {
        console.error("Error fetching auto-enabled status:", error);
      }
    };

    fetchMeets();
    fetchAutoEnabled();
  }, []);

  const handleToggleChange = async () => {
    setAutoEnabled(!autoEnabled);

    try {
      await fetch('/api/auto-enabled', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ autoEnabled: !autoEnabled }),
      });
    } catch (error) {
      console.error("Error updating auto-enabled status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-secondary-900">
                Meeting Intelligence Dashboard
              </h1>
              <p className="mt-2 text-secondary-600">
                Monitor your team's meeting productivity and insights
              </p>
            </div>

            {/* Settings Toggle */}
            <div className="mt-4 lg:mt-0">
              <div className="card p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cog6ToothIcon className="h-5 w-5 text-secondary-500 mr-2" />
                    <span className="text-secondary-700 font-medium">Auto Email Reports</span>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      autoEnabled ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    onClick={handleToggleChange}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        autoEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-secondary-500 mt-1">
                  Automatically send meeting reports after each session
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-500">{stat.label}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-secondary-900">{stat.value}</p>
                    <span className={`ml-2 text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-heading font-semibold text-secondary-900">
              Recent Meetings
            </h2>
            <button className="btn-outline text-sm">
              View All
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <ArrowPathIcon className="animate-spin h-8 w-8 text-primary-500 mb-4" />
              <p className="text-lg font-medium text-secondary-700">Loading meetings...</p>
              <p className="text-secondary-500">This may take a moment</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
              </div>
              <p className="text-lg font-medium text-red-700 mb-2">Unable to load meetings</p>
              <p className="text-red-600 text-center max-w-md">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 btn-secondary"
              >
                Try Again
              </button>
            </div>
          )}

          {/* No Meetings State */}
          {!loading && !error && meets.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <CalendarDaysIcon className="h-8 w-8 text-secondary-500" />
              </div>
              <p className="text-lg font-medium text-secondary-700 mb-2">No meetings yet</p>
              <p className="text-secondary-500 text-center max-w-md mb-6">
                Start using Inferra.ai in your Google Meet sessions to see intelligent meeting summaries here
              </p>
              <button className="btn-primary">
                Install Chrome Extension
              </button>
            </div>
          )}

          {/* Meet Cards Grid */}
          {!loading && !error && meets.length > 0 && (
            <div className="grid gap-6">
              {meets.map(meet => (
                <MeetCard
                  key={meet._id}
                  meet={meet}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              ))}
            </div>
          )}
        </div>

        {/* Analytics Preview Card */}
        {meets.length > 0 && (
          <div className="mt-8 card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <ChartBarIcon className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-heading font-semibold text-secondary-900">
                  Meeting Analytics
                </h3>
              </div>
              <button className="btn-outline text-sm">
                View Detailed Analytics
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {Math.round(meets.length * 45)}min
                </div>
                <div className="text-sm text-primary-700">Avg Meeting Duration</div>
              </div>
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 mb-1">
                  {Math.round(meets.length * 3.2)}
                </div>
                <div className="text-sm text-accent-700">Avg Participants</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  97.8%
                </div>
                <div className="text-sm text-green-700">Transcription Accuracy</div>
              </div>
            </div>
          </div>
        )}

        {/* Dim background when modal is open */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
