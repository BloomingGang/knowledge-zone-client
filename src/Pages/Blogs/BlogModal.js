import React from "react";

const BlogModal = ({ modal }) => {
  const { description, userName, img } = modal;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center">
            <img className="w-full" src={img} alt="" />
          </div>
          <h3 class="text-lg font-bold text-center mt-5">{userName}</h3>
          <p class="py-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
