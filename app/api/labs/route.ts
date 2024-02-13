import Lab from "@/models/Lab"
import { LabRequestType } from "@/types/Requests"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get("email")

    if (!email || email?.trim() === "") {
      return NextResponse.json(
        {
          message: "Please provide an email",
        },
        {
          status: 400,
        },
      )
    }

    const labs = await Lab.find({ email })
    return NextResponse.json({ labs }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching user's labs", error },
      { status: 500 },
    )
  }
}

export const POST = async (req: Request) => {
  try {
    const body: LabRequestType = await req.json()
    const newLab: LabRequestType = {
      email: body.email,
      name: body.name,
      completed: true,
    }

    await Lab.create(newLab)
    return NextResponse.json(
      { message: "Lab successfully created" },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred tracking this lab", error },
      { status: 500 },
    )
  }
}
