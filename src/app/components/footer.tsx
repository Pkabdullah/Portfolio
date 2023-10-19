import Link from 'next/link';
import { AiOutlineGithub, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import Image from "next/image"


const Footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-400  body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Image src={require("../../../public/assets/logo1.2.png")} alt="Abdullah" width={100} height={100} />
          <span className="ml-3 text-xl text-black">M.Abdullah</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 M_Abdullah

        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* <a className="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a> */}
          <Link target='_blank' href="https://twitter.com/home">
            <AiFillTwitterSquare className="ml-4 text-2xl hover:text-[#7777ec]" />
          </Link>
          < Link target='_blank' href="https://www.instagram.com/">
            <AiFillInstagram className="ml-4 text-2xl hover:text-[#d576ec]" />
          </Link>
          <Link
            target='_blank'
            href="https://github.com/">
            <AiOutlineGithub className="ml-4 text-2xl hover:text-[black]" />
          </Link>


        </span>
      </div>
    </footer></div>
  )
}
export default Footer