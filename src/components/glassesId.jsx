import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AI1 from '../images/AI-1.jpg';
import AI2 from '../images/AI-2.jpg';
import AI3 from '../images/AI-3.jpg';
import AR1 from '../images/AR-1.jpg'
import AR2 from '../images/AR-2.jpg'
import AR3 from '../images/AR-3.jpg'
import HUD1 from'../images/HUD-1.jpg'
import HUD2 from'../images/HUD-2.jpg'
import HUD3 from '../images/HUD-3.jpg'
import Smart1 from '../images/Smart-1.jpg'
import Smart2 from '../images/Smart-2.jpg'
import Smart3 from '../images/Smart-3.jpg'
import Sun1 from '../images/Sunglasses-1.jpg'
import Sun2 from '../images/Sunglasses-2.jpg'
import Sun3 from '../images/Sunglasses-3.jpg'


export default function GlassesId() {
    const { glasses_name } = useParams(); // Correctly access route parameter
    const [glasses, setGlasses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!glasses_name) {
            console.error("glasses_name is not provided");
            setError(new Error("Glasses name is missing"));
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                console.log("Fetching data for:", glasses_name); // Debug log
                const response = await fetch(`http://localhost:4005/api/glasses/${glasses_name}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch glasses data");
                }
                const json = await response.json();
                setGlasses(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [glasses_name]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!glasses) return <div>No glasses found</div>;

    const imageMap = {
        'AI-Enabled': [AI1, AI2, AI3],
        'Augmented-Reality': [AR1, AR2, AR3],
        'Heads-up-Display': [HUD1, HUD2, HUD3],
        'Smart': [Smart1, Smart2, Smart3],
        'Sun': [Sun1, Sun2, Sun3]
    };

    // Get images based on glasses.picture
    const images = imageMap[glasses.picture] || []; // Default to empty array if no match

    return (
        <div>
            <h1>{glasses.glasses_name} Glasses</h1>
            <ul>
                <li>
                    <strong>Price:</strong>
                    <div style={{paddingBottom: '1em'}}> ${glasses.price}</div>
                    <strong>Features:</strong>
                    <div style={{ whiteSpace: 'pre-wrap', paddingBottom: '1em'}}>{glasses.features}</div>
                    <strong>Specifications:</strong>
                    <div style={{ whiteSpace: 'pre-wrap', paddingBottom: '2em'}}>{glasses.specifications}</div>
                </li>

                <div>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${glasses.picture} ${index + 1}`} style={{ margin: '10px' }} />
                ))}
            </div>
            <button>Add to Cart</button>
            </ul>
        </div>
    );
}
