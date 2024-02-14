
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('component mounted........')
    }, [])


    const handleClick = () => {
        setCount(count + 1);
        console.log('state updated:', count + 1)
    }

    return (
        <>
            <div className="card text-center myCard" style={{ width: "15rem" }}>
                <div className="card-body">
                    <h1 className="card-title">{count}</h1>
                    <button className="btn btn-primary" onClick={handleClick}>Add</button>
                </div>
            </div>
        </>
    )
}

export default Home