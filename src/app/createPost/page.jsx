"use client";
import { createPost } from "@/services/post";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./form.css";

export default function Page() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: Math.random(),
  });

  // const delay = () => {
  //     const prom = new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             // setSuccess(false)
  //             createPost({...post}).then((res) => {if(res){
  //                 console.log('hiiiiiiiiiiii', res)
  //                 // router.push(`/`)
  //                 setSuccess(true)
  //             }})
  //             resolve(true)
  //         }, 500);
  //     })
  //     return prom
  // }

  const handleClick = () => {
    try {
      // delay().then((res) => {
      //     console.log('res -------------', res)
      //     setSuccess(false)
      // })
      createPost({ ...post }).then((res) => {
        if (res) {
          // router.push(`/`)
          setSuccess(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancle = () => {
    router.push("/");
  };

  return (
    <>
      {post && success && (
        <card className={"display_data_card"}>
          <h3 className="px-3">Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </card>
      )}
      <input
        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        spellcheck="false"
        placeholder="Title"
        type="text"
        onChange={(e) => {
          setPost((prev) => {
            return { ...prev, title: e.target.value };
          });
        }}
      />
      <textarea
        className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
        spellcheck="false"
        placeholder="Describe everything about this post here"
        onChange={(e) =>
          setPost((prev) => {
            return { ...prev, body: e.target.value };
          })
        }
      ></textarea>
      <div className="icons flex text-gray-500 m-2">
        <svg
          className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <svg
          className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
        {success && <h4>Successfully added data</h4>}

        <div className="count ml-auto text-gray-400 text-xs font-semibold">
          0/300
        </div>
      </div>
      {/* <!-- buttons --> */}
      <div className="buttons flex">
        <div
          onClick={handleCancle}
          className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
        >
          Cancel
        </div>
        <div
          className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          onClick={handleClick}
        >
          Post
        </div>
      </div>
    </>
  );
}
