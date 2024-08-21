"use client";
import React, { useState } from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";

const PaymentPage = ({ username }) => {
//   const { data: session } = useSession();

  const [paymentform, setpaymentform] = useState({});

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };
  const pay = async (amount) => {
    //get the order id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;

    var options = {
      key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-fit w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1722729600&token-hash=uD8NWNHY4QogM8Eap1XAdek8mQQjgAm5opRSjBgVcA4%3D"
          alt="cover photo"
        />
        <div className="profile-pic absolute bottom-[-50px] 2xl:bottom-[-60px] md:right-[42%] right-[35%] lg:right-[44%] 2xl:right-[46%] xl:right-[45%]">
          <img
            className="w-[130px]  border hover:border-2 border-white rounded-3xl"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1721347200&token-hash=ilQrGE1k4EI5VgvG6PNYyDQLXsBBD_T9SXbYM5nS9FM%3D"
            alt="profile"
          />
        </div>
      </div>
      <div className="info my-20 flex flex-col justify-center items-center gap-2">
        <span className="font-bold text-xl text-center">
          @{username} - Jules&Ben's Animated Assets
        </span>
        <span className="text-slate-400"> Creating Animated art for VTT's</span>
        <span className="text-slate-400">
          12,006 members · 86 posts · $15,820/release
        </span>
        <div className="payments flex gap-3 w-[80%] mt-10">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-8">
            {/* show list of all supporters as a leaderboard */}
            <h2 className="font-bold text-2xl my-5">Supporters.</h2>
            <ul className="text-lg mx-2">
              <li className="my-2 flex gap-2 items-center">
                <div className="rounded-full bg-slate-200 p-1 border-2 border-black">
                  <img width={25} src="avatar.gif" alt="user-avatar" />
                </div>
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a
                  message "I support you bro. Lots of 💕"
                </span>
              </li>
              <li className="my-2 flex gap-2 items-center">
                <div className="rounded-full bg-slate-200 p-1 border-2 border-black">
                  <img width={25} src="avatar.gif" alt="user-avatar" />
                </div>
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a
                  message "I support you bro. Lots of 💕"
                </span>
              </li>
              <li className="my-2 flex gap-2 items-center">
                <div className="rounded-full bg-slate-200 p-1 border-2 border-black">
                  <img width={25} src="avatar.gif" alt="user-avatar" />
                </div>
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a
                  message "I support you bro. Lots of 💕"
                </span>
              </li>
            </ul>
          </div>
          <div className="makepayments w-1/2 bg-slate-900 rounded-lg p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mt-5">Make a Payment</h2>
            <div className="flex gap-3 flex-col justify-center items-end">
              {/* input for name and message */}
              <input
                onChange={handleChange}
                value={paymentform.name}
                type="text"
                name='name'
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                onChange={handleChange}
                value={paymentform.message}
                type="text"
                name='message'
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                onChange={handleChange}
                value={paymentform.amount}
                type="text"
                name='amount'
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                // onClick={()=> pay(paymentform.amount+"00")}
                className="text-white bg-gradient-to-br from-slate-700 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2"
              >
                Pay
              </button>
            </div>
            <div className="bg-white h-[2px] opacity-10"></div>
            {/* or choose from an amount */}
            <div className="flex gap-2 h-[50px]">
              <button
                className="bg-slate-800 w-1/4 p-3 rounded-lg hover:border hover:bg-slate-900"
                onClick={() => pay(1000)}
              >
                ₹10
              </button>
              <button
                className="bg-slate-800 w-1/4 p-3 rounded-lg hover:border hover:bg-slate-900"
                onClick={() => pay(2000)}
              >
                ₹20
              </button>
              <button
                className="bg-slate-800 w-1/4 p-3 rounded-lg hover:border hover:bg-slate-900"
                onClick={() => pay(5000)}
              >
                ₹50
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
