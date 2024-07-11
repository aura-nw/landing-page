import Link from "next/link";
import BlurImage from "../../../../components/Image/BlurImage";

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
                <div className="w-[321px] xl:w-[538px] h-[168px] xl:h-[303px] relative">
                    <BlurImage fill className="rounded-t-2xl" src={featureImage} alt='img_blog' />
                </div>
            </Link>
            <div className="flex flex-col gap-2 p-6 xl:px-10 xl:pt-8 xl:pb-12">
                <span className="text-[rgba(253,149,82,1)] font-normal leading-6">{tag}</span>
                <Link href={url} target="_blank" className="text-white font-ppmori-semibold text-[22px] font-semibold leading-8 hover:underline line-clamp-3">{title}</Link>
            </div>
        </div>
    );
}

export default Card;