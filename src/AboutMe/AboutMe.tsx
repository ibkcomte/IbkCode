import React from "react";
import { Code2, User, Briefcase } from "lucide-react";
import Button from "./Button";

const AboutMe: React.FC = () => {
  return (
    <section id='AboutMe' className="bg-white dark:bg-slate-950 py-16 px-6 md:px-12 lg:px-24 font-sans text-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold">
          ABOUT <span className="text-[#00CED1] font-serif italic">ME</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 mt-24">
          <h3 className="text-3xl font-bold leading-tight text-[#1e293b]">
            Software Developer | Business Logic (MBA)
          </h3>
          <p className="text-md text-slate-600 leading-relaxed">
            I don't just build features; I build solutions that align with
            market needs. My goal is to bridge the gap between complex technical
            architecture and strategic business growth, ensuring that every line
            of code adds tangible value to the organization."
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button id="ontact" className="bg-[#00CED1] hover:bg-[hsl(181,35%,66%)] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-teal-100">
              Get in Touch
            </button>
            <Button
                btnBgColor={"bg-white"}
                btnText={"Get in Touch"}
                btnColor={"text-black text-xs sm:text-xl"}
                padding={" pl-0 sm:pl-10 pr-3 p-1 sm:px-6"}
              />
            <button className="border-2 border-[#00CED1] text-slate-800 hover:bg-[#d5feff] px-8 py-3 rounded-full font-semibold transition-all">
              Download Cv
            </button>
          </div>
        </div>

        {/* Right Column: Service Cards */}
        <div className="space-y-6 hover:bg-[#d5feff]">
          {/* Card 1 */}
          <div className="bg-white hover:bg-[#d5feff] p-6 rounded-2xl border-slate-100 flex flex-col gap-2">
            <div className="w-12 h-12 bg-[#d5feff] rounded-full flex items-center justify-center">
              <Code2 className="text-slate-800 w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Code</h4>
            <p className="text-slate-600 leading-relaxed">
              I build responsive user interfaces with HTML, CSS, TypeScript, and
              React. APIs: RESTful APIs, Fetch.{" "}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl hover:bg-[#d5feff] border-slate-100 flex flex-col gap-2">
            <div className="w-12 h-12 bg-[#d5feff] rounded-full flex items-center justify-center">
              <User className="text-slate-800 w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">User Interface/ Structure</h4>
            <p className="text-slate-600 text-md leading-relaxed">
              I am growing in a software engineering space while
              mastering the business administrative aspect of it with keen
              interest in website structure and engineering. I ensure that every site
              built works flawlessly across all devices.
            </p>
          </div>
           {/* Card 3 */}
          <div className="bg-white hover:bg-[#d5feff] p-6 rounded-2xl border-slate-100 flex flex-col gap-2">
            <div className="w-12 h-12 bg-[#d5feff] rounded-full flex items-center justify-center">
              <Briefcase className="text-slate-800 w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">The Business</h4>
            <p className="text-slate-600 leading-relaxed">
              My MBA training helps me look past the immediate sprint and
              architectural systems that support long-term company growth.
              Collaborate with product owners to align React component
              architecture with long-term brand scalability goals..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
