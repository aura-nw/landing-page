import Introduction from "@/sections/introduction";
import Parters from "../sections/partners";
import Statistics from "../sections/statistics";
import Features from "@/sections/features";
import Ecosystem from "../sections/ecosystem";
import Blogs from "../sections/blogs";
import Tutorials from "../sections/tutorials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[url('../assets/images/img_background.svg')] bg-no-repeat">
      <main className="main-container">
        <div className="flex min-h-screen flex-col items-center">
          <Introduction />
          <div className="mt-[141px] flex flex-col gap-20 w-full items-center">
            <Parters />
            <Statistics />
            <Features />
            <Ecosystem />
            <Blogs />
            <Tutorials />
          </div>
        </div>

      </main>
    </div>
  );
}
