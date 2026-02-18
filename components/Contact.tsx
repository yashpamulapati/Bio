
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { PROFILE } from '../constants';
import { CraneBg } from './SectionConstructionBgs';

type Reason = 'project' | 'consulting' | 'collaboration' | 'other';

const reasons: { id: Reason; label: string; emoji: string }[] = [
  { id: 'project', label: 'Start a Project', emoji: '🚀' },
  { id: 'consulting', label: 'Consulting', emoji: '💡' },
  { id: 'collaboration', label: 'Collaboration', emoji: '🤝' },
  { id: 'other', label: 'Just Saying Hi', emoji: '👋' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [selectedReason, setSelectedReason] = useState<Reason | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleReasonClick = (reason: Reason) => {
    setSelectedReason(reason);
    const label = reasons.find(r => r.id === reason)?.label ?? '';
    setFormData(prev => ({ ...prev, subject: label }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, email, subject, message } = formData;
    
    try {
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
          _subject: `${subject} - Portfolio Contact`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSelectedReason(null);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please check your connection or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-neutral-900 py-24 px-6 md:px-20 lg:px-32 text-white relative border-t border-neutral-800 overflow-hidden">
      <CraneBg />
      
      {/* Success Toast */}
      {showSuccess && (
        <div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 z-50 bg-white text-neutral-900 px-6 py-4 rounded-xl shadow-2xl border border-neutral-200 flex items-center gap-3"
          style={{ animation: 'fadeSlideIn 0.4s ease-out' }}
        >
          <CheckCircle className="w-5 h-5 text-green-500" />
          <div>
            <h4 className="font-medium text-sm">Message Sent!</h4>
            <p className="text-xs text-neutral-500">I'll get back to you shortly.</p>
          </div>
        </div>
      )}

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">

          {/* Left: info + reason selector */}
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-light mb-4 text-white">
                Let's Work Together
              </h3>
              <p className="text-neutral-400 text-lg font-light leading-relaxed">
                Have a project in mind? I'd love to discuss how we can bring your vision to reality.
              </p>
            </div>

            {/* Reason pills */}
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-4">
                I'm interested in...
              </p>
              <div className="flex flex-wrap gap-2">
                {reasons.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleReasonClick(r.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedReason === r.id
                        ? 'bg-white text-neutral-900 shadow-lg shadow-white/10 scale-105'
                        : 'bg-neutral-800 text-neutral-400 border border-neutral-700 hover:border-neutral-500 hover:text-neutral-200'
                    }`}
                  >
                    <span className="mr-1.5">{r.emoji}</span>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: form */}
          <div className="bg-neutral-800/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-neutral-700/50">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? 'top-1.5 text-[10px] text-neutral-400 uppercase tracking-wider'
                        : 'top-3.5 text-sm text-neutral-500'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all disabled:opacity-50"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? 'top-1.5 text-[10px] text-neutral-400 uppercase tracking-wider'
                        : 'top-3.5 text-sm text-neutral-500'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'subject' || formData.subject
                      ? 'top-1.5 text-[10px] text-neutral-400 uppercase tracking-wider'
                      : 'top-3.5 text-sm text-neutral-500'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all disabled:opacity-50"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-1.5 text-[10px] text-neutral-400 uppercase tracking-wider'
                      : 'top-3.5 text-sm text-neutral-500'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl px-4 pt-6 pb-3 text-white focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-4 bg-white text-neutral-900 font-medium rounded-xl hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
