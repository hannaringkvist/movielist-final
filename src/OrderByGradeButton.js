import React from "react";

export default function OrderByGradeButton(props) {
  return (
    <button className="btn btn-sm btn-primary" onClick={() => props.orderByGrade()}>Sortera i numrerisk ordning</button>
  )
}