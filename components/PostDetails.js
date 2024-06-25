// Import dependencies and getPosts function
import React, { useState, useEffect } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../services/index2";

const PostDetail = ({ post }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        const shuffledPosts = shuffleArray(data); // Shuffle the posts array
        setPosts(shuffledPosts.slice(0, 4)); // Keep the first 5 shuffled posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const renderers = {
    a: ({ children, openInNewTab, href, ...rest }) => {
      // Check if the href starts with "http://" or "https://"
      const isExternalLink =
        href.startsWith("http://") || href.startsWith("https://");

      // If it's not an external link, prepend "http://"
      const correctedHref = isExternalLink ? href : `http://${href}`;

      return (
        <a
          href={correctedHref}
          target="_blank"
          rel={openInNewTab ? "noopener noreferrer" : ""}
          style={{ color: "blue" }}
          {...rest}
        >
          {children}
        </a>
      );
    },
    // Custom renderer for videos
    video: ({ src, title }) => (
      <video controls style={{ width: "100%" }} title={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    p: ({ children }) => <p className="paragraph">{children}</p>,
    // ... add other custom renderers if needed
  };

  return (
    <div className="max-w-[1400px] mx-auto px-5">
      {/* Post content */}
      <div className="w-full h-full relative font-mont">
        <Image
          className="w-full h-[60vh]  object-cover"
          src={post.featuredImage?.url}
          alt={post.title}
          width={1000}
          height={1000}
        />
        <div className="absolute -bottom-10 border-2 border-black max-w-4xl bg2 p-8 ">
          <h2 className="text-xl lg:text-3xl font-header font-bold">
            {post.title}
          </h2>
          <p className="text-primary font-semibold pt-5 text-sm">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-20"></div>
      {/* Post content */}
      <div className="max-w-[1400px] mx-auto w-full gap-10  px-5 ">
        <div className=" text-black">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-5">
            <div className="w-full lg:text-[18px] leading-7 text-sm">
              <RichText content={post.content.raw} renderers={renderers} />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="lg:text-[20px] font-bold text-[14px] mt-[10px] lg:mt-[0px]font-semibold mb-4">
            You might also like:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full  gap-5">
            {posts.map(({ node: randomPost }, index) => (
              <Link key={randomPost.slug} href={`/post/${randomPost.slug}`}>
                <div className="border p-5 h-[400px] " key={index}>
                  <Image
                    src={randomPost.featuredImage?.url}
                    alt={randomPost.title}
                    width={200}
                    height={100}
                    className="w-[500px] h-[220px] rounded-sm overflow-hidden object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-[15px] font-header font-semibold mb-2">
                      {randomPost.title}
                    </h4>
                    <p className="text-[10px]">
                      {moment(randomPost.createdAt).format("MMM DD, YYYY")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Random post suggestions */}
    </div>
  );
};

export default PostDetail;
