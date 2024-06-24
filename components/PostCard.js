import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/services/index2";
import { MdArrowOutward } from "react-icons/md";

const PostCard = ({ post }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className=" mt-5">
      <div className="">
        <div className="relative  cursor-pointer border-2 border-black h-[480px] w-full">
          <div className="overflow-hidden rounded-sm flex justify-center p-5 pt-5">
            <Link href={`/post/${post.slug}`}>
              <Image
                width={1000}
                height={1000}
                className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover  hover:scale-105 transition duration-300 "
                src={post.featuredImage.url}
                alt="the bro code blog"
              />
            </Link>
          </div>

          <Link href="/">
            <div className="text-primary mt-5 px-5">
              <h2 className="lg:text-xl font-semibold">
                {post.categories[0]?.name || "Category"}
              </h2>
            </div>
          </Link>
          <Link href={`/post/${post.slug}`}>
            <div className="   text-black py-3 px-5">
              <h2 className="md:text-[16px] text-[14px] hover:underline ">
                {post.title}
              </h2>
            </div>
            <div className=" flex items-center  text-black py-3 px-5">
              <h2 className="md:text-[16px] text-[14px] hover:underline ">
                Read more
              </h2>
              <MdArrowOutward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
