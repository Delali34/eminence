import React from "react";

function Leadership() {
  return (
    <div>
      <div id="Poverty">
        <div className="relative  h-full  bg-[#ff32f5] border-2 border-black mt-10">
          <div className="relative p-10 px-5  bg2   right-2 bottom-2 border-2 border-black h-full">
            <div className="flex space-x-6 items-center">
              <div className="w-1/4 z-10 border-black border-2">
                <img
                  src="/poverty.jpg"
                  alt="Coding Challenge"
                  className="w-full h-full"
                />
              </div>

              <div className="w-3/4 space-y-4 z-10">
                <h1 className="lg:text-3xl text-xl font-bold font-maintext">
                  Poverty Eradication
                </h1>
              </div>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#ff32f5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                End-Poverty Initiative Programs
              </h1>
              <p className="font-mont">
                These encompass a comprehensive set of activities and campaigns
                aimed at eradicating poverty through a multifaceted approach.
                The initiative includes engaging communities, providing training
                and education, raising awareness, and fostering sustainable
                solutions to combat poverty effectively.
              </p>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#ff32f5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                Hope for the Poor Initiative Program
              </h1>
              <p className="font-mont">
                This program is designed to provide hope and support to
                individuals living in poverty. It focuses on empowering them
                through various means such as entrepreneurship support, life
                skills training, vocational training, and opportunities for
                trading and income generation. The aim is to equip them with the
                tools and knowledge necessary to break the cycle of poverty and
                improve their quality of life.
              </p>
            </div>
            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#ff32f5] border-[1px]">
              <h1 className="lg:text-3xl text-xl font-semibold pb-3">
                Poverty Education Programs
              </h1>
              <p className="font-mont">
                These programs focus on educating individuals and communities
                about poverty, its causes, and potential ways to overcome it.
                They provide insights into financial literacy, budgeting,
                saving, and investing, along with teaching skills necessary for
                employability and income generation. By enhancing financial
                awareness and skills, these programs aim to empower people to
                make informed decisions and work towards poverty alleviation.
              </p>
            </div>

            <div className="font-maintext mt-5  pt-5 bg-white p-4 rounded-lg border-[#ff32f5] border-[1px]">
              <p className="font-mont">
                These initiatives collectively strive to eradicate poverty by
                providing education, skills, and support to individuals and
                communities. By fostering a sense of hope, imparting crucial
                knowledge, and enabling sustainable livelihoods, these programs
                contribute to breaking the cycle of poverty and fostering a
                brighter future for those affected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
