import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const [InputShake, setInputShake] = useState(false);

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    setpasswordArray(passwords);
    console.log(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const copyText = (text) => {
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

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

  const savePassword = async () => {
    if (form.site === "" || form.username === "" || form.password === "") {
      setInputShake(true); // add the shake class to the input box
      setTimeout(() => {
        setInputShake(false); // remove the shake class after 500ms
      }, 500);
      return;
    } else {
      const newForm = { ...form, id: uuidv4() };
      if (form.id) {
        await fetch("http://localhost:3000/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: form.id }),
        });
      }

      setpasswordArray([...passwordArray, newForm]);
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newForm),
      });
      setform({ site: "", username: "", password: "" });
      console.log([...passwordArray, { ...form, id: uuidv4() }]);
      console.log(form.id);
    }
  };

  const deletePassword = async (id) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ id }),
      });
    }
  };

  const editPassword = async (id) => {
    setform({ ...passwordArray.filter((i) => i.id === id)[0], id: id });
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="mx-auto py-[15px] px-[20px] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[60%] manager-container">
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
              className={`rounded-full border-green-400  outline-green-600 w-full px-[17px] py-[2px] ${
                InputShake ? "shake" : ""
              }`}
              type="text"
              name="site"
              id="site"
              placeholder="Enter Website URL"
              value={form.site}
              onChange={handleChange}
            />
          </div>
          <div className="flex smm:flex-col gap-5 justify-between w-full smm:gap-3">
            <div className="website-username w-[65%] smm:w-full  rounded-full border-[2px] border-green-400">
              <input
                className={`rounded-full border-green-400  outline-green-600 w-full px-[17px] py-[2px] ${
                  InputShake ? "shake" : ""
                }`}
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div className="website-password relative w-[35%] smm:w-full rounded-full border-[2px] border-green-400">
              <input
                ref={ref}
                className={`rounded-full border-green-400  outline-green-600 w-full px-[17px] py-[2px] ${
                  InputShake ? "shake" : ""
                }`}
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
          <h2 className="text-center font-bold text-xl py-4 text-green-600">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="text-center font-bold text-xl underline">
              No Passwords to show
            </div>
          )}
          {passwordArray.length != 0 && (
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded-md">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2 ">Site URL</th>
                    <th className="py-2 ">Username</th>
                    <th className="py-2 ">Password</th>
                    <th className="py-2 ">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-200">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center py-2 border border-white ">
                          <div className="flex justify-center gap-2 items-center">
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>
                            <div
                              className="lordiconCopy cursor-pointer pt-[3px]"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                style={{ width: 21 }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className=" text-center py-2 border border-white ">
                          <div className="flex justify-center gap-2 items-center">
                            <span>{item.username}</span>
                            <span
                              className="lordiconCopy cursor-pointer pt-[3px]"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                style={{ width: 21 }}
                              ></lord-icon>
                            </span>
                          </div>
                        </td>
                        <td className="text-center py-2 border border-white">
                          <div className="flex justify-center gap-2 items-center">
                            <span>{"*".repeat(item.password.length)}</span>
                            <div
                              className="lordiconCopy cursor-pointer pt-[3px]"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                style={{ width: 21 }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-2 border border-white">
                          <span
                            className="mx-2 cursor-pointer"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: 21 }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              style={{ width: 21 }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
