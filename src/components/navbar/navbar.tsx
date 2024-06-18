
import { MdOutlineDarkMode } from "react-icons/md";

export function Navbar() {
    return (
        <nav className="flex justify-between w-full h-20 shadow-md items-center bg-white  px-14">
            <h1 className="font-bold text-xl">Where in the World?</h1>
            <div className="flex  items-center gap-1 cursor-pointer">
            <MdOutlineDarkMode className="size-4"  />
            <p className="font-semibold ">Dark Mode</p>
            </div>
        </nav>
    )
}