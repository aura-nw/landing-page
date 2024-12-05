import GradientButton from "@/components/Button/GradientButton";

function Introduction() {
  return (
    <div className="w-full h-[665px] sm:h-[870px] py-20 justify-end items-end gap-5 inline-flex">
      <div className="grow shrink basis-0 self-stretch justify-end sm:justify-start items-start sm:items-end gap-5 flex flex-col  sm:flex-row">
        <div className="sm:grow shrink basis-0 text-white text-[38px] sm:text-[60px] 2xl:text-[90px] font-semibold font-nacelle 2xl:leading-[99px]">
          The Blockchain for
          <br />
          Enterprise & Entertainment
        </div>
        <div className="w-[330px] 2xl:w-[417px] text-white text-md 2xl:text-xl font-normal font-interTight leading-7">
          Aura Network is building the next generation of blockchain
          infrastructure, powering both enterprise transformation and
          entertainment innovation with enhanced efficiency, transparency, and
          accessibility.
        </div>
      </div>
    </div>
  );
}

export default Introduction;
