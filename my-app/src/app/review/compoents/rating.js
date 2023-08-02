'use client'
import { useState } from "react"

export const Rating = () => {
    const [rating, setRating] = useState(0)

    //listener 
    const onRate = () => {
        setRating(rating + 1)
    }

    return <>
        <h2>Review {rating}</h2>
        <button onClick={onRate}>+</button>
    </>
}