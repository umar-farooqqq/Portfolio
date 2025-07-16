import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 text-black bg-white pt-24">
      <h1 className="text-center mb-2 text-lg font-mono">Introduction</h1>
      <p className="text-center text-5xl font-mono">About me</p>

      <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="About Image"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-justify">
            I am an experienced Front End developer with focused in building web applications using React and Next.js, and I have a strong foundation in HTML, CSS and JavaScript. 
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-200 hover:-translate-y-1 duration-500 hover:shadow-black shadow-md" key={index}>
                <Image
                src={icon}
                alt={title}
                className="w-7 mt-3"
                />
                
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700">
            Tools I Use 
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
