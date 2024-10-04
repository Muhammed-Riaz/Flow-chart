

function Contact() {
  return (
    <main className="bg-sky-300 h-auto mt-10 ">
      <div className="flex flow-col justify-center items-center max-w-5xl mx-auto item h-screen mb-10">
        <div className="bg-slate-600 p-10 mt-28 rounded-lg text-white">
          <label htmlFor="Name" className="text-2xl " >Full name:</label>
        
          <br />
          <input className="w-96 p-2 rounded-lg mt-3 mb-6 text-black" type="text" required placeholder="Enter Your Name"/><br />
          <label className="text-2xl " htmlFor="Number">Phone:</label>
        
          <br />


          <input className="w-96 p-2 rounded-lg mt-3 mb-6 text-black" type="tel"  required placeholder="Enter your Number"/><br />
          <label className="text-2xl "  htmlFor="Email">Email:</label>
          
          
          <br />
          <input className="w-96 p-2 rounded-lg mt-3 mb-6 text-black" type="email" required placeholder="example@gmail.com" />
          
          
          <br />
          <label className="text-2xl "  htmlFor="message">Message:</label>
          
          
          <br />
          <textarea className="text-black w-96 p-2 rounded-lg mt-3 mb-6" name="message" required placeholder="message ..."></textarea><br />

          <button type="submit" className="bg-blue-500 text-white dark:text-white
        border-neutral-200 w-32  capitalize p-2 font-semibold rounded-md text-sm  hover:drop-shadow-lg hover:bg-blue-950 shadow-lg shadow-blue-500/50">Submit</button>
        </div>
      </div>
    </main>
  )
}

export default Contact