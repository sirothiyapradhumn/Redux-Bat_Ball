import React, { useState } from 'react'
import { connect } from 'react-redux';

function Ball({ballss, buyBall, sellBall}) {
  //console.log(props);
  //const[bat, setBat] = useState(20);  // no need 
  return (
    <div>
        <h1>Balls: {ballss}</h1>
        <button onClick={buyBall}> Buy Ball</button>
        <button onClick={sellBall}> Sell Ball</button>
    </div>
  )
}

//component ko globle store se laake deta as props, isko ek state milta hai, connect method se.
const mapStateToProps = (state) =>{
  return {
    ballss: state.ball.balls
  };
};

//ye fn ek action dispatch krta hai, yaani reducer ke pass jaayega aur switch case chalaayega
const mapDispatchToProps = (dispatch)=>{
  return {
    //action object hai yai  dispatch(action)
    buyBall: ()=>dispatch({type: "BUY_BALL"}),

    sellBall: ()=>dispatch({type: "SELL_BALL"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball);