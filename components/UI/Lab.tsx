import type { LabType } from "@/lib/labs"
import { saveLab, updateLab } from "@/service/requests"
import { LabRequestType } from "@/types/Requests"
import { ErrorResponse, LabResponseType } from "@/types/Responses"
import { ChangeEvent, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { CheckMark } from ".."

interface LabProps {
  email?: string | null
  lab: LabType
  data: { labs: Array<LabResponseType> } | null
  mutate: () => Promise<void>
}

const Lab = ({ email, lab, data, mutate }: LabProps) => {
  const [completed, setCompleted] = useState(false)

  const handleUpdateLabStatus = async ({
    payload,
  }: {
    payload: LabResponseType
  }) => {
    try {
      const response = await updateLab({ labId: payload._id, data: payload })
      const responseData = await response.data
      if (responseData) {
        toast.success("Lab status updated successfully")
      }
      mutate()
    } catch (error) {
      const errorResponse = error as ErrorResponse
      toast.error(errorResponse.errorMessage)
    }
  }

  const handleCreateLab = async ({ payload }: { payload: LabRequestType }) => {
    try {
      const response = await saveLab({ data: payload })
      const responseData = response.data
      if (responseData) {
        toast.success("Lab tracked successfully")
      }
      mutate()
    } catch (error) {
      const errorResponse = error as ErrorResponse
      toast.error(errorResponse.errorMessage)
    }
  }

  const handleTrackLab = async ({
    event,
    lab,
  }: {
    event: ChangeEvent<HTMLInputElement>
    lab: LabType
  }) => {
    const completedStatus = event.target.checked
    setCompleted(completedStatus)
    const labToUpdate = data?.labs.find((labData) => labData.name === lab.name)

    if (labToUpdate) {
      const payload: LabResponseType = {
        ...labToUpdate,
        completed: completedStatus,
      }

      handleUpdateLabStatus({ payload })
    } else {
      if (email) {
        const payload: LabRequestType = {
          name: lab.name,
          completed: completedStatus,
          email,
        }

        handleCreateLab({ payload })
      }
    }
  }

  useEffect(() => {
    if (data) {
      data?.labs.find((labData) => {
        if (labData.name === lab.name) {
          setCompleted(labData?.completed)
        }
      })
    }
  }, [data, lab.name])

  return (
    <div className="flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor={lab.name}
      >
        <input
          data-test={`lab-checkbox-${lab.labId}`}
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-900 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-blue-700 checked:before:bg-gray-900 hover:before:opacity-10 dark:border-white dark:checked:border-gray-200 dark:checked:before:bg-gray-200"
          id={lab.name}
          onChange={(e) => handleTrackLab({ event: e, lab })}
          checked={completed}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <CheckMark />
        </span>
      </label>
      <label
        className="mt-px cursor-pointer select-none font-light text-black dark:text-gray-200"
        htmlFor={lab.name}
      >
        {lab.name}
      </label>
    </div>
  )
}

export default Lab
