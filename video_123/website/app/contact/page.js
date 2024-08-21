import React from "react";
import Script from "next/script";

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("welcome to contact page")`}
      </Script>
      I am a contact page
    </div>
  );
};

export default contact;

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description:
    "This is contact page of Facebook and we can connect with the world facebook",
};
