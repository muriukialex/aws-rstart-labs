import { LoadingState } from "@/types/Common"
import { ErrorResponse, LabResponseType } from "@/types/Responses"
import Divider from "./Divider"
import { weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix, weekSeven, weekEight, weekNine, weekTen, weekEleven } from "@/lib/labs"
import { Session } from "next-auth"
import Lab from "./Lab"

interface UserLabsProps {
  isLoading: LoadingState
  error: ErrorResponse | null
  data: { labs: Array<LabResponseType> } | null
  mutate: () => Promise<void>

  userData: Session | null
}

const UserLabs = ({
  isLoading,
  error,
  data,
  mutate,
  userData,
}: UserLabsProps) => {
  if (isLoading.status === "loading") {
    return <div>Fetching your labs...</div>
  }

  if (error !== null) {
    return (
      <div>
        <button
          onClick={() => mutate()}
          className="p-1 px-4 rounded hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Refresh your labs
        </button>
      </div>
    )
  }

  return (
    <div>
      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 1</h2>
        {weekOne.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 2</h2>
        {weekTwo.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 3</h2>
        {weekThree.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 4</h2>
        {weekFour.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 5</h2>
        {weekFive.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 6</h2>
        {weekSix.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 7</h2>
        {weekSeven.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 8</h2>
        {weekEight.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 9</h2>
        {weekNine.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 10</h2>
        {weekTen.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 11</h2>
        {weekEleven.map((lab) => (
          <Lab
            key={lab.labId}
            lab={lab}
            data={data}
            email={userData?.user?.email}
            mutate={mutate}
          />
        ))}
      </div>

    </div>
  )
}

export default UserLabs
