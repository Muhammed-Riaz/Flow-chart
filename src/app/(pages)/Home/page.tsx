import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <main className="h-auto  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-blue-200">

    <div>
      <h1 className="mt-36 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-950">Free Online Flowchart Maker</h1>
      <p className="mt-10 text-2xl font-semibold"> Visualize processes, guide decisions, and train others using stunning flowchart designs.</p>
    </div>
    <div>
      <div>
        <Link href={"/"}>
          <button
            className="bg-blue-500 text-white dark:text-white
        border-neutral-200  capitalize p-4 font-semibold rounded-md text-sm mt-8 hover:drop-shadow-lg hover:bg-blue-950 shadow-lg shadow-blue-500/50"
          >CREATE FLOWCHARTS</button>
        </Link>
      </div>
    </div>

    <div className="mt-10">

      <Image src={"https://venngage-wordpress.s3.amazonaws.com/uploads/2021/10/flowchart-hero-1.gif"} width={1000} height={1000} alt="Flow-chart"></Image>


    </div>
  </main>
  )
}

export default Home