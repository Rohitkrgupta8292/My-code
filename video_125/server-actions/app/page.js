"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";
export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-9 flex justify-center">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}} className="h-[200px] border-2 rounded-[15px] border-white bg-slate-500 p-[10px]"> 
        <div className="flex items-center justify-between">
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" className="text-white border-2 outline-1 outline-lime-400 rounded border-black bg-black mx-4 my-2" type="text" placeholder="your name" />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="add">Address:</label>
          <input name="add" id="add" className="text-white border-2 outline-1 outline-lime-400 rounded border-black bg-black mx-4 my-2" type="text" placeholder="your address" />
        </div>
        <div className="w-1/4 mx-auto">
          <button className="border-2 w-full rounded-[10px] p-2 bg-blue-600 my-2 hover:bg-blue-900">Submit</button>
        </div>
      </form>
    </div>
  );
}
