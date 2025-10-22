import { useState } from "react";
import facebookI from "../assets/ICONS/facebook.png";
import linkedInI from "../assets/ICONS/linkedin.png";
import xIcon from "../assets/ICONS/twitter.png";
import tiktokI from "../assets/ICONS/tik-tok.png";
import instagramI from "../assets/ICONS/instagram.png";
import whatsAppI from "../assets/ICONS/whatsapp.png";
import arrowDown from "../assets/arrowdown.png";

const Footer = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);

  return (
    <>
      <footer className="flex flex-col mt-50 bg-gray-100 text-gray-900 py-12 md:py-24 px-6">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="space-y-3 md:space-y-8 md:w-[50vw] md:ml-3">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <h1 className="text-[14px] font-semibold">ABOUT US</h1>
                  <button
                    className={`${
                      openAbout ? "rotate-180" : "rotate-0"
                    } transition-all duration-500 ease-in-out cursor-pointer`}
                    onClick={() => setOpenAbout(!openAbout)}
                  >
                    <img src={arrowDown} alt="open about" className="w-5" />
                  </button>
                </div>
              </div>
              <div
                className={`transition-all duration-400 ease-in-out ${
                  openAbout ? "opacity-100" : "opacity-0"
                }`}
              >
                {openAbout && (
                  <div className="transition-all duration-500 ease-in-out">
                    <p className="text-[12px]">
                      Orionwatches is the one stop online watch store for
                      genuine affordable luxury watches from global
                      brands.Established in 2015, we are committed to bringing
                      you the best.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <h1 className="text-[14px] font-semibold">POLICY</h1>
                  <button
                    className={`${
                      openPolicy ? "rotate-180" : "rotate-0"
                    } transition-all duration-500 ease-in-out cursor-pointer`}
                    onClick={() => setOpenPolicy(!openPolicy)}
                  >
                    <img src={arrowDown} alt="open about" className="w-5" />
                  </button>
                </div>
              </div>
              <div
                className={`transition-all duration-400 ease-in-out ${
                  openPolicy ? "opacity-100" : "opacity-0"
                }`}
              >
                {openPolicy && (
                  <div className="transition-all duration-500 ease-in-out space-y-2">
                    <p className="text-[14px]">
                      ORDER RETURNS AND REFUND POLICY
                    </p>
                    <p className="text-[12px]">Terms and Conditions</p>
                  </div>
                )}
              </div>
            </div>
            <div className="text-[14px]">
              <span className="font-semibold">Main Office:</span> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </div>

            <div className="border-t border-gray-400 my-4"></div>

            <div className="text-[14px]">
              <span className="font-semibold">Wuse II Store:</span> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </div>

            <div className="border-t border-gray-400 my-4"></div>

            <div className="text-[14px]">
              <span className="font-semibold">Gwarimpa Store:</span> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>

          <div className="border-t border-gray-400 my-10"></div>

          {/* Socials */}
          <div className="flex flex-col md:items-center space-y-6 md:w-[45vw]">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">CONNECT WITH US</h2>

              <div className="flex md:justify-center items-center space-x-5 lg:space-x-8">
                <img
                  src={facebookI}
                  alt="Facebook"
                  className="w-7 lg:w-9 hover:scale-110 transition-transform"
                />
                <img
                  src={linkedInI}
                  alt="LinkedIn"
                  className="w-7 lg:w-9 hover:scale-110 transition-transform"
                />
                <img
                  src={xIcon}
                  alt="X"
                  className="w-7 lg:w-9 hover:scale-110 transition-transform"
                />
                <img
                  src={tiktokI}
                  alt="TikTok"
                  className="w-7 lg:w-9 hover:scale-110 transition-transform"
                />
                <img
                  src={whatsAppI}
                  alt="WhatsApp"
                  className="w-7 lg:w-9 hover:scale-110 transition-transform"
                />
                <img
                  src={instagramI}
                  alt="Instagram"
                  className="w-7 lg:w-9 hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto text-center -mb-7 md:-mb-16">
          <p className="text-gray-500 text-sm md:text-base mt-6">
            © 2025 All Rights Reserved —{" "}
            <span className="text-black font-medium">Orion Watches</span>
          </p>
          <p>
            Crafted by{" — "}
            <a
              href="/bapyat-dev.vercel.app"
              target="_blank"
              className="text-black transition-all duration-200 hover:underline"
            >
              Gaius Emmanuel
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
