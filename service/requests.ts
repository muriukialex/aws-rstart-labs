import Request from "./request-config"

export const updateLabStatus = ({
  photoId,
  data,
}: {
  photoId: number
  data: { title: string }
}) => {
  return Request.put<
    Promise<{
      title: string
      id: number
    }>
  >({
    url: `/update-lab`,
    data,
  })
}
