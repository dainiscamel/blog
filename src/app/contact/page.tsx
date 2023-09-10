import React from "react";
import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const ContactPage = () => {
  const SNSICONS = [
    {
      icon: <AiFillGithub />,
      url: "",
    },
    {
      icon: <AiFillLinkedin />,
      url: "",
    },
    {
      icon: <AiFillYoutube />,
      url: "",
    },
  ];

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold">CONTACT ME</h1>
      <span>info@dain-coding.com</span>
      <ul className="flex mb-10">
        {SNSICONS.map((icon, index) => (
          <li>
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-2xl font-bold mb-5">Or Send me an email</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
