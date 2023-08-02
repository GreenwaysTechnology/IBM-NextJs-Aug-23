'use client';

import Like from "./like"
import Dislike from "./dislike"
import { useState } from "react"

//client component
export default function Reviews() {
    const [rating, setRating] = useState(100)
    return <>
        <Like />
        <Dislike />
        <h1>Rating {rating}</h1>
    </>
}