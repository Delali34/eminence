"use client";
import React, { useState } from "react";
import { Team } from "./Roles";
import { Board } from "./Board";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function Teams() {
  const [popupcontent, setpopupcontent] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);

  const changecontent = (board) => {
    if (board) {
      setpopupcontent([board]);
      document.body.style.overflow = "hidden";
    } else {
      setpopupcontent([]);
      document.body.style.overflow = "auto";
    }
    setpopuptoggle(!popuptoggle);
  };

  return (
    <div className="bg">
      <style>
        {`
        body {
          overflow: ${popuptoggle ? "hidden" : "auto"};
        }
        .pop-up-body {
          overflow-y: scroll;
        }
      `}
      </style>
      <div className="max-w-7xl mx-auto pt-20 pb-40 px-10">
        <div className="flex justify-center ">
          <h1 className="lg:text-4xl border-white border-2 font-mont font-semibold text-white md:text-3xl text-2xl text-center md:text-start p-4 rounded-[60px] ">
            Meet the Team
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 place-items-center md:grid-cols-2 grid-cols-1">
          {Team.map((board, index) => {
            return (
              <div key={index} className="p-10">
                <div
                  className="relative h-[350px] w-[300px] "
                  onClick={() => changecontent(board)}
                >
                  <Image layout="fill" src={board.image} className="" alt="" />
                  <div className="overlay-text flex justify-center items-center w-full text-white hover:underline cursor-pointer absolute bottom-4 right-0 left-0">
                    <div className="bg2 border-black border rounded-[40px] w-[250px] mx-auto p-2">
                      <h1 className="font-extrabold font-mont  text-[17px] text-center text-black">
                        {board.name}
                      </h1>
                      <h1 className="font-mont text-center font-semibold text-black text-[14px]">
                        {board.position}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {popuptoggle && (
          <div
            className="pop-up-container z-[1001] overflow-scroll fixed top-0 bottom-0 right-0 left-0 bg-[rgb(0.0,0.0,0.0,0.6)] "
            onClick={() => changecontent()}
          >
            <div className="pop-up-body md:w-[500px] w-[300px]  fixed top-0 bottom-0 bg2  right-0  h-[100%] ">
              <div
                onClick={() => changecontent()}
                className="pop-header justify-between flex text-center p-2 md:text-4xl text-2xl font-normal cursor-pointer bg2 text-black "
              >
                <button>
                  <AiFillCloseCircle className=" text-black hover:text-black" />
                </button>
              </div>
              <div className="pop-up-content">
                {popupcontent.map((pop, index) => {
                  return (
                    <div key={index} className="pop-up-card md:p-5 p-2">
                      <div className="md:px-32 md:pt-20 md:pb-10 pt-5 px-10 pb-5">
                        <Image
                          width={500}
                          height={500}
                          src={pop.image}
                          alt=""
                        />
                      </div>

                      <p className="text-center md:text-3xl text-black text-2xl font-bold">
                        {pop.name}
                      </p>
                      <p className="text-center md:text-2xl text-[17px] text-purple-600 pt-5">
                        {pop.position}
                      </p>
                      <p className="md:text-[18px] text-sm pt-2 px-5 text-black leading-7  pb-5 md:pb-0 ">
                        {pop.details}
                      </p>
                      <p className="md:text-[18px] text-sm  pt-2 px-5 text-black  leading-7  pb-5 md:pb-0 ">
                        {pop.details2}
                      </p>
                      <p className="md:text-[18px] text-sm pt-2 px-5 text-black  leading-7 pb-5 md:pb-0 ">
                        {pop.details3}
                      </p>
                      <p className="md:text-[18px] text-sm pt-2  px-5 text-black  leading-7  pb-40  md:pb-0">
                        {pop.points}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center ">
          <h1 className="lg:text-4xl border-white border-2 font-mont font-semibold mt-10 text-white md:text-3xl text-2xl text-center md:text-start p-4 rounded-[60px] ">
            Board Of Directors
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 place-items-center md:grid-cols-2 grid-cols-1">
          {Board.map((board, index) => {
            return (
              <div key={index} className="p-10">
                <div
                  className="relative h-[350px] w-[300px] "
                  onClick={() => changecontent(board)}
                >
                  <Image layout="fill" src={board.image} className="" alt="" />
                  <div className="overlay-text flex justify-center items-center w-full text-white hover:underline cursor-pointer absolute bottom-4 right-0 left-0">
                    <div className="bg2 border-black border rounded-[40px] w-[250px] mx-auto p-2">
                      <h1 className="font-extrabold font-mont  text-[17px] text-center text-black">
                        {board.name}
                      </h1>
                      <h1 className="font-mont text-center font-semibold text-black text-[14px]">
                        {board.position}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
