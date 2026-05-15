import React from 'react'
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
    {
        text: 'Strong analytical thinking and debugging ability. Consistently delivers clean, maintainable code with modern best practices.',
        author: 'Technical Skills',
        role: 'Code Quality Focus',
        rating: 5,
    },
    {
        text: 'Excellent communicator and collaborative team player with an Agile mindset. Quick learner dedicated to continuous improvement.',
        author: 'Soft Skills',
        role: 'Team Collaboration',
        rating: 5,
    },
    {
        text: 'Proactive developer who follows Agile methodologies, ensuring iterative progress and efficient, user-focused solutions.',
        author: 'Work Ethic',
        role: 'Self-Motivated',
        rating: 5,
    },
    ];

    useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
    }, []);
  return (
    <div id="testimonials" className="relative h-full overflow-hidden rounded-3xl bg-blue-300 dark:bg-blue-500 border border-border p-3 transition-colors">
      <div className="flex flex-col h-70 md:h-full">
        <Quote className="w-8 h-8 text-black/80 dark:text-white/40 mb-4" />

        <div className="relative flex-1">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${activeIndex === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <p className="text-black dark:text-white text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div>
                <div className="text-black dark:text-white font-semibold">{testimonial.author}</div>
                <div className="text-black/70 dark:text-white/70 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1 rounded-full transition-all ${
                activeIndex === index ? 'bg-black dark:bg-white w-8' : 'bg-black/30 dark:bg-white/30 w-1'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
