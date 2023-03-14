import TrainerCard from "../components/TrainerCard"


import ClassDetailsCard from "../components/ClassDetailsCard"

export default function ClassDetails() {
  return (
    <div className="ClassDetails">
      <div className="">
        <ClassDetailsCard />
      </div>
      <div className="">
        <h1 className="text-[28px]">Trainer</h1>
        <TrainerCard />
      </div>
    </div>
  )
}
