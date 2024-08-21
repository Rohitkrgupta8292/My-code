import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto min-h-[90%]">
      <div className="image relative size-80">
        <Image
          className="mx-auto object-cover"
          src="https://wowslider.com/sliders/demo-32/data1/images/ashberry.jpg"
          // width={700}
          // height={700}
          fill={true}
          alt="this is slider image"/>
      </div>
      <div className="image relative size-80 my-3">
        <Image
          className="mx-auto object-cover"
          src="https://wowslider.com/sliders/demo-32/data1/images/ashberry.jpg"
          // width={700}
          // height={700}
          fill={true}
          alt="this is slider image"/>
      </div>
      <div className="image relative size-80 my-3">
        <Image
          className="mx-auto object-cover"
          src="https://wowslider.com/sliders/demo-32/data1/images/ashberry.jpg"
          // width={700}
          // height={700}
          fill={true}
          alt="this is slider image"/>
      </div>
      <div className="image relative size-80 my-3">
        <Image
          className="mx-auto object-cover"
          src="https://wowslider.com/sliders/demo-32/data1/images/ashberry.jpg"
          // width={700}
          // height={700}
          fill={true}
          alt="this is slider image"/>
      </div>
    </div>
  );
}
