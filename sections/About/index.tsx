import Image from "next/image";
import Window from "@assets/svgs/window.svg";
import Laptop from "@assets/svgs/laptop.svg";
import Globe from "@assets/svgs/globe.svg";
import Code from "@assets/svgs/code.svg";

import BackgroundMask from "@ui/BackgroundMask";
import BackgroundBoxes from "@ui/BackgroundBoxes";
import BentoGrid, { BentoGridItem } from "@ui/BentoGrid";
import BackgroundGradientAnimation from "@ui/BackgroundGradientAnimation";
import skills from "@data/skills.json";

import { cn } from "@/utils";
import { Copy } from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import { EMAIL_ADDRESS } from "@/utils/constants";

export default function About() {
  return (
    <div id="about" className="pt-10 flex flex-col gap-6 relative">
      <BackgroundBoxes />
      <BackgroundMask />
      <BentoGrid className="px-4">
        <BentoGridItem
          containerClasses="col-span-3 row-span-2"
          className="relative flex items-end p-6 md:p-10"
        >
          <Image
            src={Laptop}
            alt="Laptop"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <h1 className={cn("z-10 font-bold text-xl md:text-4xl md:max-w-md")}>
            I prioritize client collaboration, fostering open communication
          </h1>
        </BentoGridItem>
        <BentoGridItem
          containerClasses="col-span-2"
          className="flex items-end p-6 md:p-8"
        >
          <Image
            src={Globe}
            alt="globe"
            className="absolute bottom-0 left-0 object-cover"
          />
          <h2
            className={cn(
              "group-hover/bento:translate-x-2 transition duration-20",
              "absolute top-8 left-8",
              "font-bold text-xl md:text-3xl"
            )}
          >
            I'm very flexible with time <br /> zone communications
          </h2>
        </BentoGridItem>
        <BentoGridItem
          containerClasses="col-span-2"
          className="flex flex-col justify-center p-6 md:p-8"
        >
          <p className="text-blue-100 z-10 text-xs md:text-lg">
            I constantly try to improve
          </p>
          <h1 className={"font-bold text-xl md:text-3xl z-10"}>
            My tech stack
          </h1>
          <div
            className={
              "grid grid-cols-2 gap-x-3 gap-y-3 w-1/2 absolute right-0 top-8 md:top-4 -z-0 rotate-3"
            }
          >
            {skills?.map((skill, i) => (
              <span
                key={i}
                className={
                  "py-3 rounded-md bg-[#10132E] text-center text-xs md:text-lg"
                }
              >
                {skill}
              </span>
            ))}
          </div>
        </BentoGridItem>
      </BentoGrid>
      <BentoGrid className="px-4 md:auto-rows-[12rem]">
        <BentoGridItem containerClasses="col-span-2" className="p-6 md:p-8">
          <BackgroundBoxes className="opacity-70" />
          <h1 className="font-bold text-xl md:text-2xl md:w-96">
            Tech enthusiast with a passion for development.
          </h1>
          <Image
            src={Window}
            alt="Window"
            className="absolute right-0 bottom-0"
          />
        </BentoGridItem>
        <BentoGridItem
          containerClasses="col-span-3 row-span-2"
          className="flex flex-col justify-center gap-2 p-6 md:p-8"
        >
          <BackgroundBoxes className="opacity-70" />
          <p className="text-blue-100 uppercase tracking-widest">
            The Inside Scoop
          </p>
          <h1 className="font-bold text-xl md:text-4xl md:w-96">
            Currently building a JS Animation library
          </h1>
          <Image
            src={Code}
            alt="Code"
            className="absolute right-0 bottom-0 max-w-60 md:max-w-md"
          />
        </BentoGridItem>
        <BentoGridItem containerClasses="col-span-2" className="relative">
          <BackgroundGradientAnimation />
          <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-xl md:text-2xl w-56 md:w-80 text-center">
              Do you want to start a project together?
            </h1>
            <CopyButton
              title="Copy my email address"
              copyText={EMAIL_ADDRESS}
              className="text-sm"
            />
          </div>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
