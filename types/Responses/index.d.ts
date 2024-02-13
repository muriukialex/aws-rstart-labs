export interface LabResponseType {
  // email: string
  // name: string
  // completed: boolean

  completed: boolean
  createdAt: string
  email: string
  name: string
  updatedAt: string
  __v: number
  _id: string
}

export interface ErrorResponse {
  errorMessage: string
  error_code: string
  status: number
  status_code: number
}
