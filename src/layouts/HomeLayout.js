import React, { useState } from 'react'

export default function HomeLayout() {

    const [numberCount, setNumberCount] = useState(1);

    const addNumber = () => {
        setNumberCount(numberCount + 1)
    };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div>
        <p style={{ fontSize: '60px', color: 'green' }}>{numberCount}</p>
        <button onClick={addNumber} style={{ color: 'white', backgroundColor: 'blue', padding: '10px', borderRadius: '10px', fontSize: '18px' }}>Add One</button>
        </div>
    </div>
  )
}
