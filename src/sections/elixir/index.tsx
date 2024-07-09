import Image from "next/image";
import img_elixir from "@/assets/images/img_elixir.png"

function Elixir() {
    return (
        <div className="flex flex-col gap-[34px] w-full items-center lg:pt-10 lg:pb-[20px]">
            <div className="flex flex-col gap-4 lg:gap-6 items-center  lg:max-w-[652px]">
                <span className="font-ppmori-semibold text-[32px] lg:text-[48px] text-center font-semibold leading-[40px] lg:leading-[56px]">IP as the Elixir of Web3</span>
                <span className="text-medium-gray text-lg leading-[26px] text-center lg:text-[22px] lg:leading-8">
                    Unlock endless possibilities for NFT and IP innovation in Web3. As a subset of Real-World Assets (RWA), IP is a powerful narrative gaining traction, representing the next trillion-dollar asset class ripe for tokenization.
                </span>
            </div>
            <div className="lg:w-screen">
                <Image className="w-full" alt="img_elixir" src={img_elixir} />
            </div>
        </div>
    );
}

export default Elixir;