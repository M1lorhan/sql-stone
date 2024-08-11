import { useState, useEffect } from "react"


export default function Glasses(){
    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/glasses')
            const json = await response.json()
            setGlasses(json)
        }
        fetchData()
    },[])

    return (
        <div>
            <h1>Glasses</h1>
            <ul>
                { glasses.map((glasses, index)=>(
                    <li key={index} style={{ padding: '1em' }}>
                        <div>{glasses.glasses_name}</div>
                        <div>Price: ${glasses.price}</div>
                        <div style={{ whiteSpace: 'pre-wrap' }}>Features: {glasses.features}</div>
                        <div style={{ whiteSpace: 'pre-wrap' }}>Specifications: {glasses.specifications}</div>
                    </li>
                ))}
            </ul>

        </div>
    )
}