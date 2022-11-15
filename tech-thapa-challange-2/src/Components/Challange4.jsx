import React from 'react'

const Challange4 = () => {
    const sum = (a,b) =>{
        return (
            a+b
        )
    }

    const Abstract = (a,b) =>{
        return (
            a-b
        )
    }

    const Div = (a,b) =>{
        return (
            a%b
        )
    }
    const Multi = (a,b) =>{
        return (
            a*b
        )
    }
  return (
    <>
    <ul>
        <h1>sum of 20 & 10 is :--:  {sum(20,10)}</h1>
        <br/>
        <h1>Abstract of 20 & 10 is :--: {Abstract(20,10)}</h1>
        <br/>
        <h1>Division of 100 & 10 is :--:  {Div(100,10)}</h1>
        <br/>
        <h1>Multiplication of 10 & 10 is :--:  {Multi(10,10)}</h1>
    </ul>
    </>
  )
}

export default Challange4