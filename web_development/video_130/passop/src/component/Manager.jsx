import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("password");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    const passwordInput = document.getElementById("password");
    if (
      ref.current.src.includes("icons/hidden.png") &&
      passwordInput.type === "password"
    ) {
      ref.current.src = "icons/eye.png";
      passwordInput.type = "text";
    } else {
      ref.current.src = "icons/hidden.png";
      passwordInput.type = "password";
    }
  };

  const savePassword = () => {
    if (form.site === "" || form.username === "" || form.password === "") {
      alert("Please fill all the fields");
    } else {
      setpasswordArray([...passwordArray, form]);
      localStorage.setItem(
        "password",
        JSON.stringify([...passwordArray, form])
      );
      setform({ site: "", username: "", password: "" });
      console.log([...passwordArray, form]);
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mx-auto py-[15px] h-[250px] px-[20px] sm:max-w-[70%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[60%]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-400">&lt;</span>
          <span>Pass</span>
          <span className="text-green-400">OP/&gt;</span>
        </h1>
        <p className="text-green-600 text-center text-[18px">
          Your own Password Manager!
        </p>
        <div className="flex flex-col p-4 gap-3">
          <div className="website-url rounded-full border-[2px] border-green-400">
            <input
              className="rounded-full border-green-400  outline-green-600 w-full px-[17px] py-[2px]"
              type="text"
              name="site"
              id=""
              placeholder="Enter Website URL"
              value={form.site}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-5 justify-between w-full smm:gap-[6px]">
            <div className="website-username w-[65%] smm:w-[50%]  rounded-full border-[2px] border-green-400">
              <input
                className="rounded-full border-green-400  outline-green-600 w-full  px-[17px] py-[2px]"
                type="text"
                name="username"
                id=""
                placeholder="Enter Username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div className="website-password relative w-[35%] smm:w-[50%] rounded-full border-[2px] border-green-400">
              <input
                ref={ref}
                className="rounded-full border-green-400  outline-green-600 w-full px-[17px] py-[2px]"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-2 top-[5px] cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} width={18} src="icons/hidden.png" alt="eye" />
              </span>
            </div>
          </div>
          <div className="password button bg-green-400 w-[110px] border border-green-700 rounded-full mx-auto hover:bg-green-300 py-[3px]">
            <button
              onClick={savePassword}
              className="w-full flex items-center justify-center gap-2 rounded-full"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              <span className="font-semibold">Save</span>
            </button>
          </div>
        </div>
        <div className="passwords">
          <h2 className="text-center font-bold text-xl py-4 text-green-600">Your Passwords</h2>
          {passwordArray.length === 0 && <div className="text-center font-bold text-xl underline">No Passwords to show</div>}
          {passwordArray.length !=0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2 ">Site URL</th>
                <th className="py-2 ">Username</th>
                <th className="py-2 ">Password</th>
                <th className="py-2 ">Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-200">
                {passwordArray.map((item, index)=>{
                    return <tr key={index}>
                <td className="text-center min-w-32 py-2 border border-white"><a href={item.site} target='_blank'>{item.site}</a></td>
                <td className="text-center min-w-32 py-2 border border-white">{item.username}</td>
                <td className="text-center min-w-32 py-2 border border-white">{item.password}</td>
                <td className="text-center min-w-32 py-2 border border-white">1961</td>
              </tr>
            })}
           
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
