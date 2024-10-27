import ExperienceCard from "@components/ExperienceCard";
import experiences from "@data/experiences.json";

export default function WorkExperiences() {
  return (
    <div className="pt-16 md:pt-36 flex flex-col items-center gap-10">
      <h1 className="text-white font-bold text-center text-4xl lg:text-5xl max-w-96 md:max-w-full">
        My <span className="text-[#CBACF9]">work experience</span>
      </h1>
      <div className="flex gap-6 items-center justify-center flex-wrap w-full max-w-7xl px-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            {...experience}
            key={`${experience.heading}__${index}`}
            containerClasses="w-full lg:w-[calc(50%-1rem)]"
          />
        ))}
      </div>
    </div>
  );
}
