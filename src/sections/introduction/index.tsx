import GradientButton from "@/components/Button/GradientButton";

function Introduction() {
  return (
    <div className="max-w-[867px] flex flex-col gap-8 lg:gap-12 px-2">
      <div className="flex flex-col items-center gap-10 lg:gap-6">
        <div className="flex flex-col gap-4 lg:gap-6 items-center lg:w-[1102px]">
          <h1 className="text-white self-stretch text-start lg:text-center text-[48px] lg:text-[72px] font-semibold leading-[52px] lg:leading-[86px] font-ppmori-semibold">
            The First Abstraction Layer for Intellectual Properties
          </h1>
          <h3 className="text-medium-gray text-start lg:text-center text-xl lg:text-[22px] font-normal leading-8">
            Enabling on-chain transactions for creating, registering, and managing IP across multiple chains.
          </h3>
        </div>
      </div>
      <div className="flex lg:justify-center">
        <GradientButton href="/introduction">Learn more</GradientButton>
      </div>
    </div>
  );
}

export default Introduction;