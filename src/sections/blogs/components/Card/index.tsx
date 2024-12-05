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
        // <div className="flex flex-col w-[323px] h-[335px] xl:h-[474px] xl:w-[540px] items-start rounded-2xl border border-solid border-[rgba(254,119,108,0.12)] bg-[#181614]">
        //     <Link href={url} target="_blank">
        //         <div className="w-[321px] xl:w-[538px] h-[168px] xl:h-[303px] relative">
        //             <BlurImage fill className="rounded-t-2xl" src={featureImage} alt='img_blog' />
        //         </div>
        //     </Link>
        //     <div className="flex flex-col gap-2 p-6 xl:px-10 xl:pt-8 xl:pb-12">
        //         <span className="text-[rgba(253,149,82,1)] font-normal leading-6">{tag}</span>
        //         <Link href={url} target="_blank" className="text-white font-ppmori-semibold text-[22px] font-semibold leading-8 hover:underline line-clamp-3">{title}</Link>
        //     </div>
        // </div>
        <div className="w-[318px] sm:w-[420px] h-auto sm:h-[358px] flex-col justify-start items-start gap-4 inline-flex">
             <Link href={url} target="_blank" className="rounded-lg overflow-hidden">
                <div className="self-stretch h-[222px] w-[318px] sm:w-[420px] relative">
                    <BlurImage fill src={featureImage} alt='img_blog' />
                </div>
            </Link>
            <div className="flex flex-col gap-2">
                <span className="self-stretch text-[#1c1f2a] text-[21px] font-semibold font-nacelle leading-[23.10px]">{tag}</span>
                <Link href={url} target="_blank" className="self-stretch text-[#64656a] text-sm font-normal font-interTight leading-tight">{title}</Link>
            </div>
        {/* <img className="self-stretch h-[222px] rounded-lg" src="https://via.placeholder.com/420x222" />
        <div className="self-stretch h-[120px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#3189e2] text-xs font-semibold font-['Inter Tight'] leading-none">November 23, 2024</div>
                <div className="self-stretch text-[#1c1f2a] text-[21px] font-semibold nacelle leading-[23.10px]">Article 123</div>
            </div>
            <div className="self-stretch text-[#64656a] text-sm font-normal font-interTight leading-tight">Our new product suite has been developed to accelerate the journey towards production, lower costs and widen market access.</div>
        </div> */}
    </div>
    );
}

export default Card;