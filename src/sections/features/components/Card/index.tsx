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
  const { img, description, title } = data
  return (
    <div className="pt-6 pb-8 px-8 xl:px-16 xl:pb-16 flex flex-col gap-8 justify-between rounded-2xl bg-dark-charcoal border border-solid border-blur-grayish-brown max-w-[344px] max-h-[484px] xl:max-h-[636px] xl:max-w-[679px] lg:w-[679px] card">
      <div className="h-[184px] xl:h-[352px] flex justify-center items-center">
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