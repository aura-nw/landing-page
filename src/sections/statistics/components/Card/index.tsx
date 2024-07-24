type Card = {
    value: string,
    title: string
    img?: any

}

type CardProps = {
    data: Card,
    className?: string
}

function Card({ data, className }: CardProps) {
    const { value, title, img } = data
    return (
        <div className={`h-[272px] lg:h-[352px] max-w-[344px] w-[344px] lg:w-[427px] lg:min-w-[427px] p-8 lg:px-14 lg:pt-20 lg:pb-14 rounded-3xl bg-dark-charcoal flex flex-col gap-6 justify-between hover:pb-[72px] card statistic-card group ${className}`}>
            <div className="h-16 w-16">
                <div className="w-12 h-12 lg:h-16 lg:w-16 flex justify-center items-center rocket-container group-hover:z-[1] group-hover:bg-brand-gradient bg-blur-brand-linear-gradient rounded-full">
                    {img}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-ppmori-semibold text-[40px] lg:text-[48px] font-semibold leading-[48px] lg:leading-[64px]">{value}</span>
                <span className="text-medium-gray text-xl lg:text-2xl font-normal leading-6 lg:leading-8">{title}</span>
            </div>
        </div>
    );
}

export default Card;