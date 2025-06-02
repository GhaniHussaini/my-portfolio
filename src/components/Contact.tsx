import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      <div className="container-custom mx-auto">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-6">Let's Talk</h3>
            <p className="text-foreground/70 mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Fill out the form or reach me through the contact information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="p-2 rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </span>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <a href="mailto:ghanihussaini.dev@example.com" className="text-foreground/70 hover:text-primary transition-colors">
                    ghanihussaini.dev@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="p-2 rounded-full bg-primary/10 text-primary">
                  <MapPin size={20} />
                </span>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-foreground/70">Kabul, Afghanistan</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="p-2 rounded-full bg-primary/10 text-primary">
                  <Phone size={20} />
                </span>
                <div>
                  <h4 className="text-sm font-medium">Phone</h4>
                  <p className="text-foreground/70">+93 (70) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6">
              {submitSuccess === true && (
                <div className="mb-6 p-4 bg-success/10 text-success rounded-md flex items-center gap-2">
                  <Send size={18} />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mb-6 p-4 bg-error/10 text-error rounded-md">
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
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