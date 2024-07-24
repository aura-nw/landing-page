import img_abstract_layer from "@/assets/images/img_abstrac_layer.png";
import img_abstrac_pc from "@/assets/images/img_abstrac_pc.png";

import Image from "next/image";
import GradientButton from "../../components/Button/GradientButton";
import { PAGE_ROUTE } from "../../common";

function AbstractionLayer() {
    return (
        <div className="bg-[url('../assets/images/bg_section_abstraction.png')] w-[calc(100vw_-_6px)] xl:h-[800px] xl:bg-[url('../assets/images/bg_abstract.png')] bg-cover bg-center xl:bg-bottom xl:px-[150px] bg-no-repeat flex flex-col items-center px-6 xl:flex-row xl:gap-[91px]">
            <Image className="xl:hidden" alt="" src={img_abstract_layer} />
            <Image className="xl:block hidden" alt="" src={img_abstrac_pc} />
            <div className="flex flex-col gap-10 w-full items-center xl:gap-14 xl:items-start">
                <div className="flex flex-col gap-4 items-center xl:items-start">
                    <span className="font-ppmori-semibold text-[28px] leading-9 text-center xl:text-start">Aura as an Abstraction Layer</span>
                    <span className="text-center text-lg text-medium-gray xl:text-start">
                        A decentralized middleware infrastructure accelerates the interoperability of IPs across chains.
                    </span>
                </div>
                <GradientButton href={PAGE_ROUTE.ECOSYSTEM}>Explore our ecosystem</GradientButton>
            </div>
        </div>
    );
}

export default AbstractionLayer;