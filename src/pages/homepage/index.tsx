import Image from "next/image";
import React, { useState } from "react";

const Homepage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main
      className={`flex min-h-screen max-h-screen flex-col items-center justify-between bg-black`}
    >
      {/** Navbar */}
      <nav className="relative px-16 py-4 flex justify-between items-center w-full">
        <a className="text-3xl font-bold leading-none" href="#">
          <Image
            src="/assets/icon/logo-navbar.svg"
            alt="Logo Navbar"
            width={100}
            height={24}
            priority
          />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setShowMenu(true)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-10">
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              스튜디오
            </a>
          </li>
          <li>
            <a className="text-sm text-blue-600 font-bold" href="#">
              워크센터
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              손비서
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              메타휴먼
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              영상제작소
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              공지사항
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              제휴문의
            </a>
          </li>
        </ul>
        <ul className="hidden lg:flex flex-row gap-14">
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              로그인
            </a>
          </li>
          <li>
            <a className="text-sm text-blue-600 font-bold" href="#">
              <Image
                src="/assets/icon/globe-icon.svg"
                alt="globe icon"
                width={40}
                height={20}
                priority
              />
            </a>
          </li>
        </ul>
      </nav>
      {showMenu && (
        <div
          className={`navbar-menu relative z-50 transition-transform duration-300 transform`}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pb-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8 px-6 py-6 bg-black">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Image
                  className="dark:invert"
                  src="/assets/icon/logo-navbar.svg"
                  alt="Logo Navbar"
                  width={100}
                  height={24}
                  priority
                />
              </a>
              <button
                className="navbar-close"
                onClick={() => setShowMenu(false)}
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6 px-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
      {/** Hero Section */}
      <Image
        className="object-cover"
        src="/assets/hero.png"
        alt="Hero Section"
        width={1920}
        height={934}
      />

      {/** Section 1 */}
      <section className="py-16 bg-black w-full">
        <p>당장 내일 ‘고품질 맞춤 영상’을 받아보세요.</p>
        <div className="flex">
          <div className="rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] h-20 w-20 p-2">
            <span className="block text-white text-center bg-black h-16 w-16 rounded-full p-1">
              FAST
            </span>
          </div>
        </div>
        <div className="text-white">
          <p>AI VIDEO ON YOUR DEMAND</p>
          <p>
            가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
            기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는
            보장된 영상을 만듭니다.
          </p>
          <p>
            가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품 소개,
            교육 및 행사, 정보 및 안내 영상 등 당신이 필요한 '그 영상'을 플루닛
            영상제작소에 맡겨주세요.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
