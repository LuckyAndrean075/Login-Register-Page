import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";
import Bg from "../../public/bg1.jpg";

export default function SignUp() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-[url('../public/bg1.jpg')]">
      <div className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center ">
        <div className="bg-white md:rounded-2xl shadow-2xl flex flex-col md:flex-row lg:w-5/6 md:max-w-4xl">
          {/* Kiri */}

          <div className="md:w-2/5 bg-[url('../public/bg1.jpg')] text-white md:rounded-tl-2xl md:rounded-bl-2xl ">
            <div className="text-left font-bold p-5 text-lg">
              <span className="text-green-600">Travel</span>Addict
            </div>
            <div className="py-24 px-12">
              <h2 className="text-3xl font-bold mb-2">Wellcome Back!</h2>
              {/* <div className="border-2 w-10 border-white inline-block mb-2"></div> */}
              <p className="mb-10">
                Sudah mempunyai akun, Sign In untuk lanjut menjelajah!
              </p>
              <Link
                href="/"
                className="border-2 border-white rounded-3xl px-10 py-2 inline-block font-semibold hover:bg-white hover:text-green-600"
              >
                Sign In
              </Link>
            </div>
          </div>
          {/* Kanan */}
          <div className="md:w-3/5 p-5">
            <div className="py-8">
              <h2 className="text-3xl font-bold text-green-600">
                Create Account
              </h2>
              <div className="border-2 w-14 border-green-600 inline-block mb-2"></div>
              {/* icons */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-green-600 border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>

                <a
                  href="#"
                  className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-green-600 border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>

                <a
                  href="#"
                  className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-green-600 border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>

              <p className="text-gray-400 font-semibold mb-3">
                or use your email account
              </p>

              <div className="flex flex-col items-center">
                <div className="flex items-center bg-gray-100 w-72 p-2 mb-3">
                  <GoPerson className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="flex items-center bg-gray-100 w-72 p-2 mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="flex items-center bg-gray-100 w-72 p-2 mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="flex items-center bg-gray-100 w-72 p-2 mb-5">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="validatePassword"
                    placeholder="validate password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div>
                  <Link
                    href="#"
                    className="border-2 bg-green-600 text-white rounded-3xl px-10 py-2 inline-block font-semibold hover:border-green-600 hover:text-green-600 hover:bg-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
