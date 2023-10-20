import React from 'react'
import '../component-styles/headingText.css'
function HeadingText(props) {
  return (
    <div id='heading-text-container'><h1 id='heading-text-h1'>{props.text}</h1>
    <p>{props.para}</p>
    </div>
  )
}

export default HeadingText;