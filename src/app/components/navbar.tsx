import Link from "next/link"
import Image from "next/image"
import { FiDownload } from 'react-icons/Fi';

const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../../../public/assets/logo1.2.png")} alt="Abdullah" width={100} height={100} className="
                        
                        " />
                        <span className="ml-3 text-xl">My Portfolio</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-gray-900   @apply flex-auto text-center uppercase transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] m-2.5 p-[30px] rounded-[10px] hover:bg-[right_center] @apply bg-[linear-gradient(to_right,#f6d365_0%,#fda085_51%,#f6d365_100%)] ">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-gray-900  @apply flex-auto text-center  transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] m-2.5 p-[30px] rounded-[10px] hover:bg-[right_center] @apply bg-[linear-gradient(to_right,#fbc2eb_0%,#a6c1ee_51%,#fbc2eb_100%)]">About</Link>
                        <Link href={"#skill"} className="mr-5 hover:text-gray-900  @apply flex-auto text-center  transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] m-2.5 p-[30px] rounded-[10px] hover:bg-[right_center] @apply bg-[linear-gradient(to_right,#84fab0_0%,#8fd3f4_51%,#84fab0_100%)]">Skills</Link>
                        <Link href={"#project"} className="mr-5 hover:text-gray-900  @apply flex-auto text-center  transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] m-2.5 p-[30px] rounded-[10px] hover:bg-[right_center] @apply bg-[linear-gradient(to_right,#a1c4fd_0%,#c2e9fb_51%,#a1c4fd_100%)]">Projects</Link>
                        <Link href={"#contact"} className="mr-5 hover:text-gray-900  @apply flex-auto text-center  transition-[0.5s] bg-[200%_auto] text-[white] shadow-[0_0_20px_#eee] m-2.5 p-[30px] rounded-[10px] hover:bg-[right_center] @apply bg-[linear-gradient(to_right,#ffecd2_0%,#fcb69f_51%,#ffecd2_100%)]">Contact</Link>

                    </nav>
                    <a href="/assets/p1.jpg">
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Download CV
                        </button></a>
                </div>
            </header>
        </div>
    )
}
export default Navbar