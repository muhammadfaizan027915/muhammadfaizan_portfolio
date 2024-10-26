import ContactForm from "@/components/ContactForm";
import BackgroundMask from "@/components/ui/BackgroundMask";
import BackgroundBoxes from "@/components/ui/BackgroundBoxes";

export default function Contact() {
  return (
    <div
      id="contact"
      className="pt-16 md:pt-36 flex flex-col items-center gap-10 relative overflow-hidden"
    >
      <BackgroundBoxes />
      <BackgroundMask />
      <div className="z-20">
        <h1 className="text-white font-bold text-center text-4xl lg:text-5xl mx-auto max-w-96 md:max-w-full">
          Contact <span className="text-[#CBACF9]">Me</span>
        </h1>
        <p className="text-blue-100 mt-2 px-4 text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
      </div>
      <div className="w-full max-w-7xl px-4 z-20">
        <ContactForm />
      </div>
    </div>
  );
}
