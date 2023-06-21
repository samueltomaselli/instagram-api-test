import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className=" bg-gray-200 bg-[url('https://images.unsplash.com/photo-1537209383625-19584677a4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')] bg-cover bg-center bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.8)] w-screen h-auto flex justify-center ">
        <div className="px-4 max-w-[1140px] py-32 lg:flex lg:h-screen lg:items-center ">
          <div className="mx-auto max-w-xl text-center text-white">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-red-700 sm:block">Increase Conversion.</strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
              ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-base">
              <Link
                className="block w-full rounded bg-red-600 px-12 py-3 font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 font-medium border text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
