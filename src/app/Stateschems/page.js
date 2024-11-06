"use client"; // Use client
import React from "react";
import Image from "next/image";
import Footer from "../component/Footer";

function page() {
  return (
    <div>
      <div className="container mx-auto p-4 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">State Schemes</h1>
        </div>

        <h2 className="text-xl font-semibold text-black mb-2 text-center">
          Mojini | Mojini v3, Application status, Login, Sketch
        </h2>

        <hr className="border-t-2 border-blue-500 my-4 w-[70%]" />

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Image
              src="/secondimage.jpg"
              alt="Logo"
              width={1000}
              height={800}
            />
            <br />
            <p className="text-lg mt-4">
              Contents1 Mojini v32 Key Features of Mojini3 Benefits of Using
              Mojini4 How to download and …
            </p>
            <br />
            <a href="https://gruhalakshmischeme.in/nadakacheri/" rel="bookmark">
              Nadakacheri | Cast and income certificate status at
              @nadakacheri.karnataka.gov.in
            </a>
          </div>

          <aside className="w-full md:w-1/3">
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
              />
              <button className="bg-pink-600 text-white px-4 rounded-r">
                Search
              </button>
            </div>
            <br />
            <br />
            <h3 className="text-pink-600 font-semibold text-xl mb-4">
              Recent Posts
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Mojini | Mojini v3, Application status, Login, Sketch
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Nadakacheri | Cast and income certificate status
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Lado Lakshmi Yojana Haryana | Eligibility, benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Tips for Choosing the Right Solar Panels
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
