import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { staggerContainer, slideIn } from "../motion";

export interface IForm {
  name: string;
  email: string;
  message: string;
}
export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="contact">
        &nbsp;
      </span>
      <div className="xl:mt-12 xl:flex-row flex-row-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-[100] p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me.
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* name */}
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-4">
                Name/Company
              </span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="What's your/company name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            {/* email */}
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            {/* message */}
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                onChange={handleChange}
                placeholder="Leave me your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button type="submit"
            className="outline-none bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >{loading ? "Sending..." : "Send"}</button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};
