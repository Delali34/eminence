import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Campaign = () => {
  const scrollContainerRef = useRef(null);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 2;
    const delay = 20;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;
        scrollAmount += scrollStep;

        if (scrollAmount >= scrollContainer.scrollWidth / 1.5) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const startAutoScroll = () => {
      intervalIdRef.current = setInterval(autoScroll, delay);
    };

    const stopAutoScroll = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };

    scrollContainer.addEventListener("mouseenter", stopAutoScroll);
    scrollContainer.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <section className="max-w-[1800px] mx-auto mb-5">
      <div
        ref={scrollContainerRef}
        className="px-5 py-10 lg:flex gap-5 lg:gap-0 grid sm:overflow-hidden md:overflow-auto  place-items-center grid-cols-1  sm:grid-cols-2 lg:grid-flow-row w-full lg:overflow-x-scroll lg:space-x-10"
      >
        <div className="">
          <Link href="/Campaign/Less-privileged-women">
            <div className="border p-5 h-[400px] sm:w-[300px] md:w-[350px]">
              <Image
                src="/women.jpg"
                alt="change"
                width={500}
                height={500}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
              />
              <div className="py-3">
                <p className="text-[12px] bg-yellow-300 w-[175px] text-center p-1 rounded-sm">
                  The Tender Touch
                </p>
                <h4 className="md:text-[18px] sm:text-[14px] font-header font-semibold mb-2">
                  THE RIGHT OF LESS PRIVILEGED WOMEN AND CHILDREN EMPOWERMENT
                  PROJECT
                </h4>
                <p className="text-[10px] bg-yellow-300 w-[140px] text-center p-1 rounded-sm">
                  Click to Read more
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/Campaign/Youth-in-community">
            <div className="border p-5 h-[400px] sm:w-[300px] md:w-[350px]">
              <Image
                src="/youth.jpg"
                alt="change"
                width={500}
                height={500}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
              />
              <p className="text-[12px] mt-3 bg-orange-300 w-[175px] text-center p-1 rounded-sm">
                NextGen Builders
              </p>
              <div className="py-3">
                <h4 className="md:text-[18px] sm:text-[14px] font-header font-semibold mb-2">
                  YOUTH IN COMMUNITY DEVELOPMENT EMPOWERMENT PROJECT
                </h4>
                <p className="text-[10px] bg-orange-300 w-[140px] text-center p-1 rounded-sm">
                  Click to Read more
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/Campaign/Empowering-underserved-community">
            <div className="border p-5 h-[400px] sm:w-[300px] md:w-[350px]">
              <Image
                src="/girl.jpg"
                alt="change"
                width={500}
                height={500}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
              />
              <div className="py-3">
                <p className="text-[12px] bg-green-300 w-[175px] text-center p-1 rounded-sm">
                  Radiant Rise
                </p>
                <h4 className="md:text-[17px] sm:text-[12px] font-header font-semibold mb-2">
                  EMPOWERING UNDERSERVED COMMUNITY WOMEN AND YOUNG GIRLS TO
                  UNLOCK FULL POTENTIAL PROJECT
                </h4>
                <p className="text-[10px] bg-green-300 w-[140px] text-center p-1 rounded-sm">
                  Click to Read more
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/Campaign/Quality-education">
            <div className="border p-5 h-[400px] sm:w-[300px] md:w-[350px]">
              <Image
                src="/educ.jpg"
                alt="change"
                width={500}
                height={500}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
              />
              <div className="py-3">
                <p className="text-[12px] bg-blue-300 w-[175px] text-center p-1 rounded-sm">
                  The Future Forge
                </p>
                <h4 className="md:text-[17px] sm:text-[14px] font-header font-semibold mb-2">
                  IGNITING THE NEXT GENERATION THROUGH QUALITY EDUCATION PROJECT
                </h4>
                <p className="text-[10px] bg-blue-300 w-[140px] text-center p-1 rounded-sm">
                  Click to Read more
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/Campaign/End-poverty">
            <div className="border p-5 h-[400px] sm:w-[300px] md:w-[350px]">
              <Image
                src="/voc.jpg"
                alt="change"
                width={500}
                height={500}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
              />
              <div className="py-3">
                <p className="text-[12px] bg-red-300 w-[175px] text-center p-1 rounded-sm">
                  Empower Skills
                </p>
                <h4 className="md:text-[15.5px] sm:text-[12px] font-header font-semibold mb-2">
                  END THE POVERTY SYNDROME THROUGH VOCATIONAL SKILLS AND
                  ENTREPRENUERSHIP EMPOWERMENT PROJECT
                </h4>
                <p className="text-[10px] bg-red-300 w-[140px] text-center p-1 rounded-sm">
                  Click to Read more
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/Campaign/Agrigrow">
            <div className="border p-5 h-[400px] sm:w-[300px] md:w-[350px]">
              <Image
                src="/food.jpg"
                alt="change"
                width={500}
                height={500}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
              />
              <div className="py-3">
                <p className="text-[12px] bg-purple-300 w-[175px] text-center p-1 rounded-sm">
                  Boosting Agriculture
                </p>
                <h4 className="md:text-[18px] sm:text-[14px] font-header font-semibold mb-2">
                  AGRIGROW - ENDING HUNGER AND FOOD SCARCITY- BOOSTING
                  AGRICULTURE PROJECT
                </h4>
                <p className="text-[10px] bg-purple-300 w-[140px] text-center p-1 rounded-sm">
                  Click to Read more
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
