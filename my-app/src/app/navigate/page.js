'use client';

import { useRouter } from "next/navigation"

export default function Navigator() {
    const router = useRouter();
    return <div>
        <button onClick={() => {
            router.push('/comments')
        }}>Post</button>
    </div>
}