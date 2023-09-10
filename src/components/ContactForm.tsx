import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full max-w-md">
      <form className="flex flex-col mb-5 bg-cyan-200 p-10 border-">
        <label>Email</label>
        <input />
        <label>Subject</label>
        <input />
        <label>Message</label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          className="text-black"
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400 mt-5">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
