import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Contact Me</h2>
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700" htmlFor="name">Name</label>
        <input type="text" id="name" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Your Name" required />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
        <input type="email" id="email" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Your Email" required />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700" htmlFor="message">Message</label>
        <textarea id="message" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Your Message" rows="4" required></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">Send Message</button>
    </form>
  </section>
  
  );
};

export default Contact;
