import React, { useState } from 'react'
import { connect } from 'react-redux';

function Bat(props) {
  //console.log(props);
  //const[bat, setBat] = useState(20);  // no need 
  return (
    <div>
        <h1>Bats: {props.batss}</h1>
        <button onClick={props.buyBat}> Buy Bats</button>
    </div>
  )
}

//component ko globle store se laake deta as props, isko ek state milta hai, connect method se.
const mapStateToProps = (state) =>{
  return {
    batss: state.bat.bats
  };
};

//ye fn ek action dispatch krta hai, yaani reducer ke pass jaayega aur switch case chalaayega
const mapDispatchToProps = (dispatch)=>{
  return {
    //action object hai yai  dispatch(action)
    buyBat: ()=>dispatch({type: "BUY_BAT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bat);