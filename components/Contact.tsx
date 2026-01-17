
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, email, subject, message } = formData;
    
    try {
      // Use FormSubmit.co for backend-less email handling
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _subject: `${subject} - Portfolio Contact`, // Custom subject line for the email you receive
            _template: 'table',
            _captcha: 'false'
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Hide notification after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback behavior could go here, but alerting is safer for now
      alert("Something went wrong. Please check your connection or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-neutral-900 py-24 px-6 md:px-20 lg:px-32 text-neutral-50 relative">
      
      {/* Success Notification Toast */}
      {showSuccess && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 z-50 bg-white text-neutral-900 px-6 py-4 rounded-lg shadow-2xl border border-neutral-200 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <h4 className="font-medium text-sm">Message Sent Successfully!</h4>
            <p className="text-xs text-neutral-500">Thank you for reaching out. I'll respond shortly.</p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center pt-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Contact</span>
            <div className="h-px w-12 bg-neutral-700 mt-2"></div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Let's Work Together
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? I'd love to discuss how 
            we can bring your vision to reality.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-800/50 p-8 md:p-10 rounded-2xl border border-neutral-800 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors disabled:opacity-50"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors disabled:opacity-50"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  disabled={isSubmitting}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-3 bg-white text-neutral-900 font-medium rounded-md hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mx-auto md:mx-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
