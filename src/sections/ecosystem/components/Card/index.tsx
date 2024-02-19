import Image from "next/image";
import ic_arrow_up_right from "@/assets/icons/ic_arrow_up_right.svg"
import Link from "next/link";

type Card = {
    img: string,
    name: string,
    title: string,
    description: string,
    link: string
}

type CardProps = {
    data: Card
}

function Card({ data }: CardProps) {
    const { img, title, description, name, link } = data
    return (
        <div className={`ecosystem-card-${name} group relative bg-white hover:bg-black rounded-3xl border border-solid border-[rgba(254,119,108,0.16)] flex flex-col gap-8 lg:gap-0 lg:justify-between items-start p-8 hover:pb-10 max-w-[345px] h-[296px] card lg:p-14 lg:hover:pb-16 lg:max-w-[427px] lg:max-h-[481px] lg:h-[481px]`}>
            <Link id={`product-${name}`} href={link} target="_blank">
                <Image className="lg:w-8 lg:h-8 absolute right-[30px] top-[30px] hidden rotate-45 group-hover:block group-hover:rotate-0 transition delay-100 duration-500" src={ic_arrow_up_right} alt="ic_arrow"></Image>
            </Link>
            <Image className="lg:w-16 lg:h-16" src={img} alt={title}></Image>
            <div className="flex flex-col gap-2 lg:gap-4 lg:min-h-[240px]">
                <span className="text-black text-2xl font-semibold leading-7 font-ppmori-semibold group-hover:text-white">{title}</span>
                <div className="flex flex-1 flex-col justify-between">
                    <span className="text-black text-[18px] font-normal leading-7 lg:text-xl lg:leading-8 group-hover:text-medium-gray">{description}</span>
                    <Link id={`product-${name}`} href={link} target="_blank" className="hidden lg:block bg-brand-linear-gradient bg-clip-text text-transparent text-[18px] font-normal leading-8 w-fit">
                        Experience
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;