import { AiFillHtml5 } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';
import {RiJavascriptFill} from 'react-icons/ri';
import {SiTypescript} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import {IoLogoCss3} from 'react-icons/io';







const Skills = () => {
    return (
        <div id="skill"><section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                        SKILLS
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        My Skills
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4 -mt-[4rem]">
                    {/* Skills */}

                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                                    <AiFillHtml5 className="text-xl font-bold " />

                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    HTML
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className='absolute bg-orange-500 h-1 w-[85%] rounded-xl'>

                                    </div>
                                </div>
                                <p className='font-bold text-blue-600 text-right'>85%</p>


                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                    <SiTailwindcss className="text-xl font-bold " />

                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                    Tailwind CSS
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className='absolute bg-orange-500 h-1 w-[60%] rounded-xl'>

                                    </div>
                                </div>
                                <p className='font-bold text-blue-600 text-right'>60%</p>


                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                    <RiJavascriptFill className="text-xl font-bold " />

                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                  Javascript
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className='absolute bg-orange-500 h-1 w-[40%] rounded-xl'>

                                    </div>
                                </div>
                                <p className='font-bold text-blue-600 text-right'>40%</p>


                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                    <SiTypescript className="text-xl font-bold " />

                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                  Typescript
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className='absolute bg-orange-500 h-1 w-[80%] rounded-xl'>

                                    </div>
                                </div>
                                <p className='font-bold text-blue-600 text-right'>80%</p>


                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
                                    <TbBrandNextjs className="text-xl font-bold " />

                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                  NextJs
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className='absolute bg-orange-500 h-1 w-[25%] rounded-xl'>

                                    </div>
                                </div>
                                <p className='font-bold text-blue-600 text-right'>25%</p>


                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyan-400 text-white flex-shrink-0">
                                    <IoLogoCss3 className="text-xl font-bold " />

                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                  Css
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                                    <div className='absolute bg-blue-500 h-1 w-[90%] rounded-xl'>

                                    </div>
                                </div>
                                <p className='font-bold text-blue-600 text-right'>90%</p>


                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
        </div>

    )
}
export default Skills