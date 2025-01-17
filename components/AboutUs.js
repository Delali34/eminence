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
                    We are on a transformative mission to ignite enduring change
                    by championing economic empowerment and forging gender
                    equality. Our mission is to catalyse lasting change by
                    promoting economic empowerment and gender equality through
                    entrepreneurship. We envision a world where women are not
                    only equal contributors to economic growth but also
                    empowered agents of positive transformation in their
                    communities. By providing comprehensive entrepreneurship
                    training, fostering access to financial resources, and
                    creating a supportive ecosystem for women-led enterprises,
                    we strive to break down barriers, challenge gender norms,
                    and create pathways for women to achieve economic
                    independence. Our dedication to sustainable development and
                    social progress drives us to advocate for gender-responsive
                    policies, measure our impact, and address the root causes of
                    inequality. Together, we are shaping a future where women's
                    economic empowerment serves as a beacon of hope, igniting a
                    brighter and more inclusive tomorrow for all.
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
                    Our vision is to establish a world where economic
                    empowerment and gender equality converge, creating a
                    powerful force for positive change. Through our commitment
                    to promoting entrepreneurship, we aspire to empower women
                    with the tools, resources, and confidence they need to not
                    only break free from the confines of traditional roles but
                    to lead the charge in economic growth and societal
                    advancement. We envision a landscape where women-led
                    enterprises thrive, generating sustainable solutions to
                    pressing challenges while dismantling the barriers that have
                    historically held women back. By fostering a dynamic
                    ecosystem that values diversity, innovation, and
                    collaboration, we are shaping a future where economic
                    empowerment becomes a catalyst for gender equality,
                    propelling us towards a more just, inclusive, and prosperous
                    world for all. Imagine a world where economic empowerment
                    and gender equality unite to create an unstoppable force of
                    positive transformation.
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
                    Entrepreneurship. This goal focuses on creating
                    opportunities for women to achieve economic independence,
                    fostering gender equality, and contributing to sustainable
                    development through entrepreneurship and economic
                    empowerment.
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
                    (ten) years to live a purposeful life in Africa and beyond.
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
                  Our work is underlined by the following Sustainable
                  Development Goals (SDGs):
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
                    leaders within the organisation.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      2{" "}
                    </span>{" "}
                    Develop and implement comprehensive educational programs
                    that foster effective learning, promote intellectual growth
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
                    development.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#0BA067] border-[1px]">
                  <p>
                    <span className="text-4xl font-extrabold text-[#0BA067]">
                      5{" "}
                    </span>{" "}
                    Develop and implement comprehensive strategies to
                    effectively eradicate poverty through targeted
                    interventions, sustainable economic growth and equitable
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
                    education and collaboration with diverse stakeholders,
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
                    Empowerment is highly relevant as a core value to Eminence
                    Lead International. We enable individuals and communities to
                    gain control over their own lives, make informed decisions
                    and take actions that lead to positive change.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Accountability
                    </span>
                    {"  "}
                    We ensure accountability as a significant role in ensuring
                    the effectiveness, transparency, and legitimacy of
                    operations and impacts.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Professionalism
                    </span>
                    {"  "}
                    We instil trust and credibility in stakeholders including
                    donors, beneficiaries, partners, general public and
                    committed partners to achieving our goals.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Inclusivity{"  "}
                    </span>{" "}
                    We often work towards addressing various social, economic
                    and environmental challenges and their success which is
                    closely tied to their ability to be inclusive in their
                    approach. We ensure that all these stakeholders, regardless
                    of their backgrounds, identities, or abilities, are actively
                    engaged in the organisation's activities.
                  </p>
                </div>
                <div className="font-maintext mt-5 pt-5 bg-white p-4 rounded-lg border-[#034AA6] border-[1px]">
                  <p>
                    <span className="text-2xl font-extrabold text-[#034AA6]">
                      Trustworthiness
                    </span>{" "}
                    Trust is the foundation of our interactions at Eminence Lead
                    International by consistently demonstrating reliability,
                    transparency, and accountability. We aim to earn and
                    maintain the trust of our partners, beneficiaries, and the
                    communities we serve.
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
                    EMINENCE LEAD INTERNATIONAL is a duly registered and
                    licensed non-profit organisation in Ghana and was
                    established to create hope and ignite greatness in Africa
                    and beyond, enabling and empowering people to live
                    purposeful, limitless, powerful and fulfilled lives. We aim
                    to lead all leadership and engagement programs that
                    strategically ignite the next generation of the African
                    Continent leaders in business, education, public service,
                    religious organisation, health service, community and
                    chieftaincy. We exist as a passionate and purpose-driven
                    non-profit organisation with a singular mission: to ignite
                    transformative change by championing economic empowerment
                    and gender equality. Our journey is one of holistic
                    empowerment. We recognise that economic empowerment is a
                    cornerstone of societal progress, and to achieve it, we must
                    ensure that no gender is left behind. By focusing on
                    entrepreneurship, we enable individuals, particularly women,
                    to step into roles of leadership, innovation, and economic
                    agency. Our organisation is not just an institution; it's an
                    ecosystem of support. We provide not only education and
                    training but also mentorship, counselling, mediation,
                    networking, advocacy and access to resources. This ecosystem
                    nurtures budding entrepreneurs, fostering an environment
                    where dreams flourish into sustainable enterprises. Our
                    focus on entrepreneurship is not just about immediate
                    change; it's about sustainable impact. The businesses and
                    ventures that emerge from our programs continue to ripple
                    through communities, generating employment, innovation, and
                    positive change for years to come. Our work does not stop at
                    education and training. We advocate for gender-responsive
                    policies that create an enabling environment for
                    entrepreneurship to thrive. By addressing systemic barriers,
                    we lay the groundwork for lasting transformation. We are
                    creating economic empowerment and gender equality woven
                    together, creating a future where every individual's
                    potential is realized, regardless of their gender. In a
                    world where potential knows no bounds, we believe that every
                    individual deserves the opportunity to thrive, regardless of
                    their gender. Our journey is fuelled by the conviction that
                    true progress is only achieved when economic empowerment and
                    gender equality stand hand in hand. Our passion has been
                    necessitated by the fact that Africa has consistently fallen
                    behind on almost all development initiatives in spite of its
                    huge and rich natural resources. Many studies and reliable
                    evidence show that poor and unresponsive leadership and
                    unconcern are the cause of this epidemic of affairs. We want
                    to see an Africa that works. We want to see an African
                    people making use of their potentials.
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
