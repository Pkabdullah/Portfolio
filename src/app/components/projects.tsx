import Link from "next/link"
import Image from "next/image"

const Project = () => {
    return (
        <div id="project">

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            My Projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fuga illo tempora. Quam ut eveniet, itaque reprehenderit unde tenetur est nam corrupti? Odit rerum quam debitis reprehenderit ullam eius magni?

                        </p>
                    </div>
                    <div className="flex flex-wrap -m-5 mt-12">
                        <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer  overflow-auto" >
                            <div className="flex relative ">

                                <Image src={require("../../../public/assets/p2.png")}
                                    alt="gallery"
                                    
                                    className="absolute inset-0 w-full h-full object-cover object-center "

                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Responsive NavBar
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        NavBar
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This is the Poject in which I create a responsive Navbar.
                                    </p>
                                    <Link target="_blank" href={"https://responsive-navbar-liard.vercel.app"}>
                                        <p className="leading-relaxed text-blue-500 hover:text-red-500 hover:underline">
                                            View Project
                                        </p></Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}
export default Project