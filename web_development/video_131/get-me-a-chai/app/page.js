// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col justify-center items-center gap-4 h-[30vh]">
        <div className="font-bold text-4xl sm:text-5xl flex gap-2 items-center justify-center">
          Buy Me a Chai{" "}
          <span>
            <img className="w-[45px] sm:w-[50px]" src="/tea.gif" alt="tea" />
          </span>
        </div>
        <p className="font-medium px-2 sm:px-0 text-center">
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-[3px] opacity-10"></div>

      <div className="text-white container mx-auto py-16 px-2">
        <h2 className="text-3xl font-bold text-center mb-9">
          Your Fans can buy you a Chai
        </h2>
        <div className="flex gap-3 sm:gap-5 justify-around px-2 sm:px-0">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-400 py-5 px-[10px]">
              <img width={88} src="/man.gif" alt="" />
            </div>
            <p className="font-bold text-center">Fund YourSelf</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-400 py-2 px-2">
              <img width={98} src="/coin.gif" alt="" />
            </div>
            <p className="font-bold text-center">Fund YourSelf</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <div className="rounded-full bg-slate-400 py-6 px-6">
              <img width={68} src="/group.gif" alt="" />
            </div>
            <p className="font-bold text-center">Fund YourSelf</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-[3px] opacity-10"></div>

      <div className="text-white container mx-auto py-16 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-9">
          Learn More About Us
        </h2>
        <iframe className="w-[340px] h-[225px] sm:w-[560px] sm:h-[315px]"  src="https://www.youtube.com/embed/1_NseBRK23w?si=_wvmeecHeKsA-Edg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
