import React from 'react'

const ContentEditable = () => {
    const name = `Vikash Kumar Lal`;
    const img1 = "https://avatars.githubusercontent.com/u/105917542?v=4"
    const img2 = "https://avatars.githubusercontent.com/u/105917542?v=4"
    const img3 = "https://avatars.githubusercontent.com/u/105917542?v=4"
    const googleLink="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14"
  return (
    <>
        <h1 contentEditable={true}>My Name is {name}</h1>
        <img src={img1} alt="Vikash"/>
        <img src={img2} alt="Vikash"/>
        <a href={googleLink} target="_aa">
        <img src={img3} alt="Vikash"/>
        </a>
    </>
  )
}

export default ContentEditable