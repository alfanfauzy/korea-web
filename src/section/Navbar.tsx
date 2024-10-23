import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
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
                <div className="desktop:hidden">
                    <button
                        className="navbar-burger flex items-center text-white p-3"
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
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 desktop:mx-auto desktop:flex desktop:flex-row desktop:items-center desktop:w-auto desktop:gap-10">
                    <li>
                        <a
                            className="text-xs  text-white opacity-50 hover:text-gray-500"
                            href="#"
                        >
                            스튜디오
                        </a>
                    </li>
                    <li>
                        <a className="text-xs  text-white opacity-50" href="#">
                            워크센터
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-xs  text-white opacity-50 hover:text-gray-500"
                            href="#"
                        >
                            손비서
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-xs  text-white opacity-50 hover:text-gray-500"
                            href="#"
                        >
                            메타휴먼
                        </a>
                    </li>
                    <li className="relative">
                        <a
                            className="text-xs  text-white  hover:text-gray-500  font-bold"
                            href="#"
                        >
                            영상제작소
                        </a>
                        <div className="absolute -bottom-2 left-5 bg-gradient-border rounded-full h-1.5 w-1.5" />
                    </li>
                    <li>
                        <a
                            className="text-xs  text-white opacity-50 hover:text-gray-500"
                            href="#"
                        >
                            공지사항
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-xs  text-white opacity-50 hover:text-gray-500"
                            href="#"
                        >
                            제휴문의
                        </a>
                    </li>
                </ul>
                <ul className="hidden desktop:flex flex-row gap-10">
                    <li>
                        <a
                            className="text-xs  text-white opacity-50 hover:text-gray-500"
                            href="#"
                        >
                            로그인
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-xs  text-blue-600 font-bold"
                            href="#"
                        >
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
                <div className={`navbar-menu relative z-999`}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pb-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8 px-6 py-6 bg-black">
                            <a
                                className="mr-auto text-3xl font-bold leading-none"
                                href="#"
                            >
                                <Image
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
                                    className="h-6 w-6 text-white opacity-50 cursor-pointer hover:text-gray-500"
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
                        <div className="flex flex-col gap-10">
                            <ul className="mx-auto flex flex-col text-center w-full gap-10">
                                <li className="">
                                    <a
                                        className="text-xl text-black opacity-50 hover:text-gray-500"
                                        href="#"
                                    >
                                        스튜디오
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className="text-xl text-black opacity-50"
                                        href="#"
                                    >
                                        워크센터
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className="text-xl text-black opacity-50 hover:text-gray-500"
                                        href="#"
                                    >
                                        손비서
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className="text-xl text-black opacity-50 hover:text-gray-500"
                                        href="#"
                                    >
                                        메타휴먼
                                    </a>
                                </li>
                                <li className=" ">
                                    <a
                                        className="relative text-xl text-black  hover:text-gray-500  font-bold"
                                        href="#"
                                    >
                                        영상제작소
                                        <div className="absolute top-0 -right-2 bg-gradient-border rounded-full h-2 w-2" />
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className="text-xl text-black opacity-50 hover:text-gray-500"
                                        href="#"
                                    >
                                        공지사항
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-xl text-black opacity-50 hover:text-gray-500"
                                        href="#"
                                    >
                                        제휴문의
                                    </a>
                                </li>
                            </ul>
                            {/** Blurry horizontal Divider */}
                            <hr className="w-64 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                            <ul className="flex items-center flex-col gap-10">
                                <li>
                                    <a
                                        className="text-xl text-black opacity-50 hover:text-gray-500"
                                        href="#"
                                    >
                                        로그인
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-xl text-blue-600 font-bold"
                                        href="#"
                                    >
                                        <Image
                                            src="/assets/icon/globe-icon.svg"
                                            alt="globe icon"
                                            width={40}
                                            height={20}
                                            priority
                                            className="fill-black"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
