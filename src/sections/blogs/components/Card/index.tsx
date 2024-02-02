import Image from "next/image";
import Link from "next/link";

export type Post = {
    id: string,
    title: string,
    featureImage: string,
    tag: string,
    url: string
}

type CardProps = {
    post: Post
}

function Card({ post }: CardProps) {
    const { title, featureImage, tag, url } = post
    return (
        <div className="flex flex-col w-[323px] h-[335px] xl:h-[474px] xl:w-[540px] items-start rounded-2xl border border-solid border-[rgba(254,119,108,0.12)] bg-[#181614]">
            <Link href={url} target="_blank">
                <Image className="rounded-t-2xl h-[168px] object-cover xl:h-[303px]" width={539} height={303} src={featureImage} alt='img_blog'></Image>
            </Link>
            <div className="flex flex-col gap-2 p-6 xl:px-10 xl:pt-8 xl:pb-12">
                <span className="bg-brand-linear-gradient bg-clip-text text-transparent font-normal leading-6">{tag}</span>
                <Link href={url} target="_blank" className="text-white font-ppmori-semibold text-[22px] font-semibold leading-8 hover:underline">{title}</Link>
            </div>
        </div>
    );
}

export default Card;