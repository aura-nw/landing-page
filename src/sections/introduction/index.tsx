import GradientButton from "@/components/Button/GradientButton";
import Image from "next/image";
import ic_background from "@/assets/images/img_bg_desktop_2.png";

function Introduction() {
  return (
    <div className="w-full m-auto h-[calc(90vh)] sm:h-[calc(100vh_-_168px)] bg-blue relative">
      <div className="absolute w-full h-full inset-0 bg-[#2671cf]"></div>
      <Image className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light" src={ic_background} alt="bg" />
      {/* <video
        src={"/videos/web.mp4"} // Đường dẫn tới video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-9"
      ></video> */}
      <div className="relative z-10 mx-5 md:mx-20">
        <div className="w-full h-[calc(90vh)] sm:h-[calc(100vh_-_168px)] py-20 justify-end items-end gap-5 inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-end sm:justify-start items-start sm:items-end gap-5 flex flex-col  sm:flex-row">
            <div className="sm:grow shrink basis-0 text-white text-[38px] sm:text-[60px] 2xl:text-[90px] font-semibold font-nacelle 2xl:leading-[99px]">
              The RWA Chain for Enterprise,
              <br />
              Entertainment & Government
            </div>
            <div className="w-[330px] 2xl:w-[417px] text-white text-xl font-normal font-interTight leading-7">
              Aura Network is the dedicated RWA chain designed for the next generation of enterprise, entertainment, and government innovation, delivering enhanced efficiency, transparency, and
              accessibility.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
