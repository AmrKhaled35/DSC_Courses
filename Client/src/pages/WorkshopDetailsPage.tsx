import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Code2,
  Calendar,
  Clock,
  Users,
  Star,
  Download,
  User,
  Mail,
  Linkedin,
} from "lucide-react";

interface WorkshopDetailsPageProps {
  setLoading: (loading: boolean) => void;
}

const WorkshopDetailsPage: React.FC<WorkshopDetailsPageProps> = ({
  setLoading,
}) => {
  const { id } = useParams<{ id: string }>();
  const [workshop, setWorkshop] = useState<any>(null);

  useEffect(() => {
    // Simulate loading workshop data
    const workshopData = getWorkshopData(id);
    setWorkshop(workshopData);
  }, [id]);

  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  const getWorkshopData = (workshopId: string | undefined) => {
    const workshops: { [key: string]: any } = {
      "ai-ml": {
        id: "ai-ml",
        icon: "🤖",
        title: "AI & Machine Learning",
        description:
          "Embark on a transformative journey into the world of Artificial Intelligence and Machine Learning. This comprehensive track will take you from understanding basic concepts to building sophisticated neural networks and deploying AI solutions.",
        story:
          "In a world where data is the new oil, AI and Machine Learning have become the engines that drive innovation. From recommendation systems that know your preferences better than you do, to autonomous vehicles navigating complex roads, AI is reshaping every industry. This workshop will equip you with the skills to be part of this revolution.",
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/10",
        content: [
          {
            title:
              "Introduction to AI and Data Science & ML/Data Preprocessing & EDA",
            description:
              "Learn the fundamentals of artificial intelligence, explore data science concepts, and master data preprocessing techniques with exploratory data analysis.",
          },
          {
            title:
              "Introduction to NumPy & Intro Pandas/Data Visualization with Matplotlib & Seaborn",
            description:
              "Master essential Python libraries for data manipulation and create compelling visualizations to understand your data better.",
          },
          {
            title:
              "Introduction to Supervised Learning – Regression: Linear Regression introduction",
            description:
              "Dive into supervised learning with linear regression, understanding how machines learn from labeled data to make predictions.",
          },
          {
            title: "Logistic Regression & SVM",
            description:
              "Explore classification algorithms including logistic regression and support vector machines for binary and multi-class problems.",
          },
          {
            title: "Time series Analysis",
            description:
              "Learn to analyze and forecast time-dependent data, essential for financial markets, weather prediction, and trend analysis.",
          },
          {
            title:
              "K-Nearest Neighbors (KNN) & Model Tuning and Cross-Validation",
            description:
              "Understand instance-based learning with KNN and master techniques for optimizing model performance and validation.",
          },
          {
            title:
              "Decision tree / Random forest/Ensemble learning /Bagging /Boosting /Stacking",
            description:
              "Master tree-based algorithms and ensemble methods that combine multiple models for superior performance.",
          },
          {
            title:
              "Clustering K mean DBSCAN/ Hierarchical clustering /Fuzzy Clustering",
            description:
              "Explore unsupervised learning with various clustering algorithms to discover hidden patterns in data.",
          },
          {
            title: "ML Project Break - Apply your knowledge",
            description:
              "Put your machine learning skills to the test with a comprehensive project that demonstrates your understanding.",
          },
          {
            title:
              "Introduction to Neural Networks & Building Deep Neural Networks",
            description:
              "Enter the world of deep learning by understanding how neural networks mimic the human brain to solve complex problems.",
          },
          {
            title: "Convolutional Neural Networks (CNN) /Transfer learning",
            description:
              "Master computer vision with CNNs and learn to leverage pre-trained models through transfer learning techniques.",
          },
          {
            title: "Siamese Networks /Face Recognition",
            description:
              "Build advanced neural architectures for similarity learning and implement real-world face recognition systems.",
          },
          {
            title: "Autoencoders",
            description:
              "Learn unsupervised neural networks for dimensionality reduction, denoising, and generative modeling.",
          },
          {
            title: "RNN",
            description:
              "Understand recurrent neural networks for processing sequential data like text, speech, and time series.",
          },
          {
            title: "LSTM /GRU",
            description:
              "Master advanced RNN architectures that solve the vanishing gradient problem for long-term dependencies.",
          },
          {
            title: "Transformers",
            description:
              "Explore the revolutionary transformer architecture that powers modern language models like GPT and BERT.",
          },
          {
            title: "DL Project Break - Build your portfolio",
            description:
              "Create an impressive deep learning project that showcases your skills to potential employers.",
          },
          {
            title: "Advanced AI Topics",
            description:
              "Explore cutting-edge AI research including GANs, reinforcement learning, and emerging architectures.",
          },
          {
            title: "Model Deployment & Production",
            description:
              "Learn to deploy your AI models to production environments using cloud platforms and containerization.",
          },
          {
            title: "Final Project Presentation",
            description:
              "Present your capstone AI project, demonstrating your journey from beginner to AI practitioner.",
          },
        ],
      },
      cybersecurity: {
        id: "cybersecurity",
        icon: "🛡",
        title: "Cybersecurity",
        description:
          "Enter the critical world of cybersecurity where you'll learn to protect digital assets, understand threat landscapes, and master the art of ethical hacking and penetration testing.",
        story:
          "In an interconnected world where cyber threats evolve daily, cybersecurity professionals stand as digital guardians. From protecting personal data to securing critical infrastructure, cybersecurity experts are the unsung heroes of our digital age. This workshop will train you to think like both an attacker and defender.",
        gradient: "from-red-500 to-orange-500",
        bgGradient: "from-red-500/10 to-orange-500/10",
        content: [
          {
            title: "Intro to Cybersecurity",
            description:
              "Understand the cybersecurity landscape, threat actors, and the fundamental principles of information security.",
          },
          {
            title: "Network Fundamentals (1)",
            description:
              "Learn the basics of computer networks, protocols, and how data flows across the internet.",
          },
          {
            title: "Network Fundamentals (2)",
            description:
              "Dive deeper into network architecture, routing, switching, and network security concepts.",
          },
          {
            title: "Linux Fundamentals",
            description:
              "Master the Linux command line, file systems, and security features essential for cybersecurity professionals.",
          },
          {
            title: "Windows Fundamentals",
            description:
              "Understand Windows architecture, Active Directory, and Windows-specific security mechanisms.",
          },
          {
            title: "Web Fundamentals",
            description:
              "Learn how web applications work, HTTP protocols, and common web technologies.",
          },
          {
            title: "Front End Security",
            description:
              "Explore client-side vulnerabilities, browser security, and frontend attack vectors.",
          },
          {
            title: "Back End Security",
            description:
              "Understand server-side security, database protection, and backend vulnerability assessment.",
          },
          {
            title: "SQL Injection & XSS",
            description:
              "Master the most common web vulnerabilities: SQL injection and Cross-Site Scripting attacks.",
          },
          {
            title: "Logic Bugs",
            description:
              "Learn to identify and exploit business logic flaws that bypass traditional security measures.",
          },
          {
            title: "Burp Suite",
            description:
              "Master the industry-standard web application security testing tool for professional penetration testing.",
          },
          {
            title: "BAC - IDOR - Privilege Escalation",
            description:
              "Understand Broken Access Control, Insecure Direct Object References, and privilege escalation techniques.",
          },
          {
            title: "Reconnaissance Techniques",
            description:
              "Learn information gathering techniques used in the initial phases of penetration testing.",
          },
          {
            title: "What is Bug Bounty?",
            description:
              "Explore the world of ethical hacking through bug bounty programs and responsible disclosure.",
          },
          {
            title: "Vulnerability Assessment",
            description:
              "Learn systematic approaches to identifying and assessing security vulnerabilities in systems.",
          },
          {
            title: "Penetration Testing Methodology",
            description:
              "Master structured penetration testing frameworks and methodologies used by professionals.",
          },
          {
            title: "Social Engineering",
            description:
              "Understand human-based attacks and how to protect against psychological manipulation techniques.",
          },
          {
            title: "Incident Response",
            description:
              "Learn how to respond to security incidents, contain breaches, and recover from attacks.",
          },
          {
            title: "Reporting & Documentation",
            description:
              "Master the art of writing professional security reports and documenting findings effectively.",
          },
          {
            title: "Capstone Security Project",
            description:
              "Apply all your cybersecurity knowledge in a comprehensive project simulating real-world scenarios.",
          },
        ],
      },
      backend: {
        id: "backend",
        icon: "🔙",
        title: "Backend Development",
        description:
          "Master the art of server-side development with C# and .NET. Learn to build scalable, secure, and efficient backend systems that power modern applications.",
        story:
          "Behind every great application lies a robust backend system. Like the foundation of a skyscraper, backend development provides the structure, security, and scalability that users never see but always depend on. This workshop will teach you to architect and build these critical systems.",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
        content: [
          {
            title: "Software Principles",
            description:
              "Learn fundamental software engineering principles, clean code practices, and architectural thinking.",
          },
          {
            title: "Database Fundamentals",
            description:
              "Master relational database concepts, SQL basics, and database design principles.",
          },
          {
            title: "Advanced Database Concepts",
            description:
              "Explore advanced SQL, database optimization, indexing, and performance tuning techniques.",
          },
          {
            title: "C# Basics",
            description:
              "Learn C# syntax, data types, control structures, and basic programming concepts.",
          },
          {
            title: "C# Object-Oriented Programming",
            description:
              "Master OOP principles in C#: classes, objects, inheritance, and encapsulation.",
          },
          {
            title: "Advanced C# OOP",
            description:
              "Dive deeper into polymorphism, abstraction, interfaces, and advanced OOP patterns.",
          },
          {
            title: "C# Advanced Features",
            description:
              "Explore generics, delegates, events, lambda expressions, and modern C# features.",
          },
          {
            title: "SOLID Principles",
            description:
              "Master the five SOLID principles for writing maintainable and scalable object-oriented code.",
          },
          {
            title: "Design Patterns",
            description:
              "Learn common design patterns like Singleton, Factory, Observer, and their practical applications.",
          },
          {
            title: "LINQ Fundamentals",
            description:
              "Master Language Integrated Query for efficient data manipulation and querying in C#.",
          },
          {
            title: "Advanced LINQ",
            description:
              "Explore complex LINQ operations, custom extensions, and performance optimization techniques.",
          },
          {
            title: "Entity Framework Introduction",
            description:
              "Learn Microsoft's ORM framework for database operations and code-first development.",
          },
          {
            title: "Advanced Entity Framework",
            description:
              "Master complex relationships, migrations, performance optimization, and EF best practices.",
          },
          {
            title: "ASP.NET Core Basics",
            description:
              "Build your first web applications with ASP.NET Core framework and understand MVC architecture.",
          },
          {
            title: "ASP.NET Web APIs",
            description:
              "Create RESTful APIs, handle HTTP requests, and implement proper API design principles.",
          },
          {
            title: "ASP.NET Authentication & Authorization",
            description:
              "Implement secure authentication systems, JWT tokens, and role-based authorization.",
          },
          {
            title: "ASP.NET Advanced Topics",
            description:
              "Explore middleware, dependency injection, configuration management, and advanced ASP.NET features.",
          },
          {
            title: "Microservices Architecture",
            description:
              "Learn to design and implement microservices-based applications for scalability and maintainability.",
          },
          {
            title: "Testing & Deployment",
            description:
              "Master unit testing, integration testing, and deployment strategies for production applications.",
          },
          {
            title: "Final Backend Project",
            description:
              "Build a complete backend system demonstrating all learned concepts and best practices.",
          },
        ],
      },
      frontend: {
        id: "frontend",
        icon: "🌐",
        title: "Frontend Development",
        description:
          "Create stunning, interactive user interfaces that captivate users. Master HTML, CSS, JavaScript, and modern frameworks to build responsive, accessible web applications.",
        story:
          "The frontend is where users meet technology. It's the bridge between human needs and digital solutions. Every click, scroll, and interaction is carefully crafted by frontend developers who understand both aesthetics and functionality. This workshop will teach you to create digital experiences that users love.",
        gradient: "from-green-500 to-teal-500",
        bgGradient: "from-green-500/10 to-teal-500/10",
        content: [
          {
            title: "HTML Fundamentals and Structure",
            description:
              "Learn the building blocks of web pages with semantic HTML, document structure, and accessibility basics.",
          },
          {
            title: "HTML Content and Forms",
            description:
              "Master HTML content elements, form creation, input validation, and user interaction elements.",
          },
          {
            title: "CSS Fundamentals and Styling",
            description:
              "Understand CSS syntax, selectors, properties, and basic styling techniques for beautiful web pages.",
          },
          {
            title: "CSS Layout and Positioning",
            description:
              "Master CSS layout techniques including flexbox, grid, positioning, and creating complex layouts.",
          },
          {
            title: "CSS Practice Session",
            description:
              "Apply your CSS knowledge through hands-on exercises and real-world styling challenges.",
          },
          {
            title: "Advanced CSS Layout and Positioning",
            description:
              "Explore advanced layout techniques, CSS Grid mastery, and complex responsive design patterns.",
          },
          {
            title: "CSS Animations",
            description:
              "Create engaging user experiences with CSS transitions, keyframe animations, and interactive effects.",
          },
          {
            title: "Responsive Design and Advanced CSS",
            description:
              "Master mobile-first design, media queries, and advanced CSS features for all device types.",
          },
          {
            title: "Responsive Design Practice",
            description:
              "Build responsive layouts that work perfectly across desktop, tablet, and mobile devices.",
          },
          {
            title: "Bootstrap Framework",
            description:
              "Learn the popular CSS framework for rapid prototyping and responsive web development.",
          },
          {
            title: "JavaScript Fundamentals",
            description:
              "Master JavaScript basics: variables, functions, control structures, and core programming concepts.",
          },
          {
            title: "ES6+ & Array Methods",
            description:
              "Explore modern JavaScript features, arrow functions, destructuring, and powerful array methods.",
          },
          {
            title: "JavaScript Practice Session",
            description:
              "Strengthen your JavaScript skills through coding exercises and problem-solving challenges.",
          },
          {
            title: "DOM Manipulation & Events",
            description:
              "Learn to interact with web pages dynamically, handle user events, and modify page content.",
          },
          {
            title: "Advanced DOM & Events",
            description:
              "Master complex DOM operations, event delegation, and building interactive web applications.",
          },
          {
            title: "DOM Practice Session",
            description:
              "Build interactive features and dynamic user interfaces using DOM manipulation techniques.",
          },
          {
            title: "Asynchronous JavaScript & APIs",
            description:
              "Master promises, async/await, fetch API, and working with external data sources.",
          },
          {
            title: "Async JavaScript Practice",
            description:
              "Build applications that consume APIs and handle asynchronous operations effectively.",
          },
          {
            title: "Code Organization & Final Project Setup",
            description:
              "Learn best practices for organizing code, project structure, and setting up your portfolio project.",
          },
          {
            title: "Final Project Completion & Presentation",
            description:
              "Complete your comprehensive frontend project and present your work to showcase your skills.",
          },
        ],
      },
      mobile: {
        id: "mobile",
        icon: "📱",
        title: "Mobile Development (Flutter)",
        description:
          "Build beautiful, natively compiled applications for mobile from a single codebase using Flutter. Learn to create apps that work seamlessly on both iOS and Android.",
        story:
          "Mobile devices have become extensions of ourselves, and mobile apps are the tools we use to navigate our daily lives. Flutter represents the future of mobile development - write once, run everywhere. This workshop will teach you to create mobile experiences that feel native on every platform.",
        gradient: "from-indigo-500 to-purple-500",
        bgGradient: "from-indigo-500/10 to-purple-500/10",
        content: [
          {
            title: "Intro to Flutter: Build Your First App",
            description:
              "Get started with Flutter development, understand the framework, and create your first mobile application.",
          },
          {
            title: "Flutter Widgets & Basic UI Design",
            description:
              "Master Flutter's widget system and learn to create beautiful, responsive user interfaces.",
          },
          {
            title: "Navigation & Routing in Flutter",
            description:
              "Implement navigation between screens, route management, and create seamless user flows.",
          },
          {
            title: "State Management with Provider",
            description:
              "Learn efficient state management techniques using Provider pattern for scalable Flutter apps.",
          },
          {
            title: "Consuming REST APIs in Flutter",
            description:
              "Connect your Flutter app to backend services, handle HTTP requests, and manage API data.",
          },
          {
            title: "Firebase Authentication in Flutter",
            description:
              "Implement secure user authentication using Firebase services and manage user sessions.",
          },
          {
            title: "Cloud Firestore: Read & Write Data",
            description:
              "Master Firebase Firestore for real-time database operations and data synchronization.",
          },
          {
            title: "Building Custom Widgets & Modern UI",
            description:
              "Create reusable custom widgets and implement modern UI design patterns and animations.",
          },
          {
            title: "Debugging & Performance Optimization",
            description:
              "Learn debugging techniques, performance profiling, and optimization strategies for Flutter apps.",
          },
          {
            title: "Preparing & Publishing Your App on Google Play (Theory)",
            description:
              "Understand the app publishing process, store requirements, and deployment strategies.",
          },
          {
            title: "Advanced State Management",
            description:
              "Explore advanced state management solutions like Bloc, Riverpod, and architectural patterns.",
          },
          {
            title: "Local Storage & Offline Capabilities",
            description:
              "Implement local data storage, caching strategies, and offline-first app architecture.",
          },
          {
            title: "Push Notifications",
            description:
              "Integrate push notifications to engage users and provide real-time updates.",
          },
          {
            title: "Camera & Media Integration",
            description:
              "Access device camera, handle media files, and implement photo/video functionality.",
          },
          {
            title: "Maps & Location Services",
            description:
              "Integrate maps, GPS functionality, and location-based features in your Flutter apps.",
          },
          {
            title: "Testing Flutter Apps",
            description:
              "Master unit testing, widget testing, and integration testing for reliable Flutter applications.",
          },
          {
            title: "App Store Optimization",
            description:
              "Learn strategies for app store visibility, user acquisition, and app marketing.",
          },
          {
            title: "Monetization Strategies",
            description:
              "Explore different app monetization models, in-app purchases, and revenue optimization.",
          },
          {
            title: "Advanced Flutter Animations",
            description:
              "Create stunning animations, custom transitions, and engaging user interactions.",
          },
          {
            title: "Final Mobile App Project",
            description:
              "Build a complete mobile application showcasing all learned concepts and best practices.",
          },
        ],
      },
      uiux: {
        id: "uiux",
        title: "UI/UX Design",
        icon: "🎨",
        description:
          "Design beautiful, intuitive user experiences that solve real problems. Learn design thinking, user research, prototyping, and the principles that make great digital products.",
        story:
          "Great design is invisible - it solves problems so elegantly that users don't even notice the complexity behind the simplicity. UI/UX designers are the architects of digital experiences, crafting interfaces that are both beautiful and functional. This workshop will teach you to think like a user and design like a professional.",
        gradient: "from-pink-500 to-rose-500",
        bgGradient: "from-pink-500/10 to-rose-500/10",
        content: [
          {
            title: "Introduction & Design Theory",
            description:
              "Understand the fundamentals of design, design thinking principles, and the role of UI/UX in product development.",
          },
          {
            title: "User Research Methods",
            description:
              "Learn various user research techniques, interviews, surveys, and how to gather meaningful user insights.",
          },
          {
            title: "Design Thinking Workshop",
            description:
              "Apply design thinking methodology to solve real problems through empathy, ideation, and iteration.",
          },
          {
            title: "Information Architecture",
            description:
              "Master the art of organizing and structuring content for optimal user navigation and understanding.",
          },
          {
            title: "Practical Design Thinking",
            description:
              "Apply design thinking principles to real-world projects and develop problem-solving skills.",
          },
          {
            title: "Wireframing Techniques",
            description:
              "Learn to create effective wireframes that communicate layout, structure, and functionality clearly.",
          },
          {
            title: "Visual Design Principles",
            description:
              "Master fundamental design principles: hierarchy, contrast, balance, alignment, and visual harmony.",
          },
          {
            title: "Color Theory & Typography",
            description:
              "Understand color psychology, typography principles, and how to create cohesive visual systems.",
          },
          {
            title: "UI Design & Prototyping",
            description:
              "Create high-fidelity user interfaces and interactive prototypes using industry-standard tools.",
          },
          {
            title: "Design Systems",
            description:
              "Build scalable design systems with consistent components, patterns, and style guides.",
          },
          {
            title: "Interactive Prototyping & Feedback",
            description:
              "Create interactive prototypes, conduct user testing, and iterate based on feedback.",
          },
          {
            title: "Usability Testing",
            description:
              "Learn to conduct effective usability tests, analyze results, and improve user experiences.",
          },
          {
            title: "Accessibility in Design",
            description:
              "Design inclusive experiences that work for users with diverse abilities and needs.",
          },
          {
            title: "Mobile UI Design",
            description:
              "Master mobile-specific design patterns, touch interactions, and responsive design principles.",
          },
          {
            title: "Web UI Design",
            description:
              "Create effective web interfaces, understand web constraints, and design for different screen sizes.",
          },
          {
            title: "Animation in UI",
            description:
              "Learn to use motion design effectively to enhance user experience and provide feedback.",
          },
          {
            title: "Review on UI Design",
            description:
              "Comprehensive review of UI design principles, best practices, and portfolio development.",
          },
          {
            title: "User Experience Strategy",
            description:
              "Understand UX strategy, business goals alignment, and measuring design success.",
          },
          {
            title: "Review on UX Design",
            description:
              "Complete UX process review, case study development, and professional presentation skills.",
          },
          {
            title: "Final Design Project Presentation",
            description:
              "Present your comprehensive design project showcasing your complete UI/UX design process.",
          },
        ],
      },
    };

    return workshops[workshopId || ""] || null;
  };

  const timelineData = [
    { week: "Week 1\n19/07 - 25/07", sessions: ["Workshop 01", "Workshop 02"] },
    { week: "Week 2\n26/07 - 01/08", sessions: ["Workshop 03", "Workshop 04"] },
    { week: "Week 3\n02/08 - 08/08", sessions: ["Workshop 05", "Workshop 06"] },
    { week: "Week 4\n09/08 - 15/08", sessions: ["Workshop 07", "Workshop 08"] },
    { week: "Week 5\n16/08 - 22/08", sessions: ["Workshop 09", "Workshop 10"] },
    { week: "Week 6\n23/08 - 29/08", sessions: ["Workshop 11", "Workshop 12"] },
    { week: "Week 7\n30/08 - 05/09", sessions: ["Workshop 13", "Workshop 14"] },
    { week: "Week 8\n06/09 - 12/09", sessions: ["Workshop 15", "Workshop 16"] },
    { week: "Week 9\n13/09 - 19/09", sessions: ["Workshop 17", "Workshop 18"] },
    {
      week: "Week 10\n20/09 - 26/09",
      sessions: ["Workshop 19", "Workshop 20"],
    },
  ];

  const instructors = [
    {
      name: "Dr. Ahmed Hassan",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Machine Learning", "Data Science", "Python"],
      experience: "8+ years in AI research and development",
      cv: "#",
    },
    {
      name: "Sarah Mohamed",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Frontend Development", "React", "UI/UX"],
      experience: "6+ years in web development",
      cv: "#",
    },
    {
      name: "Omar Khaled",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Cybersecurity", "Penetration Testing", "Network Security"],
      experience: "10+ years in cybersecurity",
      cv: "#",
    },
  ];

  if (!workshop) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

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

              <span className="text-xl font-bold text-white">
                DSC Workshops
              </span>
            </Link>
            <Link
              to="/workshops"
              onClick={handleNavigation}
              className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Workshops</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-8xl mb-8 animate-bounce">{workshop.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {workshop.title}
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {workshop.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            The Journey Begins
          </h2>
          <div
            className={`bg-gradient-to-br ${workshop.bgGradient} backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-800`}
          >
            <p className="text-lg text-gray-200 leading-relaxed text-center italic">
              "{workshop.story}"
            </p>
          </div>
        </div>
      </section>

      {/* Content Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Workshop Content & Timeline
          </h2>

          {/* Enhanced Timeline with Content Names */}
          <div className="mb-16">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                10-Week Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {timelineData.map((week, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    <div className="text-center">
                      <div className="text-green-400 font-semibold text-sm mb-3 whitespace-pre-line">
                        {week.week}
                      </div>
                      <div className="space-y-3">
                        {week.sessions.map((session, sessionIndex) => {
                          const contentIndex = index * 2 + sessionIndex;
                          const content = workshop.content[contentIndex];
                          return (
                            <div
                              key={sessionIndex}
                              className="text-white text-xs bg-gray-700/50 rounded-lg py-3 px-3 hover:bg-gray-700 transition-colors"
                            >
                              <div className="font-semibold mb-1">
                                {session}
                              </div>
                              {content && (
                                <div className="text-gray-300 text-xs leading-tight">
                                  {content.title.length > 50
                                    ? content.title.substring(0, 50) + "..."
                                    : content.title}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Content Details with Descriptions */}
          <div className="bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Detailed Content
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {workshop.content.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-gray-800/30 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${workshop.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-3 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Meet Your Instructors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {instructor.name}
                  </h3>

                  <p className="text-gray-400 mb-4">{instructor.experience}</p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {instructor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${workshop.gradient} text-white text-sm rounded-full`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={instructor.cv}
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>CV</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join this comprehensive workshop and transform your skills in just
            10 weeks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScOVzP3CfRZHO_jwDpMYh9NSaBqAAcMDD5LQVFyuKoIRwU3_w/viewform",
                  "_blank"
                )
              }
              className={`bg-gradient-to-r ${workshop.gradient} text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              Enroll Now
            </button>

            <Link
              to="/workshops"
              onClick={handleNavigation}
              className="bg-gray-800 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              View Other Workshops
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Developer Student Clubs
            </span>
          </div>
          <p className="text-gray-400">
            Empowering the next generation of developers • 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkshopDetailsPage;
