

export default function Home() {

 
    return (
      <div className="bg-[#1D1D1D] w-screen h-screen flex justify-center items-center"> 
  
          <div className="home transition-all w-full h-[inherit] ]">
            <div className="text-7xl p-10 font-extrabold text-cyan-300">Contact Us</div>

            <form action="#" className="contactUs">

              <input type="text" name="name" id="name" placeholder="Name" />

              <input type="email" name="email" id="name" placeholder="Email" />

              <input type="text" name="subject" id="name" placeholder="Subject" />

              <textarea type="text"  rows="5" name="message" id="name" placeholder="Message" />

              <button > Send message!</button>

            </form>

          </div>
      </div>
    )
  }
  
  