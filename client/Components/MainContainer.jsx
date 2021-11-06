import React from 'react'
import Photo from '.........url'

function MainContainer(props) {
  const { image } = props;
  // Logic for switching which components will render on the left
  // Image or My Favorite Drinks
  let LEFT;

  switch(image) {
    case true:
      LEFT = <img src={Photo} />

    case false:
      LEFT = <MyList title='My Favorite Drinks' favs={} />
  }

  // Logic for switching which components will render on the right
  let RIGHT;

  return (
    <div>
      {/* Left Side */}
      <div>
        { LEFT }
      </div>

      {/* Right Side */}
      <div>
      { RIGHT }
      </div>
    </div>
  )
}

export default MainContainer
