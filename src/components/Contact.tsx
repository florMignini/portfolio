import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { staggerContainer, slideIn } from "../motion";
import { alertType } from "../context/ProjectProvider";
// import { useProjects } from "../hooks/useProjects";
import { Alert } from "./Alert";

export interface IForm {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {

  // const {showAlert, alert}:IProjectProvider = useProjects()
  const formRef = useRef();
  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<alertType>()

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
      error:true
      })
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
            Send Me a Message.
          </h3>
           {/* alert msg */}
           {
           alert && (
            <div className="mb-1">
                  {alert.msg && <Alert {...alert} />}
                  </div>
            )
           }
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
           <div className="flex items-center justify-between gap-5">
             {/* name */}
             <label className="flex flex-col">
              <span className="text-white font-semibold mb-4">
               Your Name
              </span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="What's your/company name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
              />
            </label>
            {/* email */}
            <label className="flex flex-col">
              <span className="text-white font-semibold mb-4">Email Address</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
              />
            </label>
           </div>

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
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="w-48 flex items-center justify-between outline-none border-[2px] border-tertiary p-3 text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Shoot"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};
