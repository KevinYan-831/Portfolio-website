import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-gray-500">Your Name</label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-b border-black/20 py-4 text-xl focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
            placeholder="Your Name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-gray-500">Email Address</label>
          <input
            required
            type="email"
            className="w-full bg-transparent border-b border-black/20 py-4 text-xl focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
            placeholder="Your Email Address"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase text-gray-500">Project Details</label>
        <textarea
          required
          rows="4"
          className="w-full bg-transparent border-b border-black/20 py-4 text-xl focus:outline-none focus:border-black transition-colors resize-none placeholder:text-gray-300"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={formState === 'loading' || formState === 'success'}
        className={`
          px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider flex items-center gap-3 transition-all duration-300
          ${formState === 'success' ? 'bg-green-600 text-white border-transparent' : 'bg-[#111] text-white hover:bg-gray-800 hover:scale-105'}
        `}
      >
        {formState === 'loading' && <Loader2 className="animate-spin" size={16} />}
        {formState === 'success' ? 'Message Sent' : 'Send Message'}
        {formState === 'idle' && <Send size={16} />}
      </button>
    </form>
  );
};

export default ContactForm;
