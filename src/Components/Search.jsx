import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Search = () => {
  const { apidata , abbreviateNumber , timefunction} = useGlobalContext();
  
  return (
    <section className="mt-6 w-[100%] overflow-hidden">
      {apidata?.contents?.map((e) => {

        // ######################################
        //      Video Related loop
        // ######################################
       <div className='font-bold text-base py-4'>Latest from code with harry</div>

        if (e?.type == "video") {
    
          return (
            <NavLink to={`videoplayer/${e?.video?.videoId}`}>
            <div className="grid auto-grid gap-3 mb-8 overflow-hidden">
              <div className="relative flex justify-end max-lg:inline-block">
                <img
                  src={e?.video?.thumbnails?.[0]?.url}
                  className="rounded-xl max-lg:w-full w-[80%]"
                  alt=""
                />
                <span className="bg-black bottom-[.5rem] right-2  px-2 py-1 rounded text-[.8rem] text-center  absolute">{timefunction(e?.video?.lengthSeconds)}</span>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-[1.2rem] max-md:text-[1rem] text-justify">
                  {e?.video?.title}
                </h2>
                <div className="flex flex-row gap-2">
                  <span className="text-gray-500">{`${abbreviateNumber(e?.video?.stats?.views)} Views`}</span>
                  <span className="text-gray-500">
                    {e?.video?.publishedTimeText}
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <img
                    className="rounded-full w-[1.5rem]"
                    src={e?.video?.author?.avatar?.[0]?.url}
                    alt=""
                  />
                  <span className="text-[.8rem] text-gray-500 font-semibold">
                  {e?.video?.author?.title}
                  </span>
                </div>
                <p className="text-[.8rem] text-gray-500 max-md:hidden">
                  {e?.video?.descriptionSnippet}
                </p>

                <div className="flex flex-row gap-2">
                  <span className="bg-gray-800 text-[.8rem] text-gray-400 rounded max-md:hidden">
                    {e?.video?.badges}
                  </span>
                  {/* <span className="bg-gray-800 text-[.8rem] text-gray-400 rounded">
                    CC
                  </span> */}
                </div>
              </div>
            </div>
            </NavLink>
          );
        }

        // ######################################
        //      Channel Related loop
        // ######################################

        else if (e?.type == "channel") {
          return (
            <div className="grid search_grid h-[12rem] border-b mb-8 border-b-neutral-700">
              <div className="flex justify-center items-center">
                <img
                  className="rounded-full w-[9rem] max-md:w-[18vw]"
                  src={e?.channel?.avatar?.[0]?.url}
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-[1.5rem] max-md:text-[1.2rem]">
                  {e?.channel?.title}
                  {e?.channel?.badges?.[0]?.text == "Verified" ? "✔" : ""}
                </h1>
                <div className="">
                  <span className="text-gray-500 mr-2">
                    {e?.channel?.username}
                  </span>
                  <span className="text-gray-500">
                    {e?.channel?.stats?.subscribersText}
                  </span>
                  <p className="text-[.8rem] text-gray-500 max-md:hidden">
                    {e?.channel?.descriptionSnippet}
                  </p>

                  <button className=" bg-white hidden max-md:block mt-2 text-black font-semibold w-24 h-8 rounded-2xl">
                  Subscribe
                </button>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button className=" bg-white max-md:hidden text-black font-semibold w-24 h-8 rounded-2xl">
                  Subscribe
                </button>
              </div>
            </div>
          );
        }

// ######################################
//      playlist Related loop
// ######################################    

        else if (e?.type == "playlist") {
       
          return (
            <div className="grid auto-grid mb-8 gap-3 max-md:mb-3 overflow-hidden">
              <div className="relative flex justify-end max-lg:inline-block">
                <img
                  src={e?.playlist?.thumbnails?.[3]?.url}
                  className="rounded-xl max-md:w-full w-[80%]"
                  alt=""
                />

                <span className="playlist bottom-0 opacity-70  rounded-br-xl rounded-tr-xl bg-black absolute flex justify-center items-center">
                  <div className="flex items-center flex-col">
                    <span className="text-center font-semibold text-base">
                      {e?.playlist?.stats?.videos}
                    </span>
                    <img src="/images/playlist.png" alt="" />
                  </div>
                </span>
              </div>

              <div className="flex flex-col ">
                <h2 className="font-semibold text-[1.2rem] text-justify">
                  {e?.playlist?.title}
                </h2>

                <div className="flex flex-row gap-2 mb-3">
                  <span className="text-[.7rem] text-gray-300 font-semibold">
                    {e?.playlist?.author?.title} {e?.playlist?.title}
                    {e?.playlist?.badges?.[0]?.text == "Verified" ? "✔" : ""}
                  </span>
                </div>

                <p className="text-[.8rem] text-gray-300 mb-2 max-md:hidden">
                  Introduction to JavaScript + Setup | JavaScript Tutorial in
                  Hindi #1 13:46 Variables in JavaScript | JavaScript Tutorial
                  in Hindi #2 13:34
                </p>

                <div className="flex flex-row">
                  <span className=" text-[.8rem] text-gray-400 font-semibold">
                    VIEW FULL PLAYLIST
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}

    </section>
  );
};

export default Search;
