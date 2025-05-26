import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_hlmp4lv',
        'template_5oyfcs6',
        {
          name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        'UNVQAEAJQS5lqX59a'
      );
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Me" subtitle="Let's get in touch" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hello. I'll try my best to get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-3 mr-4">
                  <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Email</h4>
                  <a href="mailto:Abhika581@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    Abhika581@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-3 mr-4">
                  <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Phone</h4>
                  <a href="tel:7321971667" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    +91 7321971667
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start">
                <div className="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-3 mr-4">
                  <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    New Colony Bharuwala Clement town, Dehradun, Uttarakhand
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white"
                    placeholder="Your email"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>
                
                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;