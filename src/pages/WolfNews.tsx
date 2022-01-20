import { FC } from "react"
import { Post } from "../interfaces"

interface WolfNewsProps {
    wolfNews: Post[];
}

const WolfNews: FC<WolfNewsProps> = ({ wolfNews }) => <div>Wolf News</div>

export default WolfNews
