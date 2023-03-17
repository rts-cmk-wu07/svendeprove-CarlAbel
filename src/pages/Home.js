import Activities from "../components/Activities"

export default function Home() {
  return (
    <div className="Activities bg-[#5E2E53] px-2 scrollbar-hide">
      <h1 className="text-[36px] text-white py-4 font-ubuntu ml-5 ">Aktiviteter</h1>
      <Activities />
    </div>
  )
}
