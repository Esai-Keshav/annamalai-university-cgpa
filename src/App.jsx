import React, { useEffect, useState } from "react";
import github from "./assets/github-mark.svg";
import linkedin from "./assets/linkedin.png";
const App = () => {
  const [marks, setmarks] = useState("");
  const [grade, setgrade] = useState("");
  const [data, setData] = useState({
    mark: [],
    grade: [],
  });
  const [cgpa, setCgpa] = useState(0);
  useEffect(() => {
    setCgpa((sum(data.grade) / sum(data.mark)).toFixed(2));
  }, [data]);

  function sum(arr) {
    return arr.reduce((a, b) => a + Number(b), 0);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-8 bg-[#e0e5ec] p-6">
        {/* Data Grid */}

        <h1 className="font-pop font-bold text-2xl md:text-4xl text-slate-700  text-center">
          Annamalai University CGPA Calculator
        </h1>
        <div className="grid w-fit grid-cols-2 gap-5 rounded-2xl p-6 shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]">
          <div className="flex flex-col items-center">
            <h1 className="mb-2 font-semibold text-gray-700 font-pop">
              Credit Hours
            </h1>
            {data.mark.map((m, index) => (
              <p
                key={index}
                className="my-1 rounded-xl bg-[#e0e5ec]  px-4 py-2 text-gray-800 shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]"
              >
                {m}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mb-2 font-semibold text-gray-700 font-pop">
              Credit Points
            </h1>
            {data.grade.map((m, index) => (
              <p
                key={index}
                className="my-1 rounded-xl  bg-[#e0e5ec] px-4 py-2 text-gray-800 shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]"
              >
                {Number(m).toFixed(1)}
              </p>
            ))}
          </div>
        </div>

        <h1 className="font-pop text-3xl font-semibold text-blue-600">
          {isNaN(cgpa) ? "0.00" : cgpa}
        </h1>

        {/* Input Section */}
        <div className="flex flex-col justify-center gap-4 ">
          <div className="flex container mx-auto gap-3">
            <input
              value={marks}
              type="number"
              placeholder="Enter credit hrs"
              onChange={(e) => setmarks(e.target.value)}
              className="rounded-xl bg-[#e0e5ec] mx-auto px-4 py-2 w-1/2 font-inter placeholder:font-inter text-gray-800 shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] focus:outline-none [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              value={grade}
              type="number"
              placeholder="Enter grade points"
              onChange={(e) => setgrade(e.target.value)}
              className="rounded-xl bg-[#e0e5ec] px-4 py-2 w-1/2  placeholder:font-inter font-inter text-gray-800 shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] focus:outline-none [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <button
            onClick={() => {
              if (marks && grade) {
                setData((prev) => ({
                  mark: [...prev.mark, marks],
                  grade: [...prev.grade, grade],
                }));
                setmarks("");
                setgrade("");
              }
            }}
            className="rounded-xl text-xl font-semibold text-emerald-600   bg-[#e0e5ec] px-6 py-2 font-pop shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]"
          >
            Add
          </button>
        </div>

        <footer className="mt-44 flex gap-4 items-center">
          <a
            href="https://github.com/Esai-Keshav/annamalai-university-cgpa"
            target="_blank"
          >
            <img src={github} alt="" className="size-7" />
          </a>
          <a href="https://www.linkedin.com/in/esai-keshav/" target="_blank">
            <img src={linkedin} alt="" className="size-7" />
          </a>
        </footer>

        <h3 className="font-pop text-base  text-center">
          Developed by{" "}
          <a
            href="https://github.com/Esai-Keshav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 "
          >
            Esai
          </a>
        </h3>
      </div>
    </>
  );
};

export default App;
