import { useState, useEffect } from "react"


export default function GlassesId( glasses, index ){
    const [glassesData, setGlassesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/glasses/${ glasses.glasses_id}`)
            const json = await response.json()
            setGlassesData(json)
        }
        fetchData()
    },[glassesData])

    return (
        <div>
            <h1>{ glasses.glasses_name }</h1>
            <ul>
                <li key={index} style={{ padding: '1em' }}>
                    <div>Price: ${glasses.price}</div>
                    <div style={{ whiteSpace: 'pre-wrap' }}>Features: {glasses.features}</div>
                    <div style={{ whiteSpace: 'pre-wrap' }}>Specifications: {glasses.specifications}</div>
                </li>
            </ul>

        </div>
    )
}