import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-center items-center inset-x-0 max-w-3xl mx-auto mt-5  fixed z-50 rounded-full  px-5 min-h-16 text-yellow-50 bg-slate-700 "
    >
      <div>
      <Image src={"https://thumbs.dreamstime.com/z/data-flow-chart-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134333478.jpg"} width={40} height={15} alt="logo" className="rounded-full"></Image>
      </div>
      <div>
      <nav>
        <ul className="flex justify-between w-auto gap-8 ">
          <li className="hover:text-blue-400 font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-400 font-bold">
            <Link href={"/About"}>About</Link>
          </li>
          <li className="hover:text-blue-400 font-bold" >
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header