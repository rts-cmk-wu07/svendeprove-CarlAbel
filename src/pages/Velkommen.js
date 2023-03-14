import backgroundImage from "../Assets/splash-image.jpg"

export default function Velkommen() {
  return (
    <div className="Welcome">
      <img
        src={backgroundImage}
        alt="welcome-background"
        className="absolute z-10 object-cover w-screen h-screen"
      />

      <div className="absolute z-20 bottom-24 h-94">
        <div className="-translate-y-48">
          <h1 className="text-white w-11 ml-14 text-[36px] leading-[3.8rem]">
            Landrup
          </h1>
          <div className="flex-col items-center">
            <p className="text-[#E856EB] text-stroke italic text-[76px] ml-14 ">Dans</p>
            <div className="border bg-[#913693] border-[#913693] h-[14px] w-[233px] drop-shadow-lg -translate-y-4"></div>
          </div>
        </div>
        <input
          className="bg-[#5E2E53] text-[#E9E9E9] text-center text-[18px] absolute px-16 py-4 -bottom-8 rounded-xl left-[90px]"
          type="submit"
          value="Kom i gang"
        />
      </div>
    </div>
  )
}
