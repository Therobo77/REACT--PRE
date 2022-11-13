import React from 'react'

const Challange3 = () => {

    const curDate = new Date().getHours()
    let curStr = "";


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
    (curDate<1 && curDate>=12 ? curStr = "Good Morning" :curDate<=20?curStr = "Good After-noon" :curStr = "Good Night" )
    
  return (
    <div>
       <h1>Hello Sir ,<span> {curStr}</span></h1>
    </div>
  )
}

export default Challange3