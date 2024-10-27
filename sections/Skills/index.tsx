import SkillCard from "@components/SkillCard";
import InfiniteMovingCards from "@ui/InfiniteMovingAnimation";
import skillsWithIcons from "@data/skillsWithIcons.json";

export default function Skills() {
  return (
    <div id="skills" className="pt-16 md:pt-36 flex flex-col items-center gap-10">
      <h1 className="text-white font-bold text-center text-4xl lg:text-5xl max-w-96 md:max-w-full">
        My <span className="text-[#CBACF9]">Skills</span>
      </h1>
      <div className="flex gap-6 items-center justify-center flex-wrap w-full max-w-7xl px-4">
        <InfiniteMovingCards speed="slow">
          {skillsWithIcons.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </InfiniteMovingCards>
      </div>
    </div>
  );
}
