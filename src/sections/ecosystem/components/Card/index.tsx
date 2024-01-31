import Image from "next/image";

type Card = {
    img: string,
    title: string,
    description: string
}

type CardProps = {
    data: Card
}

function Card({ data }: CardProps) {
    const { img, title, description } = data
    return (
        <div className="bg-white rounded-3xl border border-solid border-[rgba(254,119,108,0.16)] flex flex-col gap-8 items-start p-8 max-w-[345px] h-[296px] card">
            <Image src={img} alt={title}></Image>
            <div className="flex flex-col gap-2">
                <span className="text-black text-2xl font-semibold leading-7 font-ppmori-semibold">{title}</span>
                <span className="text-black text-[18px] font-normal leading-7">{description}</span>
            </div>
        </div>
    );
}

export default Card;