import { FC } from "react"
import { Post } from "../interfaces"

interface EssaysProps {
  essays: Post[];
}

const Essays: FC<EssaysProps> = ({ essays }) => {
  return (
    <div>Essays</div>
  )
}

export default Essays
