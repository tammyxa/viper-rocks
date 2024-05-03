import React from "react";

export const ContactUsForm: React.FC = () => {
  return (
    <form>
      <div className="mb-8">
        <div className="mb-2">
          <label htmlFor="name" className="text-subtitle text-gray-dark">
            Name
          </label>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
        />
      </div>
      <div className="mb-8">
        <div className="mb-2">
          <label htmlFor="name" className="text-subtitle text-gray-dark">
            Email
          </label>
        </div>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your email"
          className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
        />
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <label htmlFor="message" className="text-subtitle text-gray-dark">
            Message
          </label>
          <span className="text-xl text-jpl-red-dark font-bold">*</span>
        </div>
        <textarea
          name="message"
          required
          placeholder="Enter your message..."
          cols={40}
          rows={5}
          className="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
        ></textarea>
      </div>
      <button
        className="BaseButton text-contrast-none inline-block -primary"
        aria-label="Submit"
        type="submit"
      >
        <span className="label block">Submit</span>
      </button>
    </form>
  );
};
