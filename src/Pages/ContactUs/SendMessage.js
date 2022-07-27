import React from "react";

const SendMessage = () => {
  return (
    <form
      action="https://formsubmit.co/knowledgezone404@gmail.com"
      method="POST"
      className="card-body"
      target="_blank"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Email"
          name="name"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Body</span>
        </label>
        <textarea
          type="text"
          placeholder="Your message"
          name="message"
          className="input input-bordered"
        />
      </div>
      <div className="form-control mt-6">
        <input type="submit" className="btn btn-primary" value="Send Email" />
      </div>
    </form>
  );
};

export default SendMessage;
