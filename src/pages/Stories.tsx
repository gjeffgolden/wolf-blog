import { FC } from "react"
import { Post } from "../interfaces"

interface StoriesProps {
    stories: Post[],
}

const Stories: FC<StoriesProps> = ({ stories }) => <div>Stories</div>

export default Stories
