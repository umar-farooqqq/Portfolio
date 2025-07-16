import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] text-black bg-white pt-24'
    >
      <h4 className="text-center text-5xl font-mono pt-4">Connect with me</h4>

      <div className="flex justify-center items-center mx-auto max-w-xl mt-8 mb-8">
        <ul className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <li className="flex-1 flex justify-center border border-gray-400 p-2 rounded-lg hover:shadow-lg">
            <Link
              href="mailto:umarfarooq63425@gmail.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-black hover:underline text-gray-700"
            >
              <Mail size={24} />
              <span>Email</span>
            </Link>
          </li>
          <li className="flex-1 flex justify-center border border-gray-400 p-2 rounded-lg hover:shadow-lg">
            <Link
              href="https://www.linkedin.com/in/umar-farooq-uf2003"
              target="_blank"
              className="flex items-center gap-2 hover:text-black hover:underline text-gray-700"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li className="flex-1 flex justify-center border border-gray-400 p-2 rounded-lg hover:shadow-lg">
            <Link
              href="https://github.com/umar-farooqqq"
              target="_blank"
              className="flex items-center gap-2 hover:text-black hover:underline text-gray-700"
            >
              <Github size={24} />
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-center text-5xl font-mono pt-4">Get in touch</p>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! if you have any questions, comments, or
        feedback, feel free to reach out.
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:outline-none focus:border-gray-800"
          />
          <input
            type="email"
            required
            placeholder="Enter your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:outline-none focus:border-gray-800"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 focus:outline-none focus:border-gray-800"
        ></textarea>

        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
}
