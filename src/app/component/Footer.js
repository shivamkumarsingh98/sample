"use client"; // Use client

import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 text-center">
      <h2 className="text-lg font-semibold">Gruha Lakshmi Scheme</h2>
      <p className="mt-2 text-sm leading-relaxed">
        Our website is committed to providing accurate and trustworthy
        information. We carefully curate our content from reliable sources,
        including reputable news outlets, government websites, official press
        releases, and social media channels. To maintain the highest standards
        of quality, we adhere to strict editorial and fact-checking policies. If
        you have any concerns or feedback about the information on our website,
        please don't hesitate to contact us.
      </p>
      <div className="mt-4">
        <a href="#" className="text-blue-400 hover:underline text-sm">
          Ladki bahin Yojana Mukhyamantri Mahila Samman Yojana
        </a>
      </div>
      <p className="mt-4 text-sm">
        © 2024 All Rights Reserved{" "}
        <span className="text-blue-400 hover:underline">
          Gruha Lakshmi Scheme
        </span>
      </p>
    </div>
  );
}

export default Footer;
