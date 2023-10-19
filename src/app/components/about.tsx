import Link from "next/link"
import Image from "next/image"

const About=() => {
    return(
        <div id="about">
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="Abdullah"
        width={300}
        height={200}
        src={require("../../../public/assets/t2-removebg-preview.png")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      About Me
       
      </h1>
      <p className="mb-5 leading-relaxed">
      Welcome to my corner of the web! I m Abdullah, and I m delighted to share a bit about myself with you. I believe that life is a journey of self-discovery, and I m on a quest to explore, learn, and grow. This website is a window into my world, a place where I can express my passions, experiences, and the things that make me who I am.<br/>

      One of my greatest passions is technology. As a lifelong enthusiast, I ve been captivated by the ever-evolving world of gadgets, software, and innovations. I m also an advocate for sustainability and am committed to finding ways to make our world a better place for future generations.<br/>
      Thank you for visiting, and I look forward to sharing more with you on this website. If you have any questions, comments, or ideas to share, don t hesitate to reach out. Together, we can make this digital space a place of inspiration and knowledge.<br/>

      </p>
      <div className="flex justify-center">
        <Link  target = "_blank" href = {"/assets/p1.jpg"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         View CV
        </button>
       </Link>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default About
