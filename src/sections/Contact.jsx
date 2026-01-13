import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const data = {
      accessKey: import.meta.env.VITE_STATICFORMS_KEY,
      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission Failed");

      setStatus("Message sent successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => navigate("/thankyou"), 1200);

    } catch (err) {
      setStatus("Something went wrong., Please try again");
    } finally{
      setLoading(false);
    }
  };

  return (
    <section className="certificates-body px-5 py-[20vh] sm:px-10 md:px-20 lg:px-24 text-white">
      <h1 className="text-3xl sm:text-5xl text-center font-mono mb-10 orbitron">
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
            disabled={loading}
            className="w-full py-3 card rounded-2xl font-semibold hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
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