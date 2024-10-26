

function Contact() {
  return (
    <main className="bg-sky-300 pb-28 px-5">
      <div className="sm:flex flow-col justify-center items-center max-w-2xl mx-auto ">
        <div className="bg-slate-600 p-10 sm:mt-36 mt-10 rounded-lg text-white pt-10">
          <label htmlFor="Name" className="text-2xl " >Full name:</label>
        
          <br />
          <input className="sm:w-96 p-2 rounded-lg mt-3 mb-6 text-black" type="text" required placeholder="Enter Your Name"/><br />
          <label className="text-2xl " htmlFor="Number">Phone:</label>
        
          <br />


          <input className="sm:w-96 p-2 rounded-lg mt-3 mb-6 text-black" type="tel"  required placeholder="Enter your Number"/><br />
          <label className="text-2xl "  htmlFor="Email">Email:</label>
          
          
          <br />
          <input className="sm:w-96 p-2 rounded-lg mt-3 mb-6 text-black" type="email" required placeholder="example@gmail.com" />
          
          
          <br />
          <label className="text-2xl "  htmlFor="message">Message:</label>
          
          
          <br />
          <textarea className="text-black sm:w-96 p-2 rounded-lg mt-3 mb-6" name="message" required placeholder="message ..."></textarea><br />

          <button type="submit" className="bg-blue-500 text-white dark:text-white
        border-neutral-200 w-32  capitalize p-2 font-semibold rounded-md text-sm  hover:drop-shadow-lg hover:bg-blue-950 shadow-lg shadow-blue-500/50">Submit</button>
        </div>
      </div>
    </main>
  )
}

export default Contact