import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-neutral-900 py-24 px-6 md:px-20 lg:px-32 text-neutral-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-col justify-center pt-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Contact</span>
            <div className="h-px w-12 bg-neutral-700 mt-2"></div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Let's Work Together
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl font-light leading-relaxed">
            Have a construction or infrastructure project in mind? I'd love to discuss how 
            we can bring your vision to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="space-y-8">
            <h4 className="text-xl font-medium text-neutral-200">Send Message</h4>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Project inquiry"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-900 font-medium rounded-md hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-4">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Info & Availability */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-medium mb-8 text-neutral-200">Get In Touch</h4>
              <div className="space-y-6">
                <a href={`mailto:${PROFILE.email}`} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-md bg-neutral-800 text-neutral-400 group-hover:text-white group-hover:bg-neutral-700 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Email</p>
                    <p className="text-neutral-300 group-hover:text-white transition-colors font-light">{PROFILE.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${PROFILE.phone}`} className="flex items-start gap-4 group">
                   <div className="p-3 rounded-md bg-neutral-800 text-neutral-400 group-hover:text-white group-hover:bg-neutral-700 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Phone</p>
                    <p className="text-neutral-300 group-hover:text-white transition-colors font-light">{PROFILE.phone}</p>
                  </div>
                </a>

                 <div className="flex items-start gap-4 group">
                   <div className="p-3 rounded-md bg-neutral-800 text-neutral-400 group-hover:text-white group-hover:bg-neutral-700 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Location</p>
                    <p className="text-neutral-300 font-light">{PROFILE.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 rounded-lg bg-neutral-800 border border-neutral-700">
              <h4 className="text-white font-medium mb-2">Current Availability</h4>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                I'm currently accepting new projects and collaborations. Response time is typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;