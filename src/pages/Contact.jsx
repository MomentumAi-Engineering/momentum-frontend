import React, { useState } from "react";
import { Mail, Phone, MapPin, User, MessageSquareText, SendHorizonal } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      toast.error("You must accept the Privacy Policy!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phoneNumber: phone, // backend expects phoneNumber
          subject,
          reason,
          message,
          privacyAccepted,
        }),
      });

      const data = await res.json();

      if (res.status !== 201) {
        toast.error(data.error || "Error sending message!");
      } else {
        toast.success(data.message || "Message sent successfully!");
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setReason("");
        setMessage("");
        setPrivacyAccepted(false);
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Get in Touch */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-xl">
                <Mail className="text-white" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p>momntum@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-xl">
                <MapPin className="text-white" />
              </div>
              <div>
                <p className="font-semibold">Office</p>
                <p>MomentumAi Headquarters</p>
                <p>Nashville, Tennessee</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Send Message */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Your Name *
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
                  required
                />
              </div>
            </div>

            {/* Phone & Subject */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <MessageSquareText className="h-4 w-4" />
                  Subject
                </label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <p className="text-sm font-medium mb-2">Reason for Contact</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {["General Inquiry", "Technical Support", "Sales", "Other"].map((r) => (
                  <label key={r} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="reason"
                      value={r}
                      checked={reason === r}
                      onChange={(e) => setReason(e.target.value)}
                      className="accent-white"
                      required
                    />
                    {r}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                <MessageSquareText className="h-4 w-4" />
                Your Message *
              </label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
                placeholder="Please provide details about your inquiry..."
                required
              ></textarea>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="accent-white"
                required
              />
              <span className="text-sm text-gray-400">
                I agree to the processing of my personal data according to the{" "}
                <span className="underline cursor-pointer text-white">Privacy Policy</span>.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition disabled:opacity-50"
            >
              <SendHorizonal className="h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
