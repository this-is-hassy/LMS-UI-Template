import React from "react";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";


export default function Home() {
  return (
    <>
       <header className="  max-sm:text-zinc-900 flex items-center text-zinc-900 justify-between shadow-md h-12 w-full px-12 max-sm:px-0  border-b-2 ">
          <h2 className="text-[2vw] max-sm:mx-7 max-sm:text-[2.5vh] font-bold text-black hover:scale-110 hover:duration-200 hover:ease-out">
            L<span className="text-emerald-500">o</span>g
            <span className="text-emerald-500">o</span>_!
          </h2>
          <nav className="flex gap-[3vw] items-center text-base  font-bold max-sm:hidden">
            <h4 className="hover:text-emerald-500 duration-500">Store</h4>
            <h4 className="hover:text-emerald-500 duration-500">Courses</h4>
            <h4 className="hover:text-emerald-500 duration-500">Blog</h4>
            <h4 className="hover:text-emerald-500 duration-500">Account</h4>
          </nav>
          <i className="ri-menu-3-fill text-lg  font-bold  sm:hidden mx-7"></i>
        </header>
      <main className="container mx-auto  h-full w-full relative">
        <section
          style={{ height: "calc(100vh - 48px)" }}
          className="flex max-sm:flex-col w-full h-screen "
        >
          <div className="w-1/2 max-sm:w-full h-full max-sm:h-3/5 max-sm:px-6 px-12 max-sm:py-4 py-20 ">
            <h1 className="text-5xl max-sm:text-5xl font-bold leading-tight mb-5 max-sm:leading-none ">
              Learn from the <span className="text-emerald-500 ">coolest </span>
              coding platform of Pakistan.
            </h1>
            <p className="font-mono mb-7 text-lg font-semibold w-4/5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              porro distinctio minima, quod vero nostrum, laudantium qui
              reiciendis nihil natus deserunt a quam incidunt magni velit alias
            </p>
            <button className="h-10 w-fit px-3 rounded-md bg-zinc-400 hover:bg-zinc-700 duration-500 hover:text-emerald-400 text-base font-bold ">
              Explore Now
            </button>
          </div>
          <div className=" h-full w-1/2 max-sm:w-full max-sm:h-2/5">
            <Image
              className="pt-10 pl-10 max-sm:py-4 max-sm:px-6 max-sm:scale-100"
              src="/sideImg.png"
              alt="sideImg"
              width={600}
              height={600}
            />
          </div>
        </section>
      </main>
    </>
  );
}
