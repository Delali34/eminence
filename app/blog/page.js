"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getPosts } from "@/services/index2";
import Navbar2 from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";

import PostCard from "@/components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div className="">
      <Navbar2 />
      <Mobilebar />
      <div className="">
        <section className="bg relative p-10 h-[400px]">
          <div className="max-w-[1400px] mx-auto px-5">
            <h1 className="flex text-white absolute lg:top-[40%] top-[35%] lg:text-5xl text-4xl font-header font-bold">
              Discover the latest product News, innovation and how they affect
              you!
            </h1>
          </div>
        </section>
        <section className="bg2 pb-20">
          <div className="max-w-[1400px] mx-auto px-5">
            <h1 className="py-10 text-3xl font-header">Latest Updates</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 2lg:grid-cols-3 gap-10">
              {posts.map((post, index) => (
                <div key={index} className="flex ">
                  <PostCard post={post.node} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
