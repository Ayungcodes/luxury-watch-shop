// import Navbar from "../components/Navbar";
import { NavLink } from "react-router";
import facebookI from "../assets/ICONS/facebook.png";
import linkedInI from "../assets/ICONS/linkedin.png";
import xIcon from "../assets/ICONS/twitter.png";
import tiktokI from "../assets/ICONS/tik-tok.png";
import instagramI from "../assets/ICONS/instagram.png";
import whatsAppI from "../assets/ICONS/whatsapp.png";

const LoginPage = () => {
  return (
    <>
      {/* navbar */}
      {/* <Navbar /> */}

      <div className="flex flex-col overflow-y-auto lg:overflow-y- fixed inset-0 z-60 mx-auto my-auto h-screen min-h-screen w-screen bg-gray-100 transition-transform ease-linear duration-300">
        {/* hero */}
        <div className="bg-gray-300 h-[20vh] py-7 w-screen mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <h1 className="text-[22px] md:text-4xl font-semibold">My Account</h1>
          <div className="flex w-[50vw] justify-between md:justify-evenly md:-space-x-3 md:text-xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop</NavLink>
            <button className="text-gray-600">My Account</button>
          </div>
        </div>

        {/* loggin/register */}
        <div className="w-[95vw] flex flex-col md:flex-row flex-1 mx-auto justify-center items-center space-y-3 mt-11 md:mt-0 mb-15 md:mb-25">
          <div className="mx-4 lg:mx-10">
            <div className="space-y-4 md:space-y-6 flex flex-col">
              <h1 className="text-xl md:text-3xl font-semibold">Login</h1>
              <input
                type="text"
                placeholder="Username or email address *"
                className="py-2 px-3 w-76 md:w-87 lg:w-97 border border-gray-700 rounded-xl"
                name=""
                id=""
              />
              <input
                type="password"
                placeholder="Password *"
                className="py-2 px-3 w-76 md:w-87 lg:w-97 border border-gray-700 rounded-xl"
                name=""
                id=""
              />
            </div>
            <div className="flex mt-3 space-x-16 md:space-x-11 lg:space-x-17 text-[15px]">
              <div className="flex items-center">
                <button className="bg-gray-900 text-gray-200 py-1.5 px-5 md:px-7 lg:px-10 text-[14px] md:text-lg rounded-xl">
                  LOGIN
                </button>
              </div>

              <div className="space-y-1">
                <div className="space-x-1">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="md:text-lg">
                    Remember me
                  </label>
                </div>
                <a
                  href=""
                  className="underline underline-offset-2 font-semibold md:text-lg"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-0.5 md:space-y-1 mx-7 md:mx-5 lg:mx-10 mt-5">
            <h1 className="text-lg md:text-xl font-semibold">
              Don't Have An Account?
            </h1>
            <p className="md:text-lg">
              Create an account to enjoy faster checkout, track your orders
              easily, save your favorite watches, and get early access to
              exclusive deals.
            </p>
            <div className="mt-2">
              <button className="bg-gray-900 text-gray-200 py-1.5 px-5 md:px-7 lg:px-10 text-[14px] md:text-lg rounded-xl">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* footer */}

        <div className=" bg-gray-300 w-screen h-[15vh] lg:h-[18vh] lg:py-7 flex justify-center items-center">
          <div className="space-y-2 mx-4 md:mx-28 lg:mx-60 md:space-y-6 lg:space-y-3">
            <h1 className="pt-6 text-center text-[15px] md:text-[18px] lg:text-[22px] font-semibold">
              CONNECT WITH US
            </h1>
            <div className="flex items-center space-x-5 md:space-x-8 mb-4">
              <div className="w-8 md:w-11">
                <img src={facebookI} alt="" className="w-full object-contain" />
              </div>
              <div className="w-7 md:w-10">
                <img src={linkedInI} alt="" className="w-full object-contain" />
              </div>
              <div className="w-7 md:w-10">
                <img src={xIcon} alt="" className="w-full object-contain" />
              </div>
              <div className="w-7 md:w-10">
                <img src={tiktokI} alt="" className="w-full object-contain" />
              </div>
              <div className="w-7 md:w-10">
                <img src={whatsAppI} alt="" className="w-full object-contain" />
              </div>
              <div className="w-7 md:w-10">
                <img
                  src={instagramI}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
