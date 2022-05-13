import React from "react";

export default function OrderByAlphaButton(props) {
  return (
    <button className="btn btn-sm btn-primary" onClick={() => props.orderByAlpha()}>Sortera i alfabetisk ordning</button>
  )
}