import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ReasonCard from "./Card/ReasonCard";
import { ReactComponent as UnderlineReason } from "../assets/other/underline-reason.svg";

gsap.registerPlugin(ScrollTrigger);

const Reason = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -40 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div
      className="container py-20 min-h-screen min-w-full bg-white_line border-t border-gray-500"
      ref={panelsContainer}
    >
      <h1
        className="text-[4rem] uppercase text-center"
        style={{ lineHeight: 0.8 }}
      >
        Why <br /> Reel It
      </h1>
      <div className="max-w-[25em] w-full mx-auto mb-14">
        <UnderlineReason />
      </div>
      <div className="w-full flex gap-4 bg-white border px-16 -rotate-3">
        <div className="flex-none" ref={(e) => createPanelsRefs(e, 0)}>
          <ReasonCard
            color="#68ffc9"
            title="make your dream video come true"
            desc="Want to make a Dance Cover video? Leave it to us, we won't let you down."
          />
        </div>
        <div className="flex-none" ref={(e) => createPanelsRefs(e, 1)}>
          <ReasonCard
            color="#ffa552"
            title="best photoshoot experience"
            desc="Book your group photoshoot with us and let us capture the best look for you!"
          />
        </div>
        <div className="flex-none" ref={(e) => createPanelsRefs(e, 2)}>
          <ReasonCard
            color="#ffe463"
            title="your event documentation needs"
            desc="Let us capture your on-going event have an event you will never forget"
          />
        </div>
      </div>
    </div>
  );
};

export default Reason;
