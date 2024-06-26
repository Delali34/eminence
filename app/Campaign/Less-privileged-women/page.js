import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";

const CampaignPage = () => {
  return (
    <div className="bg2">
      <Navbar />
      <section className="max-w-7xl mx-auto pb-5">
        <div className="relative h-[400px] w-full">
          <Image
            src="/women.jpg"
            alt="Empowerment of Women and Children"
            layout="fill"
            objectFit="cover"
          />
          <div className="h-[400px] absolute top-0 bottom-0 left-0 right-0 inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-white font-bold text-center">
              THE RIGHT OF LESS PRIVILEGED WOMEN AND CHILDREN EMPOWERMENT
              PROGRAM
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

          <div className="bg-yellow-300 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-3">
              THE RIGHT OF LESS PRIVILEGED WOMEN AND CHILDREN EMPOWERMENT
              PROGRAM
            </h2>
            <p>
              In Ghana, the rights of women and children are protected by
              various legal frameworks, including the constitution,
              international conventions, and domestic legislation. The
              recognition and protection of these rights are crucial for
              ensuring the well-being, safety, and equality of women and
              children within Ghanaian society. Women are underrepresented in
              decision-making, holding only 15% of seats in parliament and 27%
              of management positions in the private sector [World Bank, 2023].
              Ghana has made significant strides in promoting women's rights
              over the years. The Ghanaian constitution prohibits discrimination
              on the basis of gender and guarantees equal rights for men and
              women. Despite legal frameworks, challenges persist in achieving
              full gender equality. Issues such as gender-based violence,
              limited access to education and healthcare, and cultural norms
              that discriminate against women still exist. Efforts have been
              made to improve child welfare in Ghana, including initiatives to
              increase access to education, healthcare, and protection from
              exploitation and abuse. However, child labor, child trafficking,
              and inadequate access to education and healthcare remain
              significant challenges in Ghana. 80% of pregnant women receive
              skilled care nationally, though lower in the Northern Region (60%)
              [UNICEF, 2023]. Nearly 20% of children under five experience
              stunting, indicating chronic undernourishment [UNICEF, 2023].
            </p>
          </div>

          <div className="bg-green-300 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p>
              Our mission is to impact ten (10) million individuals by promoting
              and protecting the rights of women and children in
              poverty-stricken communities across Ghana. Through advocacy,
              education, and community empowerment, we seek to empower women and
              children to assert their rights, access essential services, and
              live free from violence and discrimination. Our approach
              emphasizes collaboration with local communities, stakeholders, and
              policymakers to create sustainable change and build a society
              where the rights and dignity of every woman and child are upheld
              and respected.
            </p>
          </div>

          <div className="bg-blue-300 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-3">Target Beneficiaries</h2>
            <p>
              Our initiatives will benefit the entire community, with a
              particular emphasis on women and children living in
              poverty-stricken areas across Ghana. These communities often face
              multiple forms of discrimination and marginalization, making them
              especially vulnerable to abuse, exploitation, and neglect. By
              prioritizing the rights and well-being of women and children, we
              aim to address systemic inequalities and create a more just and
              inclusive society for all.
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
