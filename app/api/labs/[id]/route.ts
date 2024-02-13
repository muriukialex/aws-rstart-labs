import { NextResponse } from "next/server"
import Lab from "@/models/Lab"
import { LabRequestType } from "@/types/Requests"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id // mongoDB document lab id

    const updatedLabData: LabRequestType = await req.json()
    const { completed } = updatedLabData

    if (typeof completed !== "boolean") {
      return NextResponse.json(
        {
          message: "Invalid 'completed' value. Please provide a boolean value.",
        },
        { status: 400 },
      )
    }

    const updatedLab = await Lab.findByIdAndUpdate(
      id,
      { completed },
      { new: true },
    )

    if (!updatedLab) {
      return NextResponse.json({ message: "Lab not found" }, { status: 404 })
    }

    return NextResponse.json(
      { message: "Lab successfully updated", lab: updatedLab },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred updating this lab", error },
      { status: 500 },
    )
  }
}
