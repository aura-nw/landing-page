import Image from "next/image";

type Card = {
  img: any,
  title: string,
  description: string,
  index: number
}

type CardProps = {
  data: Card
}

function Card({ data }: CardProps) {
  const { img, description, title, index } = data
  return (
    <div className={`pt-6 pb-8 px-8 xl:px-16 xl:pb-16 flex flex-col gap-8 justify-between rounded-2xl bg-dark-charcoal border border-solid border-blur-grayish-brown max-w-[344px] max-h-[672px] xl:max-h-none xl:max-w-[679px] card lg:sticky lg:top-[120px] lg:z-[${index}]`}>
      <div className='xl:h-[352px] flex justify-center items-center flex-col'>
        <Image className="xl:w-[406px] xl:h-[300px]" src={img} alt="img_feature"></Image>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-white font-ppmori-semibold text-xl font-semibold leading-8">{title}</span>
        <span className="text-medium-gray leading-7">{description}</span>
      </div>
    </div>
  )
}

export default Card;