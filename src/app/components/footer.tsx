import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-50 py-12">

      <div className="max-w-5xl mx-auto grid grid-cols-2 text-center sm:grid-cols-2 px-8 gap-8 sm:px-6">

    <div>
      <h3 className="text-yellow-400 text-lg font-semibold mb-4">About Us</h3>
      <p className="mb-4">In 2021, we also updated the Venngage brand, introduced a diagramming automation feature that let you effortlessly create complex diagrams and are diligently working on our video creation feature will allow our customers to create engaging content with a familiar platform.
      As our team grows, and our platform evolves, we look forward 
    to all the new and exciting things in store for Venngage.</p>
    </div>

    <div>
      <h3 className="text-yellow-300 text-lg font-semibold mb-4 ">Quick Links</h3>
      <ul>
        <li className="hover:text-sky-500 hover:translate-x-2 hover:transition-transform my-5 ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-sky-500 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"/About"}>About</Link>
        </li>
        <li className="hover:text-sky-500 hover:translate-x-2 hover:transition-transform my-5">
          <Link href={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-yellow-300 text-lg font-semibold mb-4">Follow Us</h3>

      <div className="flex gap-8 justify-center items-center">
      <Link href={"https://www.facebook.com/nawabriaz.riazahmed"}>
      <Image src={"https://ugc.production.linktr.ee/79ee0b44-3ca1-4c85-a976-0e30caa5b9ba_IMG-7739.png?io=true&size=thumbnail-stack-v1_0"} width={40} height={15} alt="facebook" className="rounded-full text-center"></Image>
      </Link>


      <Link href={"https://www.linkdin.com/in/riaz-ahmed-zaur-a668832b6?utm_source=share&utm-campaign=share_via&utm_content=profile&utm_medium=android_app"}>
      <Image src={"https://logodix.com/logo/91001.png"}width={40} height={15} alt="Linkdin"></Image>
      </Link>

      
      <Link href={"https://github.com/Muhammed-Riaz"}>
      <Image src={"https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png"}width={40} height={15} alt="Github"></Image>
      </Link>
      </div>

    </div>

    <div>
      <h3 className="text-yellow-300 text-lg font-semibold mb-4">Contact Us</h3>
      <p>Sindh</p>
        <p>Hyderabad</p>
        <p>Email: riazahmedzaur110@gmail.com</p>
        <p>phone:+92 340280071-5</p>
        <p>GIAIC:Student</p>
    </div>

    </div>
    </footer>
  )
}

export default Footer