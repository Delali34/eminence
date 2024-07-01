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
    <div className="bg-gray-100 min-h-screen">
      <Navbar2 />

      <header className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/water.jpg" // Replace with an appropriate background image
            alt="Header background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative lg:px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl  sm:text-5xl lg:text-6xl font-bold font-header leading-tight mb-4">
            Empowering Change, Inspiring Hope
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl">
            Discover how our initiatives are transforming lives and communities
            around the world.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <h2 className="text-3xl font-bold font-header text-gray-900 mb-8">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <PostCard post={post.node} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
