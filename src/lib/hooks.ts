import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { useActiveSectionContext } from "../context/active-section-context";

const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return {
    ref,
  };
};

export default useSectionInView;
