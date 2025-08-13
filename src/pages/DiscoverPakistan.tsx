import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mountain, Utensils, Users, Heart } from 'lucide-react';

export const DiscoverPakistan: React.FC = () => {
  const [activeSection, setActiveSection] = useState('places');

  const places = [
    {
      name: "Hunza Valley",
      video: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F46cf94e5da6a4f6f82d4c7c4d49a6ece",
      description: "Breathtaking mountain landscapes and ancient culture in the heart of the Karakoram range."
    },
    {
      name: "Lahore Fort",
      video: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F127df2a506c4488b81b6dee96f59d46d",
      description: "A UNESCO World Heritage site showcasing Mughal architecture and centuries of history."
    },
    {
      name: "Karachi Coastline",
      video: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F92642fa252804d23bba4d98bd7c86762",
      description: "Miles of pristine beaches along the Arabian Sea, perfect for sunset walks."
    },
    {
      name: "Islamabad Hills",
      video: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F3e4029e53421464f804e1d23a51cec04",
      description: "Modern capital city nestled in the foothills of the Margalla Hills."
    },
    {
      name: "Skardu Lakes",
      video: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F1e6f512142ff41f0996de3a9ade4f154",
      description: "Crystal clear alpine lakes surrounded by towering peaks and glaciers."
    },
    {
      name: "Multan Shrines",
      video: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F1289db5009ce48c898893e7fe464d30f",
      description: "The city of saints, home to beautiful Sufi shrines and spiritual heritage."
    }
  ];

  const foods = [
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F78d57b3cffed4aacbf9f190be75c775d?format=webp",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F4f4fc3d2c6b0478ab0c73032c6e429b0",
      type: "video"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fb195976ce20e4ca892aaa99b5e6f8f9a?format=webp",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F5183529c9cc649a88c558fa8faccc550?format=webp",
      type: "video"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F77960b297ec44e6cb009432114ef94e5",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F2fd26a15a1344a4f9195e8225530ed46?alt=media&token=46c52360-1455-4090-ba67-348d54a9d775&apiKey=75a22e5e63fb48bebca3f469345104bb",
      type: "video"
    }
  ];

  const culture = [
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fbaed5b1cb5524538be74359e60feb71c",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F10911560c03a4927851e88be4f860c08?format=webp",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F8d00f8a9e1dd400cb62e0495985961a5",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fbf1064b431ff4b69acc6e875977adbf9",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fdfc1d8d9a3a946f18b0ccddf63288918",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F414466c7a2764f4dae89d39d9fa78f1d",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fef0d5d3b3a7a49ad82c9facd53ac2c82",
      type: "image"
    },
    {
      media: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F29eb8c58338142518819c073026e5b6e",
      type: "image"
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'places':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={place.video}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl font-bold mb-2">{place.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">{place.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'food':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((food, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80">
                  <img
                    src={food.media}
                    alt={`Pakistani Food ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {food.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Utensils className="h-4 w-4 text-emerald-600" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'culture':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80">
                  <img
                    src={item.media}
                    alt={`Pakistani Culture ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Discover Pakistan
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in a land where ancient traditions meet modern aspirations,
            where every landscape tells a story, and every encounter becomes a cherished memory.
          </p>
        </motion.div>
      </div>


      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
        </motion.div>
      </div>

      {/* Navigation Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full p-2 flex space-x-2 shadow-lg">
              {[
                { id: 'places', label: 'Places', icon: <Mountain className="h-5 w-5" /> },
                { id: 'food', label: 'Food', icon: <Utensils className="h-5 w-5" /> },
                { id: 'culture', label: 'People & Culture', icon: <Users className="h-5 w-5" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/10 rounded-full"
              animate={{
                y: [-30, -120, -30],
                x: [-15, 15, -15],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 2
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Pakistan?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of global youth who have discovered their purpose through meaningful experiences in the heart of Asia.
            </p>
            <motion.a
              href="https://aiesec.org/search?home_mcs=1603"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center bg-white text-emerald-700 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl"
            >
              <Heart className="mr-2 h-5 w-5" />
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
