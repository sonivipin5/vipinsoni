import React, { useRef } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Modal = (props) => {
  const ref = useRef();

  const open = () => {
    if (ref.current.classList.contains("modalBox")) {
      ref.current.classList.toggle("hidden");
    }
  };
  const closeModal = () => {
    if (ref.current.classList.contains("modalBox")) {
      ref.current.classList.toggle("hidden");
    }
  };

  return (
    <>
    <span onClick={open}>fdf</span>
      <div ref={ref} className="modalBox hidden z-[20] absolute top-0 left-0 bg-[#1D1D1D]  min-w-[475px] w-full h-full">
        <div className=" w-full h-full flex justify-center items-center ">
          <div className=" border bg-white w-[90%] h-[90%] flex justify-center items-center">
            <span
              onClick={closeModal}
              className="absolute top-4 right-5 text-3xl cursor-pointer text-white"
            >
              <AiOutlineCloseSquare />
            </span>
            <iframe className="w-full h-[100%]" src={props.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
