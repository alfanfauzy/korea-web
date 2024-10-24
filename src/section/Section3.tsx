import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="-mt-[1px] bg-black flex flex-col gap-10 text-center w-full px-10">
      <div className="relative w-fit mx-auto mt-16">
        <div className="-top-1 -left-4 absolute bg-gradient-border rounded-full h-3 w-3" />
        <h1 className="text-white uppercase desktop:text-4xl text-3xl font-bold">
          Making Process
        </h1>
      </div>
      <div className="flex desktop:flex-row flex-col gap-10">
        <div className="desktop:border desktop:border-stone-500 desktop:rounded-3xl desktop:py-20 desktop:px-10 desktop:bg-white/10 basis-1/2">
          <div className="flex gap-3 flex-col mb-10">
            <h2 className="text-white text-3xl desktop:text-4xl">일반 제작</h2>
            <h4 className=" text-2xl text-white/50">
              제작 시작 후 5영업일 이내
            </h4>
          </div>
          <div className="w-full flex flex-col gap-4 ">
            <div className="relative desktop:rounded-full desktop:px-14 rounded-2xl text-white p-6 border border-white/15 desktop:bg-black bg-white/10 w-full mx-auto">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col items-start">
                  <h2 className="desktop:text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] uppercase text-lg">
                    Step1
                  </h2>
                  <h3 className="desktop:text-base text-xl font-bold">
                    사전 논의
                  </h3>
                </div>
                <p className="desktop:text-base font-extralight text-2xl text-white/50 text-left basis-3/4">
                  영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및
                  내용 협의
                </p>
              </div>
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-12 border-r-12 border-t-10 border-transparent border-t-[#444444] z-40"></div>
            </div>
            <div className="relative desktop:rounded-full desktop:px-14 rounded-2xl text-white p-6 border border-white/15 desktop:bg-black bg-white/10 w-full mx-auto">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col items-start">
                  <h2 className="desktop:text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] uppercase text-lg">
                    Step2
                  </h2>
                  <h3 className="desktop:text-base text-xl font-bold">
                    영상 기획
                  </h3>
                </div>
                <p className="desktop:text-base font-extralight text-2xl text-white/50 text-left basis-3/4">
                  스토리보드 전달&수정을 통한 기획안 확정, 가상인간 발화용
                  스크립트 작성과 프롬프팅
                </p>
              </div>
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-12 border-r-12 border-t-10 border-transparent border-t-[#444444] z-40"></div>
            </div>
            <div className="relative desktop:rounded-full desktop:px-14 rounded-2xl text-white p-6 border border-white/15 desktop:bg-black bg-white/10 w-full mx-auto">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col items-start">
                  <h2 className="desktop:text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] uppercase text-lg">
                    Step3
                  </h2>
                  <h3 className="desktop:text-base text-xl font-bold">
                    영상 생성
                  </h3>
                </div>
                <p className="desktop:text-base font-extralight text-2xl text-white/50 text-left basis-3/4">
                  작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등
                  필요 요소 생성
                </p>
              </div>
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-12 border-r-12 border-t-10 border-transparent border-t-[#444444] z-40"></div>
            </div>
            <div className="relative desktop:rounded-full desktop:px-14 rounded-2xl text-white p-6 border border-white/15 desktop:bg-black bg-white/10 w-full mx-auto">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col items-start">
                  <h2 className="desktop:text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] uppercase text-lg">
                    Step4
                  </h2>
                  <h3 className="desktop:text-base text-xl font-bold">
                    영상 편집
                  </h3>
                </div>
                <p className="desktop:text-base font-extralight text-2xl text-white/50 text-left basis-3/4">
                  영상 전문가의 편집, 디자인, 후반 작업 단계. 필요시 실사 촬영
                  병행하여 편집본 완성
                </p>
              </div>
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-12 border-r-12 border-t-10 border-transparent border-t-[#444444] z-40"></div>
            </div>
            <div className="relative desktop:rounded-full desktop:px-14 rounded-2xl text-white p-6 border border-white/15 desktop:bg-black bg-white/10 w-full mx-auto">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col items-start">
                  <h2 className="desktop:text-base text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] uppercase text-lg">
                    Step5
                  </h2>
                  <h3 className="desktop:text-base text-xl font-bold">
                    최종 납품
                  </h3>
                </div>
                <p className="desktop:text-base font-extralight text-2xl text-white/50 text-left basis-3/4">
                  고객 피드백 반영하여 최종본 완성 및 납품 * 영상 수정 무료 1회
                  제공
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-1 desktop:rounded-3xl desktop:bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] basis-1/2">
          <div className="rounded-3xl bg-black flex flex-col items-center desktop:px-10 h-full desktop:py-20 ">
            <div className="mb-10">
              <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] font-bold text-4xl">
                Ploonet Quickserve™
              </h1>
              <h2 className="text-2xl desktop:text-white text-white/50">
                제작 시작 후 12~48시간 이내
              </h2>
            </div>
            <div className="relative p-1 rounded-4xl mobile:bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-full">
              <div className=" bg-black flex flex-col rounded-4xl  items-center justify-center h-full w-full">
                <div className="w-full p-5 flex flex-row gap-10">
                  <div className="relative rounded-3xl bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-28 h-28 flex flex-col items-center gap-1 p-3">
                    <h2 className="text-white font-light text-sm">STEP1</h2>
                    <Image
                      src="/assets/icon/edit-icon.svg"
                      alt="Icon Edit"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="text-left pt-4 basis-3/4">
                    <h2 className="text-2xl text-white">제작 안내</h2>
                    <h3 className="text-xl text-white/50 border-b-2 border-b-white/15 font-light pb-10">
                      영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내
                    </h3>
                  </div>
                </div>
                <div className="w-full p-5 flex flex-row gap-10">
                  <div className="relative rounded-3xl bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-28 h-28 flex flex-col items-center gap-1 p-3">
                    <h2 className="text-white font-light text-sm">STEP2</h2>
                    <Image
                      src="/assets/icon/edit-icon.svg"
                      alt="Icon Edit"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="text-left pt-4 basis-3/4">
                    <h2 className="text-2xl text-white">영상 생성</h2>
                    <h3 className="text-xl text-white/50 border-b-2 border-b-white/15 font-light pb-10">
                      스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경
                      음악 등 필요 요소 생성
                    </h3>
                  </div>
                </div>
                <div className="w-full p-5 flex flex-row gap-10">
                  <div className="relative rounded-3xl bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-28 h-28 flex flex-col items-center gap-1 p-3">
                    <h2 className="text-white font-light text-sm">STEP3</h2>
                    <Image
                      src="/assets/icon/player-icon.svg"
                      alt="Player Edit"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-left pt-4 basis-3/4">
                    <h2 className="text-2xl text-white">편집 및 납품</h2>
                    <h3 className="text-xl text-white/50 font-light pb-10">
                      편집 진행, 12~48시간 내 최종본 완성 및 납품
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex desktop:gap-1 gap-5 flex-col py-5">
        <h5 className="desktop:text-sm text-lg text-white/50">
            * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽
          등전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </h5>
        <h5 className="desktop:text-sm text-lg text-white/50">
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </h5>
      </div>
    </section>
  );
};

export default Section3;
