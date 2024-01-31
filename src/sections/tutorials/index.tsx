import img_gradientLogo from "@/assets/images/img_gradientLogo.svg";
import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";

function Tutorials() {
    return (
        <div className="flex flex-col justify-start items-center relative h-[472px]">
            <Image src={img_gradientLogo} alt="img_gradientLogo" />
            <div className="flex flex-col gap-8 items-center w-[284px] absolute top-[242px]">
                <span className="text-white text-center font-ppmori-semibold text-[40px] font-semibold leading-[48px]">
                    Build Your<br />DApp<br />With Aura
                </span>
                <GradientButton className="shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)_inset,0px_-2px_0px_0px_rgba(0,0,0,0.04)_inset]">
                   See developer tutorials
                </GradientButton>
            </div>
        </div>
    );
}

export default Tutorials;