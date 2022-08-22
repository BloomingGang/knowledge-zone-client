import React from "react";

const SendMessage = () => {
  return (
    <div>
      <form
        action="https://formsubmit.co/knowledgezone404@gmail.com"
        method="POST"
        className="card-body"
        target="_blank"
      >
        <h1 className="text-2xl text-violet-800 text-center pb-4">Send Your Message Here</h1>
        <div className="form-control">
          <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="name"
            class="input input-bordered input-primary"
            required
          />
           <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-primary "
            required
          />

          </div>
         
        </div>
       
        <div className="form-control">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="input input-bordered input-primary "
            required
          />
        </div>
        <div className="form-control">
          <textarea
            class="textarea textarea-primary pb-12"
            placeholder="Write your message here"
            name="message"
            required
          ></textarea>
        </div>
        <div className="form-control">
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
