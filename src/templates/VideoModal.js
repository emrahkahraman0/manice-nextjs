"use client";
import { useState, useEffect, useRef } from "react";

function VideoModal({ videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div>
        <span className="open" onClick={openModal}>
          <i className="fa-solid fa-play"></i>
        </span>

        {isOpen && (
          <div className="modal">
            <div ref={modalRef} className="modal_content">
              <span className="close" onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/5oIGTALROZU"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default VideoModal;

<div className="home_shortcut_right">
  <VideoModal videoUrl="https://www.youtube.com/embed/VIDEO_ID" />
</div>;
{
  /*home_shortcut_right#*/
}
