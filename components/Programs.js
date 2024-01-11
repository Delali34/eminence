import React from "react";
import Leadership from "./Programs/Leadership";
import Gender from "./Programs/Gender";
import Community from "./Programs/Community";
import Human from "./Programs/Human";
import Enivironment from "./Programs/Environment";
import Poverty from "./Programs/Poverty";
import Governance from "./Programs/Governance";

function Programs() {
  return (
    <div className="bg">
      <div className="max-w-7xl font-maintext mx-auto pt-10 px-5 lg:px-10 pb-10">
        <div>
          <div className="relative  h-full  bg-[#eef135] border-2 border-black lg:mb-10 mb-5">
            <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
              <div className="flex space-x-6 items-center">
                <div className="w-1/4 z-10 border-black border-2">
                  <img
                    src="/programs.jpg"
                    alt="Coding Challenge"
                    className="w-full h-full"
                  />
                </div>

                <div className="w-3/4 space-y-4 z-10">
                  <h1 className="lg:text-5xl text-3xl font-bold font-maintext">
                    Our Programs
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative  h-full  bg-[#06FF31] border-2 border-black ">
            <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
              <div className="flex space-x-6 items-center">
                <div className="w-1/4 z-10 border-black border-2">
                  <img
                    src="/education.jpg"
                    alt="Coding Challenge"
                    className="w-full h-full"
                  />
                </div>

                <div className="w-3/4 space-y-4 z-10">
                  <h1 className="lg:text-3xl text-xl font-bold font-maintext">
                    Educational Programs
                  </h1>
                </div>
              </div>
              <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                  Ignite for Success (SPARK)
                </h1>
                <p className="font-mont">
                  This is a comprehensive 3-day mentorship program designed for
                  students at various levels of education - from basic schools
                  to senior high schools and tertiary institutions. The aim is
                  to ignite a passion for learning, instill confidence, and
                  provide tools and strategies to help students succeed
                  academically and in life.
                </p>
              </div>
              <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                  Teacher Transformational Program
                </h1>
                <p className="font-mont">
                  This 3-day program is focused on equipping teachers with the
                  necessary skills, knowledge, and strategies to enhance their
                  teaching abilities. The objective is to transform them into
                  more effective educators who can inspire and positively impact
                  the lives of their students through innovative and engaging
                  teaching methodologies.
                </p>
              </div>
              <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                  School Management and Engagement Programs
                </h1>
                <p className="font-mont">
                  This 3-day workshop is targeted at school managers, head of
                  schools, the minister of education, and other stakeholders in
                  education. The program aims to enhance their understanding of
                  effective school management strategies, fostering a
                  collaborative and conducive learning environment. It
                  encourages active engagement and partnerships between various
                  stakeholders for the improvement of the education system.
                </p>
              </div>
              <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                  Heads of School Mentorship Program
                </h1>
                <p className="font-mont">
                  Scheduled quarterly across all regions, this 3-day mentorship
                  program aims to provide guidance and support to heads of
                  schools. The focus is on leadership development, effective
                  decision-making, and strategies to enhance overall school
                  performance. The mentorship program provides a platform for
                  sharing best practices and addressing challenges faced by
                  school leaders.
                </p>
              </div>
              <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                  Learning to Learn to Excel
                </h1>
                <p className="font-mont">
                  Tailored for junior high school through senior high school
                  students, this program spans across several days. It focuses
                  on helping students develop essential learning skills and soft
                  skills necessary for academic success and personal growth. The
                  methodology emphasizes effective learning techniques, time
                  management, critical thinking, and exam preparation strategies
                  to reduce final year failure rates.
                </p>
              </div>
              <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#06FF31] border-[1px]">
                <p className="font-mont">
                  Overall, these programs are designed to enhance the education
                  system by empowering both students and educators, fostering a
                  culture of continuous improvement, and ultimately contributing
                  to the academic and personal success of students at different
                  educational levels.
                </p>
              </div>
            </div>
          </div>
          <Leadership />
          <Gender />
          <Community />
          <Human />
          <Enivironment />
          <Poverty />
          <Governance />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Programs;
