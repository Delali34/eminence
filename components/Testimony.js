import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg2 py-10 pb-10 px-5">
      <div className="h-[70vh] max-w-[1280px] mx-auto font-mont lg:mb-20 mb-10 ">
        <h1 className="md:text-5xl text-3xl text-center font-bold lg:py-5">
          Testimonies
        </h1>
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            top: 10px; /* Adjust as needed */
            color: #ff521a; /* Replace with your desired color */
          }
          .swiper-button-next {
            right: 10px;
          }
          .swiper-button-prev {
            left: 10px;
          }
        `}</style>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-full ">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                The program has greatly benefited final-year students, enhancing
                their skills in presentation, leadership, and entrepreneurship.
                The SRC President commends Eminence Lead International for their
                inspiring role and urges continued support for Ghana's
                educational system to develop future leaders. Appreciation is
                also extended from the Presbyterian Midwifery and Nursing
                Training College for the significant contributions made.
                <div className="mt-2">
                  <h3 className="font-bold">
                    Bonsu Ransford – SRC President – Presbyterian Midwifery
                    &amp; Nursing Training College
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                ……., Eminence Lead International education and leadership
                programs have built my confidence level as a medical student ,
                helped me with learning tools, how to plan and set personal
                goals , and how to take leadership initiatives. The organization
                has really helped me to excel academically, personally and
                emotional wise, I’m also a beneficiary of their sponsorship
                program for the past eight months. Big thank you to Eminence
                Lead International and its funding donors for this great
                initiatives.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Prince Yawanke – Student of Presbyterian Midwifery &amp;
                    Nursing Training College Agogo
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                …... I have learnt a lot from Eminence Lead International’s
                engagement program for the past months, I can boldly say that
                I’m ready for the future. I have learnt how to lead people with
                good leadership tools, self-presentation, confidence, public
                speaking skills, and the easy way to learn as student and how to
                stay motivated in everything I do. Before, I wasn’t ready for
                the future because of fear, ignorance and low self-esteem but
                now I feel great. Thanks to Eminence Lead International and Its
                donors for the great work done.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Kezia Quansah – Student of Presbyterian Midwifery &amp;
                    Nursing Training College Agogo
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                ……, I say big thank to Eminence Lead International for
                supporting my nursing education through their sponsorship
                program, empowering me to focus on my education and also
                building my confidence level to take my education serious. Now,
                I can boldly say that I’m confident enough all because of what I
                learnt from Eminence Lead International programs. I personally
                recommend the organizational to every institution, corporate
                entities, government, and donors to do more to shape and prepare
                the next generation of leaders for our country.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Agnes Gyimah – Student of Presbyterian Midwifery &amp;
                    Nursing Training College Agogo
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                ……, I recommend Eminence Lead International programs to every
                school and school management. The organization’s education and
                leadership programs have contributed massively to my school
                performance, build students confidence level, equipped the
                students with leadership skills and also transformed teaching
                skills of my teachers. Eminence Lead International is every
                institution partner, I’m grateful to the organization for their
                great work that they are doing to support education system in
                the country.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Mr. Charles Shabby – Director Paradise Intellectual
                    Academy, Accra
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                ….., I have learnt a lot from the workshop to support my company
                about planning and setting strategic goals, achieving more in a
                less time, capacity development , communication and
                presentation. Thank you to Eminence Lead International for
                organizing this great workshop to support business owners. I
                humble appeal to the organization to continue this program from
                time to time to build our capacities and managerial skills.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Mr. John Anku – Chief Executive Officer – Jadbecc Company
                    Limited
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                …... I’m a true beneficiary of Eminence Lead International’s
                Entrepreneurship program, I have learnt a lot as an
                entrepreneur, I now understand what a business plan is about and
                financial management. I’m also grateful to the organization for
                coaching and supporting me to register to formalize my business
                at the Registrar of Companies. Thank you Eminence Lead
                International and its funding donors.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Mrs. Mary Tetteh – Manager -Ultimate Catering and
                    Decoration Services Limited
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                ……, I want to say thank you to Eminence Lead International for
                their humanitarian work and community transformation project in
                Medie community. The presence of the organization and its
                engagement programs have caused massive change in the community
                and also shifted the lifestyle of people in the community for
                months of active engagements. I want to extend my preform
                gratitude to the management of Eminence Lead International and
                its funding donors for transforming the standard of living in my
                community.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Nii – Chief of Medie Community Ga Traditional Area
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[700px] mx-auto px-5 text-[14px] md:text-[18px] bg p-4 text-white border-4 border-orange-600 rounded-xl">
                ……., I have learnt how to set goals for myself, learn in a smart
                way as well as public speaking skills for the past three months
                of attending Eminence Lead International programs and workshops.
                The organization is really doing well in sharping and preparing
                the next generation of Ghana and beyond. God bless Eminence Lead
                International for the great work that they are doing for mother
                Ghana.
                <div className="mt-2">
                  <h3 className="font-bold">
                    - Twenebooah Bernice – Political Science Student –
                    University of Ghana
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
