import type { LabType } from "@/lib/labs"
import toast from "react-hot-toast"
import { CheckMark } from ".."

interface LabProps {
  lab: LabType
}

const Lab = ({ lab }: LabProps) => {
  const handleTrackLab = async (lab: LabType) => {
    console.log(lab)
    try {
      // check if ID is in the Labs by ID
      // if not add the lab - POST request
      // else update the lab by ID - PUT request
      toast.success("Lab Tracked Successfully!")
    } catch (error) {}
  }

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={lab.name}
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-blue-700 checked:before:bg-gray-900 dark:checked:border-gray-200 dark:checked:before:bg-gray-200 hover:before:opacity-10"
          id={lab.name}
          onChange={() => handleTrackLab(lab)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <CheckMark />
        </span>
      </label>
      <label
        className="mt-px font-light text-gray-200 cursor-pointer select-none"
        htmlFor={lab.name}
      >
        {lab.name}
      </label>
    </div>
  )
}

export default Lab
