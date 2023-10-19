"use client"
import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"

const Hero = () => {
    return (

        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        I am
                        <br className="hidden lg:inline-block" />
                        <Typewriter options={{
                            strings: ['Web Developer', 'UI Designer','Student','Programer'],
                            autoStart: true,
                            loop: true

                        }} />

                    </h1>
                    <div className="w-[250px] h-[2px] bg-blue-700"></div>
                    <p className="mb-8 leading-relaxed">
                        "Welcome to Abdullah's Programming World! Dive into a realm of code, creativity, and innovation with a passionate programmer. Explore the digital landscape through the eyes of me and unlock the secrets of web design and more."
                    </p>
                    <div className="flex justify-center">
                        <Link href= {"#contact"}>
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Contact
                        </button></Link>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded mx-auto w-[20rem]"
                        alt="hero"
                        width={500}
                        height={100}
                        src={require('../../../public/assets/t1-removebg-preview.png')}
                    />
                </div>
            </div>
        </section>


    )
}
export default Hero