import img_gradientLogo from "@/assets/images/img_gradientLogo.svg";
import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";

function Tutorials() {
    return (
        <div style={{backgroundPositionY: '150px'}} className="lg:bg-[url('../assets/images/img_bg_sun.svg')] bg-cover bg-no-repeat w-screen lg:h-[600px] xl:h-[850px] flex justify-center">
            <div className="flex flex-col justify-start items-center relative h-[472px] xl:mt-10 xl:w-[548px]">
                <Image className="xl:w-[480px]" src={img_gradientLogo} alt="img_gradientLogo" />
                <div className="flex flex-col gap-8 xl:gap-14 items-center w-[284px] absolute top-[242px] xl:w-full xl:top-[336px]">
                    <span className="text-white text-center font-ppmori-semibold text-[40px] font-semibold leading-[48px] xl:text-[72px] xl:leading-[80px]">
                        Build Your DApp With Aura
                    </span>
                    <GradientButton className="shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)_inset,0px_-2px_0px_0px_rgba(0,0,0,0.04)_inset]">
                        See developer tutorials
                    </GradientButton>
                </div>
            </div>
        </div>

    );
}

export default Tutorials;