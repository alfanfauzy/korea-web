import React from "react";

const Section1 = () => {
    return (
        <>
            <section className="py-16 bg-black w-full p-7 flex flex-col gap-10">
                <h1 className="text-center text-4xl">
                    당장 내일
                    <br /> <b>‘고품질 맞춤 영상’</b>을 받아보세요.
                </h1>
                <div className="flex justify-center">
                    <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-40 h-40">
                        <div className="rounded-full bg-black p-8 flex items-center justify-center h-full w-full">
                            <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold text-2xl">
                                Fast
                            </span>
                        </div>
                        <div className="absolute z-50 -right-2 top-20 bg-black w-5 h-1 " />
                    </div>
                    <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-40 h-40">
                        <div className="rounded-full bg-black p-8 flex items-center justify-center h-full w-full">
                            <span className=" text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold text-2xl">
                                Quality
                            </span>
                        </div>
                        <div className="absolute z-50 -right-2 top-20 bg-black w-5 h-1" />
                    </div>
                    <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-40 h-40">
                        <div className="rounded-full bg-black p-8 flex items-center justify-center h-full w-full">
                            <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold text-2xl">
                                Low Price
                            </span>
                        </div>
                        <div className="absolute z-50 -right-2 top-20 bg-black w-5 h-1" />
                    </div>
                    <div className="relative p-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-40 h-40">
                        <div className="rounded-full bg-black p-8 flex items-center justify-center h-full w-full">
                            <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold text-2xl">
                                High Tech
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center align-middle gap-5">
                    <h2 className="text-3xl text-white">
                        AI VIDEO ON YOUR DEMAND
                    </h2>
                    <h3 className="text-2xl text-white/50 text-center text-pretty">
                        가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내
                        최고의 생성 AI 기술에 영상 전문가의 터치를 더해 비용 및
                        시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
                    </h3>
                    <h3 className="text-2xl text-white/50 text-center text-pretty">
                        가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보,
                        제품 소개, 교육 및 행사, 정보 및 안내 영상 등
                        당신이 필요한 '그 영상'을 플루닛 영상제작소에
                        맡겨주세요.
                    </h3>
                </div>
            </section>

            {/** Blurry horizontal Divider */}
            <hr className="w-64 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        </>
    );
};

export default Section1;
