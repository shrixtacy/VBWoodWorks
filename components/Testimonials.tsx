import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-50 border-t border-luxury-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-sm uppercase tracking-widest text-stone-400 mb-16">
          Client Words
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col items-center text-center p-6">
              <div className="mb-6 text-stone-300">
                {/* Minimal quote icon representation */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                </svg>
              </div>
              <p className="text-stone-700 font-serif text-xl italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-auto">
                <div className="text-sm font-bold text-stone-900 uppercase tracking-wide">{t.author}</div>
                <div className="text-xs text-stone-500 font-light mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;