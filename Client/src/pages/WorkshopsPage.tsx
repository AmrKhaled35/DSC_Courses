import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Clock, Users, Star, ArrowLeft } from "lucide-react";

interface WorkshopsPageProps {
  setLoading: (loading: boolean) => void;
}

const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ setLoading }) => {
  useEffect(() => {
    // document.title = 'All Workshops - DSC';
  }, []);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  const workshops = [
    {
      id: "ai-ml",
      icon: "🤖",
      title: "AI & Machine Learning",
      description:
        "Master artificial intelligence and machine learning from fundamentals to advanced neural networks",
      duration: "9 weeks",
      sessions: "18 sessions",
      level: "Beginner to Advanced",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/50 to-pink-500/50",
    },
    {
      id: "cybersecurity",
      icon: "🛡",
      title: "Cybersecurity",
      description:
        "Learn to protect digital assets and understand security fundamentals, penetration testing, and bug bounty",
      duration: "8 weeks",
      sessions: "15 sessions",
      level: "Beginner to Advanced",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 to-orange-500/10",
      borderGradient: "from-red-500/50 to-orange-500/50",
    },
    {
      id: "backend",
      icon: "💻",
      title: "Backend Development",
      description:
        "Build robust server-side applications with C#, .NET, databases, and modern architecture patterns",
      duration: "9 weeks",
      sessions: "18 sessions",
      level: "Beginner to Advanced",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
    },
    {
      id: "frontend",
      icon: "🌐",
      title: "Frontend Development",
      description:
        "Create stunning user interfaces with HTML, CSS, JavaScript, and modern frameworks",
      duration: "10 weeks",
      sessions: "20 sessions",
      level: "Beginner to Advanced",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10",
      borderGradient: "from-green-500/50 to-teal-500/50",
    },
    {
      id: "mobile",
      icon: "📱",
      title: "Mobile Development (Flutter)",
      description:
        "Build cross-platform mobile applications with Flutter and deploy to both iOS and Android",
      duration: "8 weeks",
      sessions: "8 sessions",
      level: "Beginner to Advanced",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderGradient: "from-indigo-500/50 to-purple-500/50",
    },
    {
      id: "uiux",
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Design beautiful and intuitive user experiences with modern design principles and tools",
      duration: "9 weeks",
      sessions: "14 sessions",
      level: "Beginner to Advanced",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      borderGradient: "from-pink-500/50 to-rose-500/50",
    },
    {
      id: "videoEditing",
      icon: "🎬",
      title: "Video Editing",
      description:
        "Master the art of video editing using Adobe Premiere Pro. Learn everything from basic cuts to advanced effects and final exports.",
      duration: "10 weeks",
      sessions: "20 sessions",
      level: "Beginner to Intermediate",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      borderGradient: "from-yellow-500/50 to-orange-500/50",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/"
              onClick={handleNavigation}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">&lt;//&gt;</span>
              </div>
              <span className="text-xl font-bold text-white">DSC Courses</span>
            </Link>
            <Link
              to="/"
              onClick={handleNavigation}
              className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 text-white px-4 py-2 rounded-full transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-20">
        {/* Background with Green-Blue Mix */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-6 py-3 mb-8 border border-gray-700">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">
              6 Comprehensive Tracks Available
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block">
              Learning Path
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ">
            Explore our comprehensive Course tracks designed to take you from
            beginner to professional. Each track includes 20 hands-on sessions
            over 10 weeks.
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-green-400/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className={`group relative bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-gray-900/50`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {workshop.id === "videoEditing" && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    New
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${workshop.borderGradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
                ></div>

                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {workshop.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {workshop.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {workshop.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-gray-500 group-hover:text-gray-400 transition-colors">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{workshop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500 group-hover:text-gray-400 transition-colors">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{workshop.sessions}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500 group-hover:text-gray-400 transition-colors">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{workshop.level}</span>
                  </div>
                </div>

                <Link
                  to={`/workshop/${workshop.id}`}
                  onClick={handleNavigation}
                  className={`group/btn inline-flex items-center space-x-2 bg-gradient-to-r ${workshop.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full justify-center`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-black to-gray-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-gray-400">Course Tracks</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">10</div>
              <div className="text-gray-400">Weeks Duration</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">120</div>
              <div className="text-gray-400">Total Sessions</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Students Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">
                <span className="mb-6">&lt;</span>//&gt;
              </span>
            </div>
            <span className="text-xl font-bold text-white">
              Developer Student Clubs
            </span>
          </div>
          <p className="text-gray-400">
            Your journey to mastery starts here • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopsPage;
