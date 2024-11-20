import { useRef } from "react";

import { TESTIMONIAL } from "../constants";

const Testimonials = () => {
  const testimonialRef = useRef(null);
  return (
    <section className="py-16" id="testimonial" rel={testimonialRef}>
      <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
        Testimonial
      </h2>
      <div className="px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={TESTIMONIAL.image}
            className="mb-6 h-24 w-24 rounded-full border-4 object-cover "
            alt=""
          />
          <blockquote className="max-w-4xl text-lg leading-relaxed lg:text-2xl">
            &quot;{TESTIMONIAL.quote}&quot;
          </blockquote>
          <div className="mt-4 text-lg">
            <p>{TESTIMONIAL.name}</p>
            <p className="text-sm">{TESTIMONIAL.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
