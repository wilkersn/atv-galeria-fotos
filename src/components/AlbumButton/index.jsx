import React from "react";

export default function AlbumButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.title}
    </button>
  )
}