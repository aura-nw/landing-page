import Image from "next/image"
import Link from "next/link"
import arrow_up_right from "@/assets/images/arrow-up-right.png";

type Card = {
    title: string
    img: any
    description?: string
    tag: string
    link: string
}

type CardProps = {
    data: Card,
    className?: string
}

function Card({ data }: CardProps) {
    const { title, img, description, tag, link } = data

    return (
        <div className="h-[280px] rounded-[20px] bg-dark-charcoal border border-[#221F19] p-6 flex flex-col justify-between w-full hover:bg-[#2A231A] group">
            <div className="flex justify-between">
                <div className="w-[62px] h-[62px] lg:h-16 lg:w-16 flex justify-center items-center bg-blur-brand-linear-gradient rounded-full">
                    <Image alt="" height={32} width={32} src={img} />
                </div>
                <div className="bg-[#3B3632] rounded-full py-1 px-4 max-h-8 text-[#968C7C]">
                    {tag}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <Link href={link} target="_blank" className="font-semibold text-white text-[20px] leading-7">{title}</Link>
                    <Link className="hidden group-hover:block" href={link} target="_blank">
                        <Image alt="" height={24} width={24} src={arrow_up_right} />
                    </Link>
                </div>
                {description && <span className="text-[#968C7C] line-clamp-3">{description}</span>}
            </div>
        </div>
    );
}

export default Card;