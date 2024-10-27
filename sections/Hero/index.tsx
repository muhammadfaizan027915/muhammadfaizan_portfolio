import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
import Button from "@ui/Button";
import BackgroundMask from "@ui/BackgroundMask";
import BackgroundBoxes from "@ui/BackgroundBoxes";
import TextGenerateEffect from "@ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="relative min-h-screen h-full w-full flex justify-center items-center">
      <BackgroundBoxes />
      <BackgroundMask />

      <div className="p-10 max-w-[1080px] text-center m-auto z-20">
        <p className="uppercase text-xs md:text-base text-blue-100 mb-4">
          Making Full Stack Solutions with NEXT.JS
        </p>
        <TextGenerateEffect
          words=" Trasnforming Concepts into Seamless User Experiences"
          className="text-white text-4xl md:text-6xl leading-tight md:leading-snug font-extrabold mb-4"
        />
        <p className="text-md md:text-lg w-72 md:w-full text-blue-100 mb-6 mx-auto">
          Hi! I'm Muhammad Faizan, a MERN Stack and NEXT.JS Devloper
        </p>
        <Link href={"#projects"}>
          <Button
            title="See my work"
            icon={<ArrowUpRight size="1.2rem" />}
            position="end"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
