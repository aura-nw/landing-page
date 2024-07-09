import img_abstract_layer from "@/assets/images/img_abstrac_layer.png";
import img_abstrac_pc from "@/assets/images/img_abstrac_pc.png";

import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";

function AbstractionLayer() {
    return (
        <div className="bg-[url('../assets/images/bg_section_abstraction.png')] lg:h-[800px] lg:bg-[url('../assets/images/bg_abstract.png')] bg-cover bg-center bg-no-repeat w-screen lg:w-full flex flex-col items-center px-6 lg:flex-row lg:gap-[91px]">
            <Image className="lg:hidden" alt="" src={img_abstract_layer} />
            <Image className="lg:block hidden" alt="" src={img_abstrac_pc} />
            <div className="flex flex-col gap-10 w-full items-center lg:gap-14 lg:items-start">
                <div className="flex flex-col gap-4 items-center lg:items-start">
                    <span className="font-ppmori-semibold text-[28px] leading-9 text-center lg:text-start">Aura as an Abstraction Layer</span>
                    <span className="text-center text-lg text-medium-gray lg:text-start">
                        A decentralized middleware infrastructure accelerates the interoperability of IPs across chains.
                    </span>
                </div>
                <GradientButton href='/'>Explore our ecosystem</GradientButton>
            </div>
        </div>
    );
}

export default AbstractionLayer;