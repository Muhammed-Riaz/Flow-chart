import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <header className="flex justify-between items-center inset-x-0 max-w-full mt-5 sm:fixed sm:z-50 rounded-full px-5 min-h-16 text-yellow-50 bg-slate-700 min-w-[250px]">
    
      <div>
        <Image 
          src={"https://thumbs.dreamstime.com/z/data-flow-chart-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134333478.jpg"} 
          width={40} 
          height={15} 
          alt="logo" 
          className="rounded-full" 
        />
      </div>
      <nav className="hidden md:block ">
        <ul className="flex justify-between w-auto gap-32 text-xl ">
          <li className="hover:text-blue-400 font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-400 font-bold">
            <Link href={"/About"}>About</Link>
          </li>
          <li className="hover:text-blue-400 font-bold">
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="block md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <nav>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-blue-400 font-bold">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="hover:text-blue-400 font-bold">
                  <Link href={"/About"}>About</Link>
                </li>
                <li className="hover:text-blue-400 font-bold">
                  <Link href={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
