import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState (null);
  const navigate = useNavigate();

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for Staticforms API
    const data = {
      accessKey: "sf_jgehi1h0iiiae3emh9g3ideh", // Replace with your actual key
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      // Optional: you can add redirect URL or other fields here
      // redirectTo: "https://your-site.com/thank-you",
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          navigate("/thankyou");
        }, 1000);

      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="px-5 py-20 pb-20 sm:px-10 md:px-20 lg:px-24 text-white">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-10 orbitron">
        Say Hello
      </h1>

      <form className="space-y-[4%]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="border-b-2 p-3 bg-transparent w-full outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border-b-2 p-3 bg-transparent w-full outline-none"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="border-b-2 p-3 bg-transparent w-full outline-none"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border-b-2 p-3 bg-transparent w-full outline-none"
          required
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleChange}
          className="border-b-2 p-3 bg-transparent w-full outline-none"
          required
        />

<div className="w-full p-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:opacity-90 transition"
        >
  
        <button
          type="submit"
          className="w-full py-3 card rounded-2xl font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
</div>

        {status && (
          <p className="text-center text-sm mt-2">{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;