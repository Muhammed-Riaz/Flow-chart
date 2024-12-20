
import Image from "next/image"


function page() {
  return (
    <main className=" max-w-screen-2xl relative overflow-hidden mx-auto py-10 md:py-0 px-10">

      <div className="sm:flex max-w-screen-lg mx-auto justify-center items-center ">

        <div>
          <p className="sm:mt-36 mt-10 sm:text-2xl text-xl text-gray-400 ">OUR MISSION</p>
          <h1 className="mt-5 sm:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-950">
            We help over 40,000 businesses create compelling visuals</h1>

          <button className="bg-blue-500 text-white dark:text-white
        border-neutral-200 text-center  capitalize p-4 font-semibold rounded-md text-sm mt-8 hover:drop-shadow-lg hover:bg-blue-950 shadow-lg shadow-blue-500/50">LEARN HOW</button>
        </div>
        <div className="sm:mt-32 mt-24">
          <Image src={"https://venngage.com/assets/img/about-us/hero-image.png"} width={500} height={800} alt="image"></Image>
        </div>
      </div>


      <div className="mt-20 ">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-xl text-gray-600 mt-10" >Trusted by</p>
          <Image src={"https://www.skykick.com/wp-content/uploads/skykick-partner-logos-homepage-lockup-2023-2@2x-1536x206.png"} width={"800"} height={"500"} alt="Company Logo clas" className="mt-10"></Image>
        </div>
      </div>


      <div className="sm:mt-56 mt-24 sm:flex sm:justify-center  items-center max-w-5xl sm:mx-auto bg-gray-100 mb-10 py-10 sm:p-10 rounded-xl font-mono text-cyan-900">
        <div className="w-1/2">
          <p className="text-gray-400 text-center">WHAT WE DO</p>
          <p className="text-lg w-56 sm:w-full mt-2 p-5 text-center sm:text-start">Professionals worldwide use Venngage to communicate complex ideas through visuals. We believe everyone should be able to communicate like a designer, even without any design skills or experience. That&apos;s why our driven Venngage team continues to raise the bar for design accessibility and effective communication for organizations big and small, around the world.</p>
          <button type="submit" className="bg-blue-500 text-white dark:text-white
        border-neutral-200 text-center ml-5 sm:ml-0 w-48 pb-2 pt-2 sm:w-auto sm:p-4  rounded-md sm:text-lg mt-8 hover:drop-shadow-lg hover:bg-blue-950 shadow-lg shadow-blue-500/50 sm:mb-5 mb-10 ">VIEW OPEN POSITIONS</button>

        </div>
        <div>
          <Image src={"https://venngage.com/assets/img/about-us/map.png"} width={500} height={500} alt="map"></Image>
        </div>
      </div>


      <section className="w-full mt-20 bg-blue-200 h-auto sm:flex justify-center flex-col items-center ">
        <div className="max-w-screen-2xl mx-auto px-7">
          <h1 className="text-center sm:text-4xl text-2xl font-semibold pt-5">Our Journey Over the Years</h1>
          <p className="text-center text-xl mt-5 ">Since the idea of Venngage came about in 2011, the company has grown in many different ways and achieved incredible milestones. Here&apos;s a look at our journey over the years and all we've accomplished.</p>
        </div>






        


        <div className=" mx-auto mt-10 px-5 py-20 sm:flex flex-col justify-center  ">

          <div className="sm:flex max-w-xl">

            <div className=" sm:text-right  ">
              <p className="text-blue-500 text-xl">2011-2014</p>
              <h2 className="text-3xl font-semibold">The Early Days</h2>
              <p className="mt-5">The idea of Venngage came from a hackathon in 2011. Early iterations took the forms of Visualize.me and Beam: Chart Maker. Venngage was officially established as an organization in July 2012.</p>
              <p className="mt-5"> By 2013, Venngage had 4 full-time employees and by 2014, we had 1,000+ active, happy users!
              </p>
            </div>

            <div className="sm:w-96 mt-10 sm:ml-10 ">
              <Image src={"https://th.bing.com/th/id/OIP.xzgOuXAlsW-Mnwpft87nOQHaFj?rs=1&pid=ImgDetMain"} width={200} height={500} alt="story icon " className="rounded-2xl">
              </Image>
            </div>

            <div className="mt-14 h-auto sm:w-16 sm:flex flex-col justify-center items-center sm:ml-5 hidden ">
              <div className="border-x-inherit p-0">
                <div className="w-5 h-5 rounded-full bg-blue-400" dir="rtl flex"></div>
              </div>
              <div className=" border-r-2 border-black h-full m-auto mt-5"></div>
            </div>

          </div>
        </div>





        <div className="mx-auto mt-10 px-5 py-20 sm:flex flex-col justify-center ">



          <div className="sm:flex max-w-xl">

            <div>
              <p className="text-blue-500 text-xl">2015-2016</p>
              <h2 className="text-3xl font-semibold text-yellow-900">We Went Viral!</h2>
              <p className="mt-5">Working in a co-working space, we were up to just 7 employees in 2015. We were rolling out some great content, and then our Game of Thrones Infographic went viral! We were featured in the Wall Street </p>
              <p className="mt-5"> Journal, Huffington Post, elite Daily, Pop Sugar, Mashable, Nerdist, Taxi and others!
              </p>
            </div>



            <div className="sm:w-96 mt-10 sm:ml-10 ">
              <Image src={"https://filmlifestyle.com/wp-content/uploads/2022/06/Best-Digital-Advertising-Platforms52.jpg"} width={200} height={500} alt="story icon " className="rounded-2xl">
              </Image>
            </div>

            <div className="mt-8 h-auto w-16 sm:flex flex-col justify-center items-center ml-5 hidden ">
              <div className="border-x-inherit p-0">
                <div className="w-5 h-5 rounded-full bg-blue-400" dir="rtl flex"></div>
              </div>
              <div className=" border-r-2 border-black h-full m-auto mt-5"></div>
            </div>

          </div>
        </div>




        <div className=" mt-10 px-5 py-20 sm:flex flex-col justify-center items-end mx-auto  ">



          <div className="sm:flex max-w-xl">

            <div>
              <p className="text-blue-500 text-xl">2017-2018</p>
              <h2 className="text-3xl font-semibold text-violet-950">Venngage Goes International</h2>
              <p className="mt-5">By 2017, it was clear that we had an active user base from around the world. We expanded our languages, starting with: Spanish, Italian, Portuguese, Russian, German, and French.</p>
              <p className="mt-5">  In 2018, we had over 40 employees working in-house and where we moved to our current office.

              </p>
            </div>

            <div className="sm:w-96 mt-10 sm:ml-10 ">
              <Image src={"https://www.adbirt.com/blog/wp-content/uploads/2020/09/social-3408791_1920.jpg"} width={500} height={500} alt="story icon " className="rounded-2xl">
              </Image>
            </div>

            <div className="mt-8 h-auto smw-16 sm:flex flex-col justify-center items-center ml-5 hidden ">
              <div className="border-x-inherit p-0">
                <div className="w-5 h-5 rounded-full bg-blue-400" dir="rtl flex"></div>
              </div>
              <div className=" border-r-2 border-black h-full m-auto mt-5"></div>
            </div>

          </div>
        </div>



        <div className=" mt-10 px-5 py-20 sm:flex flex-col justify-center items-end mx-auto  ">

          <div className="sm:flex max-w-xl">

            <div>

              <p className="text-blue-500 text-xl">2019</p>
              <h2 className="text-3xl font-semibold text-blue-950">Time to Scale!</h2>
              <p className="mt-5">In 2019, we had 50 in-house, full-time employees and 5 remote staff. Our user base had grown significantly as well to 1.6 million worldwide! We released My Brand Kit which enabled every user </p>
              <p className="mt-5"> to upload and include their brand in anything they designed, including logos, fonts, and colors.
              </p>
            </div>

            <div className="sm:w-96 mt-10 sm:ml-10 ">
              <Image src={"https://www.searchenginejournal.com/wp-content/uploads/2023/11/5-655daaa2c07a8-sej.jpg"} width={300} height={500} alt="story icon " className="rounded-2xl">
              </Image>
            </div>

            <div className="mt-8 h-auto w-16 sm:flex flex-col justify-center items-center ml-5 hidden ">
              <div className="border-x-inherit p-0">
                <div className="w-5 h-5 rounded-full bg-blue-400" dir="rtl flex"></div>
              </div>
              <div className=" border-r-2 border-black h-full m-auto mt-5"></div>
            </div>

          </div>
        </div>



      </section>
    </main>
  )
}

export default page