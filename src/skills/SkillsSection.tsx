// SkillsSection.jsx

import SkillItem from "../skills/SkillsItem.jsx";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-wide uppercase text-gray-800">
            MY <span className="font-serif italic text-[#00CED1]">SKILLS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SkillItem
            skill="Languages: TypeScript, JavaScript (ES6+)"
            percentage={99}
            description="
        Clear understanding of it Strict Mode, Generics, Interfaces, building scalable and maintainable applications"
          />
          <SkillItem
            skill="Frameworks: React"
            percentage={99.9}
            description="I value clean architecture, strict typing, and writing code that my 'future self' (and my team) will actually enjoy reading."
          />
          <SkillItem
            skill="Tools: GitHub, Vite, webpack"
            percentage={98}
            description="Automated deployment pipelines ensuring 100% uptime and seamless production releases."
          />
          <SkillItem
            skill="Styling & UI"
            percentage={98}
            description="
        Tailwind CSS (Presentation), Specialize in using modern tool to build scalable and maintainable applications"
          />
          <SkillItem
            skill="Visuals & Usability"
            percentage={99}
            description="For every site built, it is ensured that it works flawlessly on a 4K monitor, a standard laptop, an iPad, and a budget Android phone."
          />
          <SkillItem
            skill="Reliability & Soft Skills"
            percentage={99}
            description="With me in your team, you are sure of a frictionless professional relationship."
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
