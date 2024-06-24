"use client";
import React from "react";
import { getPostDetails } from "@/services/index2";
import PostDetail from "@/components/PostDetails";
import Navbar2 from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";
import Link from "next/link";

import Author from "@/components/Author";

const Page = ({ params }) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostDetails(params.slug);
        setPost(postData);
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (!post) {
    return (
      <div className="bg-white flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section>
      <Navbar2 />
      <Mobilebar />

      <div className="bg-white h-[100%]">
        <PostDetail post={post} />
        <div className="flex justify-center py-10 ">
          <Link href="/blog" className="bg p-2 text-white rounded-sm">
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
