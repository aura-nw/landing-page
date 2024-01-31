import img_gradientLogo from "@/assets/images/img_gradientLogo.svg";
import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";

function Tutorials() {
    return (
        <div className="lg:bg-[url('../assets/images/img_sunset.png')] bg-center bg-cover bg-no-repeat w-full lg:h-[600px] xl:h-[850px] min-[2560px]:h-[990px] flex justify-center">
            <div className="flex flex-col justify-start items-center relative h-[472px] xl:w-[548px]">
                <Image className="xl:w-[480px]" src={img_gradientLogo} alt="img_gradientLogo" />
                <div className="flex flex-col gap-8 xl:gap-14 items-center w-[284px] absolute top-[242px] xl:w-full xl:top-[336px]">
                    <span className="text-white text-center font-ppmori-semibold text-[40px] font-semibold leading-[48px] xl:text-[72px] xl:leading-[80px]">
                        Build Your DApp With Aura
                    </span>
                    <GradientButton>
                        See developer tutorials
                    </GradientButton>
                </div>
            </div>
        </div>

    );
}

export default Tutorials;