import { LabRequestType } from "@/types/Requests"
import { LabResponseType } from "@/types/Responses"
import Request from "./request-config"

export const getLabs = ({ email }: { email?: string }) => {
  return Request.get<{ labs: Array<LabResponseType> }>({
    url: "/labs",
    params: {
      email,
    },
  })
}

export const saveLab = ({ data }: { data: LabRequestType }) => {
  return Request.post<{ message: string }>({
    url: "/labs",
    data,
  })
}

export const updateLab = ({
  labId,
  data,
}: {
  labId: string
  data: LabResponseType
}) => {
  return Request.put<
    Promise<
      | {
          message: string
          lab: LabResponseType
        }
      | {
          message: string
        }
    >
  >({
    url: `/labs/${labId}`,
    data,
  })
}
