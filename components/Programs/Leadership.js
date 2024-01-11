import React from "react";

function Leadership() {
  return (
    <div>
      <div id="Leadership">
        <div className="relative  h-full  bg-[#35f5d5] border-2 border-black mt-10">
          <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
            <div className="flex space-x-6 items-center">
              <div className="w-1/4 z-10 border-black border-2">
                <img
                  src="/leader.jpg"
                  alt="Coding Challenge"
                  className="w-full h-full"
                />
              </div>

              <div className="w-3/4 space-y-4 z-10">
                <h1 className="lg:text-3xl text-xl font-bold font-maintext">
                  Leadership Development Programs
                </h1>
              </div>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#35f5d5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                School Leadership Academy - African Leadership Toolkit (ALT):
              </h1>
              <p className="font-mont">
                The School Leadership Academy is a structured program
                encompassing a curriculum designed for educational institutions
                ranging from basic schools to tertiary levels. The focus is on
                teaching leadership principles and strategies with a specific
                emphasis on African leadership through the African Leadership
                Toolkit (ALT). The goal is to groom future leaders who can
                positively impact their communities and beyond, embodying
                African values and traditions within a modern context.
              </p>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#35f5d5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                Student Leadership Training Program
              </h1>
              <p className="font-mont">
                This program aims to identify and nurture leadership potential
                in students across various educational levels - basic,
                secondary, and tertiary. The training focuses on developing
                essential leadership qualities, communication skills, teamwork,
                and problem-solving abilities. By investing in student leaders,
                this program contributes to the development of responsible,
                effective, and visionary leaders for the future.
              </p>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#35f5d5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                Goal Setting Masterclass
              </h1>
              <p className="font-mont">
                The Goal Setting Masterclass is a two-day intensive workshop
                aimed at teaching effective goal-setting techniques. It caters
                to a diverse audience including students, professionals,
                diplomats, and leaders from various sectors. The program
                provides insights into setting achievable short-term and
                long-term goals, developing action plans, and staying motivated
                to reach these goals. Empowering individuals with goal-setting
                skills enhances their productivity and success in both personal
                and professional endeavors.
              </p>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#35f5d5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                Youth Leadership Academy
              </h1>
              <p className="font-mont">
                The Youth Leadership Academy is a multifaceted program that
                empowers young individuals across different fields such as
                governance, politics, sports, and more. It provides specialized
                training and mentorship to young leaders, fostering their growth
                and development within their respective domains. By investing in
                youth leadership, this program aims to cultivate a new
                generation of leaders who can drive positive change and
                contribute to the betterment of society in various capacities.
                <br /> <br />
                These leadership development programs collectively aim to build
                a strong leadership pipeline, starting from students and
                extending to young professionals and leaders in various fields.
                By instilling leadership skills, values, and a sense of
                responsibility, these initiatives work towards creating a more
                empowered and visionary society, ready to address the challenges
                and opportunities of the present and future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
