import React from 'react'

const ContentEditable = () => {
    const name = `Vikash Kumar Lal`;
  return (
    <>
        <h1 contentEditable={true}>My Name is {name}</h1>
    </>
  )
}

export default ContentEditable