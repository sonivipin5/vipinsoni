import React,{useRef} from "react";
import Link from "next/link";
import {  RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiMailLine, RiMapPinFill, RiPhoneFill, RiTwitterLine } from "react-icons/ri";



const Contact = () => {

  const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

  const Name = useRef()
  const email = useRef()
  const subject = useRef()
  const message = useRef()
  const sendMessage = useRef()
  const submitBtn = useRef()

  const Pdefault = (e) => {
      e.preventDefault()

      const enterName = Name.current.value
      const enterEmail = email.current.value
      const enterSubject  = subject.current.value
      const enterMessage = message.current.value
   
    
        if(enterName.length <= 2){
          return alert('Please Fill All the Fields \n\nMinimum 3 Character In Name \nEmail like this - example@example.com \nMinimum 10 - 10 Character In Subject And Message  ')
        }
        if(enterEmail != enterEmail.match(regex)){
          return alert('Fill Email like this - example@example.com')
        }
        if(enterSubject.length <= 9){
          return alert('Fill Subject Minimum 10 Character')
        }
        if(enterMessage.length <= 9){
          return alert('Fill Message Minimum 10 Character')
        }
    
      
    
      const reqBody ={  
        name: enterName,
        email: enterEmail,
        subject: enterSubject,
        message: enterMessage
      }
      // reqBody.self = reqBody


    fetch('/api/contactus',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data=>(data))

      Name.current.value=''
      email.current.value=''
      subject.current.value=''
      message.current.value=''

      if(sendMessage.current.classList.contains('scale-0')){
        sendMessage.current.classList.remove('scale-0')
        setTimeout(() => {
          sendMessage.current.classList.add('scale-0')
         }, 2000)
      }
  }


  
  return (
    <div className="container m-auto" id="contact">
      <div className=" w-full min-h-screen  ">
        <div className=" text-center p-10" data-aos='fade-down'>
          <h1 className=" text-gradient text-6xl font-semibold ">
            Contact Us
          </h1>
          <p className="text-white my-2">Any one want to contact me. Just write us a message!</p>
        </div>

        {/* Contact card */}
       <div className="flex justify-center" data-aos='fade-up'>
          <div className="card w-3/4 mb-10 lg:h-fit rounded-xl lg:count-2">

            <div className="contactInfo lg:w-[40%] p-5 text-white">
              <div className="bg-[#1f0a4e] h-full flex flex-col justify-between p-5 rounded-xl blue-gradient">
                <h2 className="text-2xl text-white font-semibold">Contact Information</h2>

                <div className="my-10 font-semibold ">
                <div><RiPhoneFill className="inline-block text-cyan-500 bg-white rounded-full p-1 text-2xl shadow-2xl"/><p className="inline-block px-3">9669507012</p></div><br />
                <div><RiMailLine className="inline-block text-cyan-500  bg-white rounded-full p-1 text-2xl" /><p className="inline-block px-3"> sonivipin@gmail.com</p></div><br />
                <div className="inline-block"><RiMapPinFill className="inline-block text-cyan-500  bg-white rounded-full p-1 text-2xl" /><p className="inline w-full px-3"> Home, W83J+3QG, NH 44, Dabra </p></div><br />
                </div>
                <div className=" text-center  space-x-3">
                <RiFacebookLine className="text-3xl transition-all inline-block cursor-pointer hover:text-blue-600 hover:bg-white hover:rounded-full p-[2px]"/>
                <RiTwitterLine className="text-3xl transition-all inline-block cursor-pointer hover:text-[#1DA1F2] hover:bg-white hover:rounded-full p-[2px]"/>
                <RiInstagramLine className="text-3xl transition-all inline-block cursor-pointer hover:text-[#8a3ab9] hover:bg-white hover:rounded-full p-[2px]"/>
                <RiLinkedinLine className="text-3xl transition-all inline-block cursor-pointer hover:text-[#0A66C2] hover:bg-white hover:rounded-full p-[2px]"/>
                </div>
              </div>
            </div>

            {/* contactForm */}
            <div className=" contactForm lg:w-[60%] p-5">

              <form method="POST" className=" relative contactUs w-full">

                <div className='lg:count-2 gap-2'>
                  <input ref={Name} min='3' type="text" name="name" id="name" placeholder="Name" className=".name" required />
                  <label htmlFor="name"><span></span></label>

                  <input ref={email} type="email" name="email" id="name" placeholder="Email" pattern="(\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b)" required />
                </div>

                <input ref={subject} type="text" name="subject" id="name" placeholder="Subject" required/>

                <textarea ref={message} type="text"  rows="5" name="message" id="name" placeholder="Message" required />

                <button onClick={Pdefault} ref={submitBtn}  className='cyanSlideEffect  w-[40%]'> Send message!</button>

              <div ref={sendMessage} className="absolute transition-transform text-center scale-0 top-1/4 text-4xl font-bold left-0 w-full h-full bg-transparent text-green-600">
                  <p>Successful Send</p>
              </div>
              </form>

            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

// export default Contact;
