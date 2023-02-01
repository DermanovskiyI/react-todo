import React from 'react'
import { useParams } from 'react-router'

export default function DynamicPage() {
    const params = useParams()
    return (
        <div>its Dynamic Page! id is: {params?.id}</div>
    )
}
