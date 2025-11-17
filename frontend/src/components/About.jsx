import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const About = () => {
  const [emailAnimation, setEmailAnimation] = useState(null);

  useEffect(() => {
    // Load the Lottie animation JSON
    fetch('/email-icon.json')
      .then(response => response.json())
      .then(data => setEmailAnimation(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const teamMembers = [
    {
      name: "Róbert Spanó",
      role: "Founder & CEO",
      image: "https://customer-assets.emergentagent.com/job_purple-agency-1/artifacts/gg53eg8f_1.png",
      email: "robert@arxdigital.is",
      phone: "787 7887"
    },
    {
      name: "Stefán Orri",
      role: "Co-Founder & CTO",
      image: "https://customer-assets.emergentagent.com/job_purple-agency-1/artifacts/nmxzhc7z_2.png",
      email: "stebbi@arxdigital.is",
      phone: "777 0731"
    }
  ];

  return (
    <section
      id="um-okkur"
      className="py-12 md:py-16 relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Um <span className="text-[#9c54f3]">Okkur</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group flex"
            >
              {/* Clean subtle border on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#9c54f3]/0 via-[#9c54f3]/30 to-[#9c54f3]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 group-hover:border-[#9c54f3]/40 transition-all duration-300 flex flex-col w-full shadow-2xl group-hover:shadow-[0_10px_40px_-10px_rgba(156,84,243,0.3)] group-hover:-translate-y-1">
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f]/80 via-transparent to-transparent" />
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-4 flex-grow flex flex-col relative z-10">
                  {/* Name & Role */}
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-8 bg-gradient-to-r from-[#9c54f3] to-transparent group-hover:w-12 transition-all duration-300" />
                      <p className="text-base md:text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#9c54f3]/20 to-transparent" />

                  {/* Contact Info */}
                  <div className="flex items-center gap-6">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 group/email transition-all duration-300"
                    >
                      {emailAnimation && (
                        <div style={{ width: '64px', height: '64px' }}>
                          <Lottie
                            animationData={emailAnimation}
                            loop={true}
                            autoplay={true}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                      )}
                      <span className="text-base text-white/70 group-hover/email:text-white transition-colors duration-300">
                        {member.email}
                      </span>
                    </a>
                    
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 group/phone transition-all duration-300"
                    >
                      <div style={{ width: '40px', height: '40px' }} className="flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#9c54f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-base text-white/70 group-hover/phone:text-white transition-colors duration-300 whitespace-nowrap">
                        {member.phone}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;