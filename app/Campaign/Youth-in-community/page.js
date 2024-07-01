import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";

const CampaignPage = () => {
  return (
    <div className="bg2">
      <Navbar />

      <section className="max-w-7xl mx-auto pb-5">
        <div className="relative h-[400px] w-full">
          <Image
            src="/youth.jpg"
            alt="Youth Community Development"
            layout="fill"
            objectFit="cover"
          />
          <div className="h-[400px] absolute top-0 bottom-0 left-0 right-0 inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-white font-bold text-center">
              YOUTH IN COMMUNITY DEVELOPMENT EMPOWERMENT PROGRAM
            </h1>
          </div>
        </div>

        <div className="px-5 py-10 space-y-8">
          <p className="lg:text-lg lg:leading-8">
            As we stand at the threshold of a new era, marked by both
            unprecedented challenges and unparalleled opportunities, Eminence
            Lead International is proud to embark on a transformative journey
            from 2025 to 2030. Guided by our unwavering commitment to
            compassion, justice, and equity, we invite you to join us in shaping
            a world where every individual has the opportunity to thrive. In the
            years ahead, Eminence Lead International will continue to champion
            vital causes.
          </p>

          <div className="rounded-md">
            <h2 className="text-2xl font-bold mb-3">
              YOUTH IN COMMUNITY DEVELOPMENT EMPOWERMENT PROGRAM
            </h2>
            <p>
              Youth in community development refers to the active involvement
              and participation of young people in initiatives and activities
              aimed at improving the well-being, sustainability, and growth of
              their communities. This involvement can take various forms,
              including volunteering, leadership roles, advocacy,
              entrepreneurship, and skills development. Ghana has a significant
              youth population, with a large percentage of its citizens under
              the age of 30. According to the World Bank, as of 2020,
              approximately 57% of Ghana's population was under the age of 25.
              While Ghana's youth are enthusiastic about contributing to
              community development, they face various challenges, including
              limited access to resources, inadequate infrastructure, and
              socio-economic disparities. Addressing these challenges requires
              collaborative efforts from government, civil society, private
              sector, and international partners to create an enabling
              environment for youth empowerment and sustainable development.
              This is why we are interested in building the youth up, and this
              is also part of our focus areas.
            </p>
          </div>

          <div className="bg-green-300 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p>
              Our mission is to impact two (2) million youth in poverty-stricken
              communities across Ghana by empowering them to take leadership
              roles in community development initiatives. We aim to inspire and
              motivate young individuals to actively contribute to the
              improvement of their communities through participation,
              innovation, and collaboration. By providing them with the
              necessary support and resources, we envision a future where
              youth-led initiatives play a central role in shaping resilient,
              thriving, and inclusive communities across the nation.
            </p>
          </div>

          <div className="bg-blue-300 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-3">Target Beneficiaries</h2>
            <p>
              Our efforts will benefit the entire community, with a specific
              focus on youth residing in poverty-stricken regions across Ghana.
              Recognizing the critical role of young people in driving social
              change, we aim to engage and empower them to become catalysts for
              development and transformation. By targeting areas such as Accra,
              Kumasi, Tamale, Sekondi-Takoradi, and other regions facing
              significant poverty challenges, we seek to address systemic
              inequalities and empower youth to become agents of positive change
              in their communities.
            </p>
          </div>

          <div className="bg-red-300 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-3">
              Targeted Amount: $5 Million
            </h2>
            <p>
              We are aiming to reach $5 million for this impactful project, and
              your support is invaluable. Reaching this goal would be a
              significant achievement, and we can't do it without your help.
              Your contribution, no matter the size, will bring us closer to
              making a real difference. So, we ask for your involvement, your
              generosity, and your belief in our mission. Together, we can reach
              new heights and positively impact the lives of many. We genuinely
              appreciate your support and look forward to embarking on this
              journey together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaignPage;
