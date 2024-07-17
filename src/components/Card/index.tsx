import Image from "next/image"
import Link from "next/link"
import arrow_up_right from "@/assets/images/arrow-up-right.png";
import Marquee from "react-fast-marquee";

type Card = {
    title: string
    img: any
    description?: string
    tag: string
    link: string
    listImgs?: any
    isBigger?: boolean
}

type CardProps = {
    data: Card,
    className?: string
}

function Card({ data }: CardProps) {
    const { title, img, description, tag, link, listImgs } = data

    return (
        <div className="h-[280px] rounded-[20px] bg-dark-charcoal border border-[#221F19] p-6 flex flex-col justify-between w-full hover:bg-[#2A231A] group">
            <div className="flex justify-between">
                <div className="w-[62px] h-[62px] lg:h-16 lg:w-16 flex justify-center items-center bg-blur-brand-linear-gradient rounded-full">
                    <Image alt="" height={32} width={32} src={img} />
                </div>
                <div className="bg-light-charcoal rounded-full py-1 px-4 max-h-8 text-[#968C7C]">
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
                {listImgs &&
                    <Marquee className="mt-2">
                        <div className="flex h-fit relative">
                            {listImgs.map((e: any, i: number) => (
                                <div
                                    key={i}
                                    className="relative w-14 h-14 border-[3px] border-light-charcoal rounded-full"
                                    style={{ left: `-${i * 15}px`, zIndex: listImgs.length - i }}
                                >
                                    <Image className="rounded-full" alt="" height={56} width={56} src={e} />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                }
            </div>
        </div>
    );
}

export default Card;