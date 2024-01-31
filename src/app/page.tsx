import Features from "@/sections/features";
import Introduction from "@/sections/introduction";
import Blogs from "../sections/blogs";
import Ecosystem from "../sections/ecosystem";
import Parters from "../sections/partners";
import Statistics from "../sections/statistics";

export default function Home() {
  return (
    <div className="bg-[url('../assets/images/img_background.svg')] bg-no-repeat">
        <div className="main-container">
          <div className="flex min-h-screen flex-col items-center">
            <Introduction />
            <div className="mt-[141px] lg:mt-[153px] flex flex-col gap-20 w-full items-center">
              <Parters />
              <Statistics />
              <Features />
              <Ecosystem />
              <Blogs />
            </div>
          </div>
        </div>
    </div>
  );
}
