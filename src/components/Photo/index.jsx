import React, { useState } from "react";

import './index.css'

export default function Photo(props) {

  const [urlImg, setUrlImg] = useState(props.thumbnailUrl)



  return (
    <button className="content-photos" onClick={props.onClick}>
      <img className="photos" src={urlImg} alt="photo"
        height={178} />
    </button>
  )
}