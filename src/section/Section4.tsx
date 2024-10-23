import Image from "next/image";
import React from "react";

const Section4 = () => {
    return (
        <section className="mt-10 p-10 flex flex-col items-center gap-10 text-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] uppercase font-bold text-2xl">
                영상 제작 문의
            </h1>
            <div>
                <h3 className="text-3xl">영상 제작이 필요하다면,</h3>
                <h3 className="text-3xl font-light text-white/80">
                    지금 문의 주세요.
                </h3>
            </div>
            <h5 className="text-white/50 text-xl text-center">
                여러분이 필요한 영상을 빠르게 제작하기 위해 <br />
                플루닛 영상제작소가 즉시 연락 드리겠습니다.
            </h5>
            <div className="tex-ce">
                <h3 className="text-white/50 text-xl">E-MAIL</h3>
                <h3 className="text-white/80 text-xl font-light">
                    henry.lim@saltlux.com
                </h3>
            </div>
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-5">
                    <div className="relative rounded-md text-white p-6 border border-white/15 bg-white/10 w-full mx-auto">
                        <div className="flex flex-row gap-5 justify-between">
                            <span className="text-white/50 text-xl">
                                영상 유형 선택
                            </span>
                            <Image
                                src="/assets/icon/arrow-icon.svg"
                                alt="Arrow Icon"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className="rounded-md text-white p-6 border border-white/15 bg-white/10 w-full text-left ">
                        <span className="text-white/50 text-xl">
                            연락 받으실 담당자 성함
                        </span>
                    </div>
                    <div className=" rounded-md text-white p-6 border border-white/15 bg-white/10 w-full text-left">
                        <span className="text-white/50 text-xl">이메일</span>
                    </div>
                    <div className=" rounded-md text-white p-6 border border-white/15 bg-white/10 w-full text-left">
                        <span className="text-white/50 text-xl">
                            휴대폰 번호
                        </span>
                    </div>
                    <div className=" rounded-md text-white p-6 border border-white/15 bg-white/10 w-full text-left h-50">
                        <div className="flex flex-col gap-5 text-white/50 text-xl font-light">
                            <p className="font-bold">의뢰하실 영상내용</p>
                            <p>
                                아래 예시를 참고하셔서 <br />이 중 편하신 내용을
                                기재해주세요.
                            </p>
                            <p>
                                고객님의 비즈니스 유형 :<br />
                                관공서/일반기업/소상공인 등
                            </p>
                            <p>
                                내용 : <br />
                                제작하시고자 하는 영상의 내용
                            </p>
                        </div>
                    </div>
                    <div className="relative rounded-md text-white p-6 border border-white/15 bg-white/10 w-full text-left">
                        <span className="text-white/50 text-xl">참고 영상</span>
                    </div>
                </div>
                <div className="text-custom-red text-xl text-left flex gap-2">
                    <span>*</span>
                    <span>
                        참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크
                        주소를 적어주시면 더 정확히 안내해드리겠습니다.
                    </span>
                </div>
                <div className="flex desktop:flex-row desktop:justify-between flex-col gap-16 mb-5">
                    <div className="flex flex-row gap-3 items-center">
                        <Image
                            src="/assets/icon/checkbox-icon.svg"
                            alt="Checkbox Icon"
                            width={30}
                            height={30}
                        />
                        <span className="text-white/40 text-xl font-light">
                            <u>개인정보처리방침</u>에 동의합니다.
                        </span>
                    </div>
                    <div className="bg-custom-red tex-white p-5 rounded-md text-center text-2xl font-bold cursor-pointer">
                        문의 보내기
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
