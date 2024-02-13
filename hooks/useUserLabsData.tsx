import { getLabs } from "@/service/requests"
import { LoadingState } from "@/types/Common"
import { ErrorResponse, LabResponseType } from "@/types/Responses"
import { useCallback, useEffect, useState } from "react"

const useUserLabsData = ({ email }: { email?: string | null }) => {
  const [isLoading, setIsLoading] = useState<LoadingState>({
    status: "loading",
  })
  const [data, setData] = useState<{ labs: Array<LabResponseType> } | null>(
    null,
  )
  const [error, setError] = useState<ErrorResponse | null>(null)

  const handleGetUserLabs = useCallback(async () => {
    if (email) {
      try {
        const response = await getLabs({ email })
        const responseData = response.data
        setData(responseData)
        setIsLoading({
          status: "idle",
        })
      } catch (error) {
        const errorResponse = error as ErrorResponse
        if (errorResponse) {
          setError(errorResponse)
        }

        setIsLoading({
          status: "idle",
        })
      }
    }
  }, [email])

  useEffect(() => {
    handleGetUserLabs()
  }, [email, handleGetUserLabs])

  return {
    isLoading,
    data,
    error,
    mutate: handleGetUserLabs,
  }
}

export default useUserLabsData
