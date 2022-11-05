import React from 'react'

const content = () => {
    // const move_pixel = 50;

    const box = {
      width: "100px",
      height: "100px",
      backgroundColor: "brown"
    }

    // const move = () => {
    //   const moved_pixel += move_pixel,
    //   margin : moved_pixel+"px"
    // }
    
  return (
      <div>
        <div style={box}></div>
        <div><button onClick={StyleSheet.move}>클릭</button></div>
      </div>
    )
}

export default content