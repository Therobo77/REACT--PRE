import React from 'react'

const Clalange2 = () => {
    const Name = `Vikash`
    const CrDate = new Date().toLocaleDateString();
    const CrTime = new Date().toLocaleTimeString();
  return (
    <div>
        <h1>Hey My Name is {Name}</h1>
        <p>Current Date {CrDate}</p>
        <p>Current Time {CrTime}</p>
        
    </div>
  )
}

export default Clalange2