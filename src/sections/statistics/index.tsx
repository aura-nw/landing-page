import Card from "./components/Card";

const statisticData = [{
    value: "1.5M+",
    title: "Transactions"
},
{
    value: "10,000+",
    title: "Deployed smart contract"
},
{
    value: "41,000+",
    title: "Unique active addresses"
}]
function Statistics() {
    return (
        <div className="flex flex-col gap-6 w-full items-center lg:gap-14">
            <div className="flex flex-col gap-4 items-center">
                <span className="text-light-yellow text-base lg:text-xl font-normal">Aura in numbers</span>
                <span className="font-ppmori-semibold self-stretch text-[28px] lg:text-[48px] text-center font-semibold leading-9 lg:leading-[56px] max-w-[659px] min-w-[313px]">The most thriving blockchain in emerging countries</span>
            </div>
            <div className="flex flex-col gap-3 xl:flex-row xl:gap-6 w-full items-center justify-center">
                {statisticData.map((item, i) => (
                    <Card key={i} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Statistics;