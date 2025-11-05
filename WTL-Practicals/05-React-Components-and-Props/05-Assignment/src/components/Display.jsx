import React from 'react'

const Display = () => {
    let arr = [{ id: 1, name: "First" }, { id: 2, name: "Second" }, { id: 2, name: "third" }]
    return (
        <div>
            {
                arr.map((x) => {
                    return(
                    <>
                        <h1>id : {x.id}</h1>
                        <h1>name : {x.name}</h1>
                    </>)
                })
            }

        </div>
    )
}

export default Display
