import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { founders, companyInfo } from '../mock';

const Contact = () => {
  return (
    <section
      id="hafa-samband"
      className="py-20 md:py-32 relative"
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
            Hafa <span className="text-[#9c54f3]">Samband</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Komdu í samband við okkur og við hjálpum þér að koma hugmyndum þínum í framkvæmd
          </p>
        </motion.div>

        {/* Company Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">ArxDigital</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-[#9c54f3] transition-colors"
            >
              <Mail size={20} />
              <span>{companyInfo.email}</span>
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-3 text-white/80 hover:text-[#9c54f3] transition-colors"
            >
              <Phone size={20} />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </motion.div>

        {/* Individual Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#9c54f3]/50 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-white mb-2">{founder.name}</h4>
              <p className="text-[#9c54f3] text-sm mb-4">{founder.role}</p>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-[#9c54f3] transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span className="truncate">{founder.email}</span>
                </a>
                <a
                  href={`tel:${founder.phone}`}
                  className="flex items-center gap-2 text-white/70 hover:text-[#9c54f3] transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>{founder.phone}</span>
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#9c54f3] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#9c54f3] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;