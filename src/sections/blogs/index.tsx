import BlogsSlider from "./components/Slider";

function Blogs() {
    return (
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4 items-center px-10">
                <span className="text-light-yellow">Aura's Blog</span>
                <span className="text-white text-center font-ppmori-semibold text-[28px] font-semibold leading-9">Discover the future of Web3</span>
            </div>
            <div className="w-screen pl-6">
                <BlogsSlider />
            </div>
        </div>
    );
}

export default Blogs;