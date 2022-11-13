import React from 'react'
// import ""

const Challange3 = () => {

    const curDate = new Date().getHours()
    let curStr = "";
    // const cssColor={}

    // Basic CONDITIONAL OPERATION
    // if(curDate<1 && curDate>=12){
    //     curStr = "Good Morning"
    // }
    // else if(curDate<=20){
    //     curStr = "Good After-noon";
    // }
    // else{
    //     curStr = "Good Night";
    // }

    // TERNARY OPERATION
    (curDate<1 && curDate>=12 ? curStr = "Good Morning":curDate<=20?curStr = " Good After-noon " :curStr = "Good Night" )
    
  return (
    <div className='main2'>
       <h1>Hello Sir ,<span className='mains' > {curStr}</span></h1>
    </div>
  )
}

export default Challange3