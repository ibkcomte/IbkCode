import PageOneCard from "./PageOneCard";
import passport from "../assets/passport.jpg";
import { ArrowDown } from "lucide-react";

const PageOne: React.FC = () => {
 const handleScroll = () => {
//   const contactSection = document.getElementById('contact');
//   if (contactSection) {
//     contactSection.scrollIntoView({ behavior: 'smooth' });
//   }
};

  return (
    <>
      <section
        id="pageOne"
        className="flex flex-row items-center p-12 bg-white dark:bg-slate-950 rounded-xl"
      >
        <PageOneCard name="Ibukun Dada" role="Developer" />
        <img
          src={passport}
          alt="Dada Ibukun, Professional Developer"
          className="rounded-full object-cover border-lemon-400 p-4 hidden md:block"
        />
        
      </section>
      <button
          onClick={handleScroll}
          className=" mt-6 md:mt-0 animate-bounce md:absolute md:right-0 flex flex-col items-center group transition-transform hover:-translate-y-1"
        >
          <div className="bg-black/10 p-2 rounded-full mb-1 group-hover:bg-black/20 transition-colors">
            <ArrowDown size={24} className="text-[#062427]" />
          </div>
          <span className="text-sm font-semibold text-[#062427]">
            Back To Project
          </span>
        </button>
    </>
  );
};

export default PageOne;
