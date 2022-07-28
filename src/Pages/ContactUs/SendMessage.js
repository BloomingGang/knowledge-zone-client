import React from "react";

const SendMessage = () => {
  return (
    <div className="w-1/2">
      <form
        action="https://formsubmit.co/knowledgezone404@gmail.com"
        method="POST"
        className="card-body"
        target="_blank"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name:</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your E-mail:</span>
          </label>
          <input
            type="email"
            placeholder="Enter your E-mail"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message:</span>
          </label>
          <textarea
            type="text"
            placeholder="Write your message here"
            name="message"
            className="input input-bordered"
            id=""
            cols="50"
            rows="6"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-primary"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
