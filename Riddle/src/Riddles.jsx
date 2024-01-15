import React, { useState, useEffect } from 'react';

export default function Riddles() {
    const [riddles, setRiddles] = useState([]);
    const [load, setLoad] = useState(true);

    async function fetchData() {
        const RiddleEndpoint = "https://api.api-ninjas.com/v1/riddles";
        const apiKey = 'odilUIkiekL5T4dEizAcwg==hfJVz5auiNpd5tho';

        const response = await fetch(RiddleEndpoint, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        const data = await response.json();
        setLoad(false);
        setRiddles(data);
    }

    useEffect(() => {
        console.log("hii");
        fetchData();
    }, []);

    return (
        <div>
            <p style={{ opacity: load ? 1 : 0, transition: '1s opacity' }}>Loading.....</p>
            {riddles.length > 0 && (
                <div>
                    <h2>{riddles[0].title}</h2>
                    <p style={{ color: 'red' }}>{riddles[0].question}</p>
                    <p style={{ color: 'green' }}>{riddles[0].answer}</p>
                </div>
            )}
            <button onClick={fetchData}>Click</button>
        </div>
    );
}
