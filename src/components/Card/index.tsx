import Image, { StaticImageData } from "next/image"

type Card = {
    title: string
    img: any
    description?: string
    tag: string
}

type CardProps = {
    data: Card,
    className?: string
}

function Card({ data, className }: CardProps) {
    const { title, img, description, tag } = data

    return (
        <div className="h-[280px] rounded-[20px] bg-dark-charcoal border border-[#221F19] p-6 flex flex-col justify-between w-full">
            <div className="flex justify-between">
                <div className="w-[62px] h-[62px] lg:h-16 lg:w-16 flex justify-center items-center rocket-container group-hover:z-[1] group-hover:bg-brand-gradient bg-blur-brand-linear-gradient rounded-full">
                    <Image alt="" height={32} width={32} src={img} />
                </div>
                <div className="bg-[#3B3632] rounded-full py-1 px-4 max-h-8 text-[#968C7C]">
                    {tag}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="font-semibold text-white text-[20px] leading-7">{title}</span>
                {description && <span className="text-[#968C7C] line-clamp-3">{description}</span>}
            </div>
        </div>
    );
}

export default Card;