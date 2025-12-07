import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="max-w-xs">
          <h2 className="text-2xl font-serif text-white mb-8">VBWoodworks.</h2>
          <p className="font-light leading-relaxed mb-8">
            Defining spaces with timeless furniture and exceptional craftsmanship since 1998.
          </p>
          <div className="flex flex-col gap-2 font-light">
             <span>+1 (555) 123-4567</span>
             <span>hello@vbwoodworks.com</span>
             <span>142 Artisan Avenue, Design District, NY</span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
            <h3 className="text-white text-sm uppercase tracking-widest mb-8">Inquire</h3>
            <form className="flex flex-col gap-6">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-transparent border-b border-stone-700 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-transparent border-b border-stone-700 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                />
                <textarea 
                    rows={3}
                    placeholder="Message" 
                    className="bg-transparent border-b border-stone-700 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                ></textarea>
                <button type="submit" className="self-start mt-4 px-8 py-3 bg-stone-100 text-stone-900 uppercase tracking-widest text-xs hover:bg-white transition-colors">
                    Send Inquiry
                </button>
            </form>
        </div>

        <div className="hidden md:flex flex-col gap-4 text-sm font-light">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
        <p>&copy; {new Date().getFullYear()} VBWoodworks. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-400">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;