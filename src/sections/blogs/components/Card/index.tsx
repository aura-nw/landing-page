import Image, { StaticImageData } from "next/image";

type Card = {
    key : string
    img: StaticImageData,
    title: string,
    description: string,
}

type CardProps = {
    data: Card
}

function Card({ data }: CardProps) {
    const { img, title, description, key } = data
    return (
        <div className="flex flex-col w-[323px] min-h-[335px] xl:min-h-[474px] xl:w-[540px] items-start rounded-2xl border border-solid border-[rgba(254,119,108,0.12)] bg-[#181614]">
            <Image className="rounded-t-2xl h-[167px] object-cover xl:h-[298px]" src={img} alt={key}></Image>
            <div className="flex flex-col gap-2 p-6 xl:px-10 xl:pt-8 xl:pb-12">
                <span className="bg-brand-linear-gradient bg-clip-text text-transparent font-normal leading-6">{title}</span>
                <span className="text-white font-ppmori-semibold text-[22px] font-semibold leading-8">{description}</span>
            </div>
        </div>
    );
}

export default Card;