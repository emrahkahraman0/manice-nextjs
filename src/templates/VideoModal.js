"use client";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

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
          <FaPlay />
        </span>

        {isOpen && (
          <div className="modal">
            <div ref={modalRef} className="modal_content">
              <span className="close" onClick={closeModal}>
                <FaTimes />
              </span>
              <iframe
                width="100%"
                height="500"
                src={videoUrl}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
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
</div>
{/*home_shortcut_right#*/}
