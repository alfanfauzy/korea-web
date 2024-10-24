import React from "react";

const Section1 = () => {
    return (
        <section className="-mt-[1px] py-16 px-5 bg-black w-full flex flex-col gap-16 items-center">
            <h3 className="desktop:block hidden text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold text-2xl">
                영상 제작소
            </h3>
            <h1 className="text-white text-center desktop:text-3xl text-4xl">
                당장 내일
                <br className="desktop:hidden " /> <b>‘고품질 맞춤 영상’</b>을
                받아보세요.
            </h1>
            <div className="flex justify-center">
                <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]  desktop:w-40 desktop:h-40 w-28 h-28">
                    <div className="rounded-full bg-black p-8 flex flex-col items-center justify-center h-full w-full">
                        <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold desktop:text-2xl text-lg">
                            Fast
                        </span>
                        <span className="desktop:block hidden font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase text-lg">
                            X2
                        </span>
                    </div>
                    <div className="absolute z-50 -right-2 desktop:top-20 top-14 bg-black w-5 h-1" />
                </div>
                <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] desktop:w-40 desktop:h-40 w-28 h-28">
                    <div className="rounded-full bg-black p-8 flex flex-col items-center justify-center h-full w-full">
                        <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold desktop:text-2xl text-lg">
                            Quality
                        </span>
                        <span className="desktop:block hidden font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase text-lg">
                            A++
                        </span>
                    </div>
                    <div className="absolute z-50 -right-2 desktop:top-20 top-14 bg-black w-5 h-1" />
                </div>
                <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] desktop:w-40 desktop:h-40 w-28 h-28">
                    <div className="rounded-full bg-black p-8 flex flex-col items-center justify-center h-full w-full">
                        <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold desktop:text-2xl text-lg">
                            Low Price
                        </span>
                        <span className="desktop:block hidden font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase text-lg">
                            1/2
                        </span>
                    </div>
                    <div className="absolute z-50 -right-2 desktop:top-20 top-14 bg-black w-5 h-1" />
                </div>
                <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] desktop:w-40 desktop:h-40 w-28 h-28">
                    <div className="rounded-full bg-black p-8 flex flex-col items-center justify-center h-full w-full">
                        <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold desktop:text-2xl text-lg">
                            High Tech
                        </span>
                        <span className="desktop:block hidden font-light text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase text-lg">
                            Gen AI
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center align-middle gap-10 max-w-xl desktop:max-w-3xl">
                <h2 className="text-3xl text-white font-bold">
                    AI VIDEO ON YOUR DEMAND
                </h2>
                <h3 className="desktop:text-lg  text-2xl text-white/50 text-center text-pretty">
                    가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의
                    생성 AI 기술에 영상 전문가의 터치를 더해 비용 및 시간은
                    절감하고 퀄리티는 보장된 영상을 만듭니다.
                </h3>
                <h3 className="desktop:text-lg  text-2xl text-white/50 text-center text-pretty">
                    가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품
                    소개, 교육 및 행사, 정보 및 안내 영상 등 당신이 필요한
                    &apos;그 영상&apos;을 플루닛 영상제작소에 맡겨주세요.
                </h3>
            </div>
            {/** Blurry horizontal Divider */}
            <hr className="desktop:w-5/12 w-9/12 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50" />
        </section>
    );
};

export default Section1;
