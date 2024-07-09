import img_abstract_layer from "@/assets/images/img_abstrac_layer.png";
import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";

function AbstractionLayer() {
    return (
        <div className="bg-[url('../assets/images/bg_section_abstraction.png')] lg:bg-none bg-cover bg-center bg-no-repeat w-screen lg:w-full flex flex-col items-center px-6">
            <Image alt="" src={img_abstract_layer} />
            <div className="flex flex-col gap-10 w-full items-center lg:gap-14">
                <div className="flex flex-col gap-4 items-center">
                    <span className="font-ppmori-semibold text-[28px] leading-9 text-center">Aura as an Abstraction Layer</span>
                    <span className="text-center text-lg text-medium-gray">
                        A decentralized middleware infrastructure accelerates the interoperability of IPs across chains.
                    </span>
                </div>
                <GradientButton  href='/'>Explore our ecosystem</GradientButton>
            </div>
        </div>
    );
}

export default AbstractionLayer;