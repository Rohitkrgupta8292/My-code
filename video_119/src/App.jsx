import { useState } from "react";
import "./App.css";
import { set, useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // if(data.username !== "Rohit"){
    //   setError("Form", {message:"Username is invalid"})
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <div className="form">
          <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
            <input
              {...register("username", {
                required: { value: true, message: "field is requied" },
                minLength: { value: 3, message: "minimum length is 3" },
                maxLength: { value: 8, message: "maximum length is 8" },
              })}
              type="text"
              className="text"
              placeholder="Username"
            />
            {errors.username && (
              <div className="red">{errors.username.message}</div>
            )}
            <input
              {...register("password", {
                required: { value: true, message: "field is requied to fill" },
                minLength: { value: 7, message: "minimum length is 7" },
              })}
              type="password"
              className="password"
              placeholder="Password"
            />
            {errors.password && (
              <div className="red">{errors.password.message}</div>
            )}
            <input disabled={isSubmitting} type="submit" value="Submit" />
            {errors.Form && <div className="red">{errors.Form.message}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
