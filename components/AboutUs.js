"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SDGimages = [
  {
    image1: "/sdg1.png",
  },
  {
    image1: "/sdg4.png",
  },
  {
    image1: "/sdg5.png",
  },
  {
    image1: "/sdg8.png",
  },
  {
    image1: "/sdg10.png",
  },
  {
    image1: "/sdg11.png",
  },
  {
    image1: "/sdg13.png",
  },
  {
    image1: "/sdg16.png",
  },
];

function FadeInSection(props) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}
function FadeInSectionRight(props) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-y-0 opacity-100" : "translate-x-5 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}
function FadeInSectionLeft(props) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-y-0 opacity-100" : "-translate-x-5 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}

function AboutUs() {
  return (
    <div className="bg">
      <div className="max-w-7xl font-maintext mx-auto pt-10  grid lg:grid-cols-2 grid-cols-1 place-items-center p-5 lg:space-x-4">
        <section>
          <FadeInSectionLeft>
            <div className="relative  h-full bg-yellow-500 border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex space-x-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/mission.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 space-y-4 z-10">
                    <h1 className="text-3xl font-bold font-header">
                      Our Mission
                    </h1>
                  </div>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-yellow-500 border-[1px]">
                  <p>
                    We aim to promote lasting change by championing economic
                    empowerment and gender equality through entrepreneurship.
                    Our vision is for women to be empowered economic
                    contributors and positive change-makers in their
                    communities. We provide entrepreneurship training, financial
                    resources, and support for women-led businesses. Committed
                    to sustainable development, we advocate for gender-sensitive
                    policies and address the core issues of inequality, aiming
                    for a future where women's economic strength lights the way
                    for a brighter, inclusive tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSectionLeft>
        </section>
        <section>
          <FadeInSectionRight>
            <div className="relative lg:mt-0 mt-10  h-full bg-[#EA1154] border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex space-x-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/vision.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 space-y-4 z-10">
                    <h1 className="text-3xl font-bold font-header">
                      Our Vision
                    </h1>
                  </div>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#EA1154] border-[1px]">
                  <p>
                    We envision a world where economic empowerment and gender
                    equality merge, becoming a potent force for good. Our goal
                    is to empower women through entrepreneurship, enabling them
                    to transcend traditional roles and spearhead economic and
                    societal progress. We aim for a future where women-led
                    businesses flourish, offering solutions to major issues and
                    breaking historic barriers. By valuing diversity,
                    innovation, and collaboration, we're building a world where
                    economic strength is a driving force for gender equality,
                    leading to a just, inclusive, and prosperous society for
                    everyone.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSectionRight>
        </section>
      </div>
      <div className="max-w-7xl p-5 font-maintext mx-auto pt-10 grid grid-cols-1 lg:space-x-4">
        <section>
          <FadeInSection>
            <div className="relative  h-full bg-[#c6fc49] border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex space-x-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/goal.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 space-y-4 z-10">
                    <h1 className="md:text-3xl text-xl font-bold font-header">
                      Our Goal
                    </h1>
                  </div>
                </div>
                <div className="font-maintext text-[16px] md:text-2xl mt-5 pt-5 bg-white p-4 rounded-lg border-[#c6fc49] border-[1px]">
                  <p>
                    Promote Economic Empowerment and Gender Equality through
                    Entrepreneurship This goal focuses on creating opportunities
                    for women to achieve economic independence, fostering gender
                    equality, and contributing to sustainable development
                    through entrepreneurship and economic empowerment.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
        <section>
          <FadeInSection>
            <div className="relative mt-10  h-full bg-[#ffab2e] border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex space-x-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/goals.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 space-y-4 z-10">
                    <h1 className="md:text-3xl text-xl font-bold font-header">
                      Our Strategic Goal
                    </h1>
                  </div>
                </div>
                <div className="font-maintext text-[16px] md:text-2xl mt-5 pt-5 bg-white p-4 rounded-lg border-[#ffab2e] border-[1px]">
                  <p>
                    To impact 5,000,000 (five million) people in the next 10
                    (ten) years across all our focus areas of operation as an
                    organization.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
        <section>
          <FadeInSection>
            <div className="relative mt-10  h-full bg-[#c6fc49] border-2 border-black ">
              <div className="relative md:p-10 px-5 py-5 md:py-10  bg2   right-2 bottom-2 border-2 border-black h-full">
                <h1 className="font-maintext pb-4 md:py-5 text-sm md:text-2xl font-semibold">
                  The organization’s programs, projects and focus areas
                  contribute to the following United Nation Sustainable
                  Development Goals
                </h1>
                <div className="grid lg:grid-cols-8 grid-cols-4 md:gap-5 gap-2 items-center">
                  {SDGimages.map((image, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={image.image1}
                          width={700}
                          height={700}
                          className="w-[100px] h-[100px]"
                          alt="sdg"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
        <section>
          <FadeInSection>
            <div className="relative mt-10  h-full bg-[#0BA067] border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex space-x-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/objectives.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 space-y-4 z-10">
                    <h1 className="text-3xl font-bold font-header">
                      Our Objectives
                    </h1>
                  </div>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      1{" "}
                    </span>{" "}
                    Design and implement comprehensive leadership development
                    programs to cultivate and enhance the skills, qualities, and
                    potential of individuals, fostering effective and visionary
                    leaders within the organization.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      2{" "}
                    </span>{" "}
                    Develop and implement comprehensive educational programs
                    that foster effective learning, promote intellectual growth,
                    and empower individuals to achieve their full potential.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      3{" "}
                    </span>{" "}
                    Promote gender equality and social inclusion through
                    comprehensive and targeted initiatives, fostering a diverse
                    and equitable society for all.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      4{" "}
                    </span>{" "}
                    Empower and uplift communities through sustainable
                    initiatives, collaborative engagement, and targeted
                    resources for holistic social, economic, and cultural
                    development
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      5{" "}
                    </span>{" "}
                    Develop and implement comprehensive strategies to
                    effectively eradicate poverty through targeted
                    interventions, sustainable economic growth, and equitable
                    access to essential resources and opportunities.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      6{" "}
                    </span>{" "}
                    To promote and defend the fundamental human rights and
                    dignity of individuals worldwide through dedicated advocacy,
                    education, and collaboration with diverse stakeholders,
                    thereby contributing to a just and equitable global society.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      7
                    </span>
                    Create effective and transparent governance structures to
                    ensure informed decision- making and accountable management.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      8{" "}
                    </span>{" "}
                    Through strategic initiatives, community engagement, and
                    collaborative partnerships, we aim to address pressing
                    environmental issues such as pollution, deforestation,
                    climate change, and habitat destruction.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
        <section className="mt-10">
          <FadeInSection>
            <div className="relative  h-full bg-[#034AA6] border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex gap-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/values.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 gap-4 z-10">
                    <h1 className="text-3xl font-bold font-header">
                      Our Values
                    </h1>
                  </div>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Empowerment{"  "}
                    </span>
                    Empowerment is highly relevant as a core value for our
                    organisation. Empowerment refers to the process of enabling
                    individuals or communities to gain control over their own
                    lives, make informed decisions, and take actions that lead
                    to positive change. Empowerment aligns with the principles
                    of sustainable development
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Accountability
                    </span>
                    {"  "}
                    Accountability is a highly relevant and crucial value for
                    any non-governmental organization (NGO). It plays a
                    significant role in ensuring the effectiveness,
                    transparency, and legitimacy of an NGO's operations and
                    impact. Accountability is fundamental for building and
                    maintaining trust with donors, beneficiaries, partners, and
                    the general public
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Professionalism
                    </span>
                    {"  "}
                    Professionalism is highly relevant as a value for our
                    organisation. Professionalism instils trust and credibility
                    in the NGO's stakeholders, including donors, beneficiaries,
                    partners, and the general public. A professional image
                    demonstrates that the organization is serious about its work
                    and committed to achieving its goals. Professional practices
                    can lead to better planning, execution, and resource
                    allocation.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Inclusivity{"  "}
                    </span>{" "}
                    Inclusivity is highly relevant as a core value for our
                    organization. In our organization we often work towards
                    addressing various social, economic, and environmental
                    challenges, and their success is closely tied to their
                    ability to be inclusive in their approach. Inclusivity
                    ensures that all these stakeholders, regardless of their
                    backgrounds, identities, or abilities, are actively engaged
                    and represented in the organization's activities.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Trustworthiness
                    </span>{" "}
                    Trust is the foundation of our interactions. By consistently
                    demonstrating reliability, transparency, and accountability,
                    we aim to earn and maintain the trust of our partners,
                    beneficiaries, and the communities we serve.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
        <section className="mt-7 mb-10">
          <FadeInSection>
            <div className="relative  h-full  bg-[#06FF31] border-2 border-black ">
              <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
                <div className="flex space-x-6 items-center">
                  <div className="w-1/4 z-10 border-black border-2">
                    <img
                      src="/why.jpg"
                      alt="Coding Challenge"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-3/4 space-y-4 z-10">
                    <h1 className="text-3xl font-bold font-maintext">
                      Why We Exist
                    </h1>
                  </div>
                </div>
                <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                  <p>
                    EMINENCE LEAD INTERNATIONAL is a registered NGO in Ghana,
                    established in August 2023 with a mission to ignite
                    transformative change in Africa and beyond. Their focus is
                    on economic empowerment and gender equality, enabling
                    people, especially women, to become leaders through
                    entrepreneurship. They provide education, training,
                    mentorship, and access to resources, fostering an
                    environment where dreams turn into sustainable businesses.
                    Their work extends beyond education, advocating for
                    gender-responsive policies and addressing systemic barriers.
                    Their goal is to create a future where every individual can
                    thrive, regardless of gender, and to combat Africa's
                    developmental challenges caused by poor leadership and
                    underutilized potential.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
