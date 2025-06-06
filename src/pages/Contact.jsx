import React from 'react';
import { Mail, Phone, MapPin, User, MessageSquareText, SendHorizonal } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Get in Touch */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-white">Get in Touch</h2>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-xl">
                <Mail className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>aievolve.ai@gmail.com</p>
                <p>support@aievollve.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-xl">
                <Phone className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+91 (882) 609-9916</p>
                <p>+91 (639) 890-4235</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-800 p-3 rounded-xl">
                <MapPin className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Office</p>
                <p>AIEvollve Headquarters</p>
                <p>Sector 62 Noida</p>
                <p>Uttar Pradesh, India 201309</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-gray-400">
            <h3 className="font-semibold text-white">Operating Hours</h3>
            <p>Monday - Friday: 10:30 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Right: Send Message */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-white">Send Us a Message</h2>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Your Name *
                </label>
                <input className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none" />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address *
                </label>
                <input className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </label>
                <input className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none" />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <MessageSquareText className="h-4 w-4" />
                  Subject
                </label>
                <input className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Reason for Contact</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {['General Inquiry', 'Technical Support', 'Sales', 'Other'].map((reason) => (
                  <label key={reason} className="flex items-center gap-2">
                    <input type="radio" name="reason" className="accent-white" />
                    {reason}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                <MessageSquareText className="h-4 w-4" />
                Your Message *
              </label>
              <textarea
                rows="5"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
                placeholder="Please provide details about your inquiry..."
              ></textarea>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              <span className="text-sm text-gray-400">
                I agree to the processing of my personal data according to the{' '}
                <span className="underline cursor-pointer text-white">Privacy Policy</span>.
              </span>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition"
            >
              <SendHorizonal className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
