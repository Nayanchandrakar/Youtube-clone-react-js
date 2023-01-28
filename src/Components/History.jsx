import React from "react";
import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router-dom";
const History = () => {
  
  const {historydata , ClearHistory} = useGlobalContext()
  let navigation = useNavigate()


  return (
    <>
      <section className="mt-6 w-[100%] overflow-hidden">
        <div className="flex justify-between flex-row mb-7">
          <div
            className={`flex flex-row py-1 gap-4 font-medium  rounded px-[1rem]`}
          >
            <img src={"/images/sidebar5.png"} className="w-[1.3rem]" alt="" />
            <span>Watch history</span>
          </div>

          <div
            className={`text-center font-medium py-1 rounded-full px-[1rem]`}
          >
            <span onClick={() => ClearHistory(navigation)} className="text-white cursor-pointer hover:text-red-700">Clear all history</span>
          </div>
        </div>


        {historydata()?.map(e => {
          return(
            <div className="grid auto-grid gap-2 mb-8 overflow-hidden">
            <div className="relative flex justify-end max-lg:inline-block">
              <img
                src={e?.thumbnail}
                className="rounded-xl  max-lg:w-full w-[80%]"
                alt=""
              />
              <span className="bg-black bottom-[.5rem] right-2  px-2 py-1 rounded text-[.8rem] text-center  absolute">{e?.time}</span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-[1.2rem] text-justify">
                {e?.title}
              </h2>
              <div className="flex flex-row gap-2">
                <span className="text-gray-500">4.8k views</span>
                <span className="text-gray-500">
                  {e?.publish}
                </span>
              </div>

              <div className="flex flex-row gap-2">
                <img
                  className="rounded-full w-[1.5rem]"
                  src={e?.avtarimage}
                  alt=""
                />
                <span className="text-[.8rem] text-gray-500 font-semibold">
                {e?.authorTitle}
                </span>
              </div>
              <p className="text-[.8rem] text-gray-500">
                {e?.video?.descriptionSnippet}
              </p>

              <div className="flex flex-row gap-2">
                <span className="bg-gray-800 text-[.8rem] text-gray-400 rounded">
                  {e?.video?.badges}
                </span>
                {/* <span className="bg-gray-800 text-[.8rem] text-gray-400 rounded">
                  CC
                </span> */}
              </div>
            </div>
          </div>
          )
        })}

      </section>
    </>
  );
};
export default History;
