import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Users,
  Calendar,
  Star,
  Sparkles,
  Rocket,
  Target,
  Clock,
} from "lucide-react";

interface LandingPageProps {
  setLoading: (loading: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setLoading }) => {
  useEffect(() => {
    document.title = "DSC Courses";
  }, []);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold"><span className="mb-6">&lt;</span>//&gt;</span>
              </div>
              <span className="text-xl font-bold text-white">DSC Courses</span>
            </div>
            <Link
              to="/workshops"
              onClick={handleNavigation}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background with Green-Blue Mix */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* Start Date Announcement */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full px-8 py-4 mb-8 border border-green-400/30 backdrop-blur-sm">
              <Calendar className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-bold text-lg">
                Starting July 26th, 2025
              </span>
              <Clock className="w-6 h-6 text-blue-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block">
                Tech Journey
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Developer Student Clubs for an intensive 10-week journey
              across 6 cutting-edge technology tracks. From AI to Cybersecurity,
              we'll guide you from beginner to professional.
            </p>

            {/* Workshop Stats */}
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-6 py-3 mb-12 border border-gray-700">
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">
                10 Weeks • 6 Tracks • Unlimited Potential
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/workshops"
                onClick={handleNavigation}
                className="group bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
              <div className="group h-full bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/20">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hands-on Learning
                </h3>
                <p className="text-gray-400">
                  Build real projects while learning from industry experts and
                  gain practical experience
                </p>
              </div>

              <div className="group h-full bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/20 md:mt-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Expert Mentorship
                </h3>
                <p className="text-gray-400">
                  Learn from experienced developers and industry professionals
                  with years of expertise
                </p>
              </div>

              <div className="group h-full bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-400/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Career Ready
                </h3>
                <p className="text-gray-400">
                  Graduate with portfolio projects and industry connections to
                  kickstart your career
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Tracks Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background with subtle green-blue mix */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-black to-gray-900/30"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Path
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Six comprehensive tracks designed to take you from beginner to
              professional in just 10 weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI & Machine Learning",
                desc: "Master the future of technology with neural networks and deep learning",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: "🛡",
                title: "Cybersecurity",
                desc: "Protect the digital world with ethical hacking and penetration testing",
                gradient: "from-red-500 to-orange-500",
              },
              {
                icon: "💻",
                title: "Backend Development",
                desc: "Build robust server solutions with C# and .NET frameworks",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🌐",
                title: "Frontend Development",
                desc: "Create stunning user experiences with modern web technologies",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: "📱",
                title: "Mobile Development",
                desc: "Flutter apps for any platform - iOS and Android from one codebase",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Design beautiful, intuitive interfaces that users love",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((track, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {track.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
        {/* Background Blurs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              10 Weeks to
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A carefully structured journey with 2 Sessions per week, building
              your skills progressively
            </p>
          </div>

          {/* Timeline Line */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>

            {/* Timeline Phases */}
            <div className="space-y-12">
              {[
                {
                  week: "Week 1-2",
                  title: "Foundation Building",
                  desc: "Master the fundamentals and core concepts",
                },
                {
                  week: "Week 3-5",
                  title: "Core Development",
                  desc: "Dive deep into your chosen track specialization",
                },
                {
                  week: "Week 6-8",
                  title: "Advanced Topics",
                  desc: "Tackle complex challenges and real-world scenarios",
                },
                {
                  week: "Week 9-10",
                  title: "Final Projects",
                  desc: "Build your portfolio with capstone projects",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center md:flex-row ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
                      <div className="text-green-400 font-bold text-lg mb-3">
                        {phase.week}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-gray-400">{phase.desc}</p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-black shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers through
            our comprehensive Course program
          </p>

          <Link
            to="/workshops"
            onClick={handleNavigation}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-6 h-6" />
            <span>View All Courses</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">&lt;//&gt;</span>
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

export default LandingPage;
