export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex lg:flex-col md:flex-row gap-8">
        {/* Details Section */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            We are here to assist you with all your financial and accounting
            needs. Please feel free to reach out to us through any of the
            following methods:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Delhi Meerut</h4>
              <p className="flex items-center mb-2">
                <i className="fa fa-map-marker mr-2" />
                <span>
                  111/2, Thapar Nagar Meerut, Uttar Pradesh, 250001 India
                </span>
              </p>
              <p className="flex items-center mb-2">
                <i className="fa fa-phone mr-2" />
                <a href="tel:8979000077" className="text-blue-600">
                  +91 8979000077
                </a>
              </p>
              <p className="flex items-center mb-2">
                <i className="fa fa-envelope-o mr-2" />
                <a href="mailto:yash@equiltax.com" className="text-blue-600">
                  yash@equiltax.com
                </a>
              </p>
              <p className="flex items-start">
                <i className="fa fa-clock-o mr-2" />
                <span>
                  Monday to Saturday: 9:00 AM - 6:30 PM
                  <br />
                  Sunday: Closed
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Contact Form</h4>
          <form>
            <input
              name="name"
              type="text"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              placeholder="Full Name"
              required
            />
            <input
              name="email"
              type="email"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              placeholder="Email"
              required
            />
            <input
              name="contact"
              type="tel"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              rows={5}
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              placeholder="Type your message here"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.9425802842306!2d77.7018084761735!3d28.989072467799236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c653cf54dac75%3A0x5e0450f761ef9eb0!2sAtul%20Jagdish%20%26%20Co!5e0!3m2!1sen!2sin!4v1718702796313!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
