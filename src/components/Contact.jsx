import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "@remixicon/react";
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  return (
    <section className="py-16" id="contact" rel={contactRef}>
      <div className="text-center px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Contact
        </h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email:{" "}
          <a href="mailto:david@example.com" className="border-b">
            david@example.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="/" className="contact-icon">
            <RiLinkedinBoxFill className="text-3xl w-10" />
          </a>
          <a href="/" className="contact-icon">
            <RiGithubFill className="text-3xl w-10" />
          </a>
          <a href="/" className="contact-icon">
            <RiTwitterFill className="text-3xl w-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
