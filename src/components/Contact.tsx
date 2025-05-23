import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { staggerContainer, slideIn } from "../motion";
import { alertType } from "../context/ProjectProvider";
import { Alert } from "./Alert";

export interface IForm {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  // const {showAlert, alert}:IProjectProvider = useProjects()
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<alertType>();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    //all fields are required validation
    if ([form.email, form.name, form.message].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      setTimeout(() => setAlert({}), 3000);
      return;
    }
    setLoading(true);
    const res = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Florencia",
        from_email: form.email,
        to_email: import.meta.env.VITE_TO_EMAIL,
        message: form.message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    );
    if (res.status === 200) {
      setLoading(false);
      setAlert({
        msg: "Thanks for your message!, I will get you back as soon as possible!",
        error: false,
      });
      setTimeout(() => setAlert({}), 3000);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setAlert({
        msg: `Something went wrong. Please try again`,
        error: true,
      });
      setTimeout(() => setAlert({}), 3000);
    }
  };

  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="sm:p-10 xl:py-20 p-8" id="contact">
        &nbsp;
      </span>
      <div className="flex 2xl:py-16 min-[768px]:py-16 lg:py-24 py-9 items-center justify-start gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-[100] p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-text uppercase tracking-wider">
            Get in touch.
          </p>
          <h3 className="text-text-title font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Connect with Me.
          </h3>

          {/* alert msg */}
          {alert && (
            <div className="mb-1">{alert.msg && <Alert {...alert} />}</div>
          )}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-14 flex flex-col gap-4"
          >
            <div className="w-full flex flex-wrap min-[1024px]:flex-block items-center justify-start gap-5">
              {/* name */}
              <label className="w-[100%] flex flex-col">
                <span className="text-text font-semibold mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="What's your/company name"
                  className="bg-tertiary py-4 px-6 bg-slate-700 bg-opacity-60 placeholder:text-secondary placeholder:font-thin text-text outline-none border-none font-medium"
                />
              </label>
              {/* email */}
              <label className="w-[100%] flex flex-col">
                <span className="text-text font-semibold mb-4">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="What's your email"
                  className="bg-tertiary py-4 px-6 bg-slate-700 bg-opacity-60 placeholder:text-secondary placeholder:font-thin text-text outline-none border-none font-medium"
                />
              </label>
            </div>

            {/* message */}
            <label className="flex flex-col">
              <span className="text-text font-semibold mb-4">
                Your Message
              </span>
              <textarea
                rows={3}
                name="message"
                onChange={handleChange}
                placeholder="Leave me your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:font-thin bg-slate-700 bg-opacity-60 text-text outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="flex items-center justify-start max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md p-5 rounded-3xl"
            >
              {loading ? "Sending..." : "Shoot"}
              <div className="flex sm:flex-cols-12 gap-6">
                <div className="col-span-1">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
                </div>
              </div>
            </button>
            {/* 
                 <div class="mb-4">
                <button type="button" class='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md mx-auto p-5'>
                    <div class="flex sm:flex-cols-12 gap-6">
                        <div class="col-span-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                 <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
                            </svg>
                            
                        </div>
                        <div class="col-span-2 pt-1.5">Button name</div>
                    </div>    
                </button>
            </div>
            */}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};
