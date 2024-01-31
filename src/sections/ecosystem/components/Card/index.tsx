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
        <div className="bg-white rounded-3xl border border-solid border-[rgba(254,119,108,0.16)] flex flex-col gap-8 xl:gap-0 xl:justify-between items-start p-8 max-w-[345px] h-[296px] card xl:p-14 xl:max-w-[427px] xl:max-h-[481px] xl:h-[481px]">
            <Image className="xl:w-16 xl:h-16" src={img} alt={title}></Image>
            <div className="flex flex-col gap-2 xl:gap-4 xl:min-h-[240px]">
                <span className="text-black text-2xl font-semibold leading-7 font-ppmori-semibold">{title}</span>
                <div className="flex flex-1 flex-col justify-between">
                    <span className="text-black text-[18px] font-normal leading-7 xl:text-xl xl:leading-8">{description}</span>
                    <span className="bg-brand-linear-gradient bg-clip-text text-transparent text-[18px] font-normal leading-8">Experience</span>
                </div>
            </div>
        </div>
    );
}

export default Card;