import React from "react";

export default function OrderByGradeButton(props) {
  return (
    <div className="my-2">
          <button className="btn btn-sm btn-primary" onClick={() => props.orderByNumber()}>Sortera i betygsordning</button>
    </div>
  )
}