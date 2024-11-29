import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Droplet, Zap, Users, Shield, Sparkles } from 'lucide-react';
import CreateFaucet from './CreateFaucet';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated star background */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`
            }}
          ></div>
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-6 py-12">
        <motion.section 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Unleash the Power of Cosmic Faucets
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Embark on an interstellar journey through the blockchain cosmos. Create, manage, and explore token faucets that transcend the boundaries of traditional finance.
          </p>
          <Link 
            to="/faucets" 
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Rocket className="inline-block mr-2" size={24} />
            Launch Your Cosmic Journey
          </Link>
        </motion.section>

        <motion.section 
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Forge Your Celestial Faucet</h2>
            <p className="text-blue-200 text-lg">
              Harness the power of the cosmos to create your own token faucet. Set the parameters of your digital constellation and watch it come to life in the vast expanse of the blockchain universe.
            </p>
            <CreateFaucet />
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-lg border border-blue-500/30 shadow-lg shadow-blue-500/20">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Cosmic Creation Guide</h3>
            <ul className="space-y-4">
              {[
                { icon: <Shield className="text-green-400" />, text: "Secure your intergalactic wallet" },
                { icon: <Sparkles className="text-yellow-400" />, text: "Choose your faucet's celestial properties" },
                { icon: <Droplet className="text-blue-400" />, text: "Set your token's name and symbol" },
                { icon: <Zap className="text-purple-400" />, text: "Deploy your faucet to the blockchain nebula" },
                { icon: <Users className="text-pink-400" />, text: "Share your cosmic coordinates for token claims" }
              ].map((step, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-blue-200">{step.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Why Choose SpaceFaucet?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { 
                title: "Warp Speed Deployment", 
                icon: <Rocket className="text-yellow-400" size={48} />, 
                description: "Launch your faucet at the speed of light. Our quantum-powered deployment ensures your tokens are ready for distribution in nanoseconds." 
              },
              { 
                title: "Nebula-Grade Security", 
                icon: <Shield className="text-green-400" size={48} />, 
                description: "Protected by the most advanced cosmic algorithms. Your tokens are as secure as the core of a neutron star." 
              },
              { 
                title: "Galactic Community", 
                icon: <Users className="text-pink-400" size={48} />, 
                description: "Join a thriving ecosystem of interstellar explorers. Connect, collaborate, and grow in our ever-expanding token universe." 
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-lg border border-blue-500/30 shadow-lg shadow-blue-500/20 transform transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 shadow-xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the Token Cosmos?</h2>
          <p className="text-xl mb-6">Create your first celestial faucet or discover existing constellations now!</p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/create" 
              className="bg-white text-purple-600 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
            >
              <Sparkles className="inline-block mr-2" size={20} />
              Create Faucet
            </Link>
            <Link 
              to="/faucets" 
              className="bg-purple-800 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-900 transition-colors shadow-md hover:shadow-lg"
            >
              <Droplet className="inline-block mr-2" size={20} />
              View Faucets
            </Link>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 bg-gray-800 text-blue-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} SpaceFaucet. All rights reserved across the multiverse.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

