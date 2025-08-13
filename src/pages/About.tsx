import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Heart, Target, Award, MapPin, Lightbulb, Shield, Handshake, Zap, Compass, Leaf } from 'lucide-react';

export const About: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const coreValues = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Activating Leadership",
      description: "Developing conscious leaders who create positive impact"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Demonstrating Integrity",
      description: "Acting with honesty, transparency, and authenticity"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Living Diversity",
      description: "Embracing differences to create inclusive environments"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Enjoying Participation",
      description: "Creating engaging experiences that inspire growth"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Striving for Excellence",
      description: "Continuously improving and delivering exceptional experiences"
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Acting Sustainably",
      description: "Making decisions that consider long-term impact"
    }
  ];

  const localCommittees = [
    {
      name: "AIESEC in Islamabad",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F9c37bfdbfb3947a89c568fd4bf772889",
      description: "Leading youth development in Pakistan's capital city"
    },
    {
      name: "AIESEC in NUST",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F6db729d50fb44895b4d3948666c1efc7?format=webp",
      description: "Empowering students at National University of Sciences & Technology"
    },
    {
      name: "AIESEC in Karachi",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F33858501282241e3b452b4dda35d7a55?format=webp",
      description: "Creating impact in Pakistan's largest metropolitan city"
    },
    {
      name: "AIESEC in Karachi South",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F51930f0ff85b4d16b5cda1370649c030",
      description: "Expanding opportunities in southern Karachi region"
    },
    {
      name: "AIESEC in IBA",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fb145706c23154216a0779d16d0692d37",
      description: "Developing leaders at Institute of Business Administration"
    },
    {
      name: "AIESEC in Multan",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F3a870f5492134fefb65861a41ffaa4dd",
      description: "Fostering growth in the city of saints"
    },
    {
      name: "AIESEC in Lahore",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fca4abdfa624740c3a2816ad067dde6e3",
      description: "Building bridges in Pakistan's cultural capital"
    },
    {
      name: "AIESEC in LUMS",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fdce0e98a34054d2c8bc49258ef242085?format=webp",
      description: "Inspiring excellence at Lahore University of Management Sciences"
    },
    {
      name: "AIESEC in Faisalabad",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Fbe00a192774d413f83c6fe4f48bb296f?format=webp",
      description: "Driving change in Pakistan's industrial hub"
    },
    {
      name: "AIESEC in Hyderabad",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F6cd462d409d34697a59d8915ad4579ae?format=webp",
      description: "Creating opportunities in the historic city"
    },
    {
      name: "AIESEC in GIKI",
      image: "https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2Ff0c3bd1fa9bd437686187204dec198b9?format=webp",
      description: "Innovating at Ghulam Ishaq Khan Institute"
    }
  ];

  const impactStats = [
    { number: "5000+", label: "Youth Engaged", icon: <Users className="h-6 w-6" /> },
    { number: "100+", label: "EPs Hosted", icon: <Globe className="h-6 w-6" /> },
    { number: "760+", label: "Countries Represented", icon: <Heart className="h-6 w-6" /> },
    { number: "25+", label: "Years of Excellence", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 bg-no-repeat"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F79bcf4020b6e44dd9bf7c413c1f9e3e7')`
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              AIESEC in Pakistan
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              AIESEC is the world's largest youth-run organization, enabling young people to explore and develop their leadership potential through cross-cultural experiences. In Pakistan, we've been creating transformative opportunities since 2004.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our values guide every decision we make and every experience we create for young leaders worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-emerald-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Local Committees Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 bg-no-repeat"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F7887ddc92ae94aa781da83119131c645')`
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              11 Cities. One Purpose.
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Local Committees from every corner of Pakistan making global exchange happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Local Committees Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {localCommittees.map((committee, index) => (
              <motion.div
                key={committee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  index === 10 ? 'md:col-start-2 lg:col-start-2' : ''
                }`}
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={committee.image}
                    alt={committee.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-slate-800 mb-2">{committee.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{committee.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ICX Islamabad Card */}
      Made by ICX in Islamabad
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Flip Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div 
              className="relative w-96 h-72 cursor-pointer perspective-1000"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="all.png"
                    alt="ICX Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center shadow-xl rotate-y-180">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F75a22e5e63fb48bebca3f469345104bb%2F97c273a102bf479b96d1cd53d730082a"
                    alt="ICX Team Back"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Global Movement
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of a community that's shaping the future through leadership development and cross-cultural understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://aiesec.org/search?home_mcs=1603"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-emerald-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                Start Your Journey
              </motion.a>
              <motion.a
                href="/discover-pakistan"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Discover Pakistan
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

<style jsx>{`
  .perspective-1000 {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`}</style>
