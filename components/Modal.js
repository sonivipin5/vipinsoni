import React from 'react'

const Modal = () => {
  return (
    <div ref={ref} className="modalBox transition-all hidden z-[20] fixed top-0 left-0 bg-[#1D1D1D]  min-w-[475px] w-full h-full">
    <div className="transition-all w-full h-full flex justify-center items-center ">
      <div className=" transition-all bg-white w-[90%] h-[90%] m-10 flex justify-center items-center">
        <span
          onClick={closeModal}
          className="fixed top-5 right-5 text-3xl cursor-pointer text-white"
        >
          <AiOutlineCloseSquare/>
        </span>
        <iframe className="w-full h-full transition-all" src='https://my-strapi-blog.netlify.app/' />
      </div>
    </div>
  </div>
  )
}

export default Modal
