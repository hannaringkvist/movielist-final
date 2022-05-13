import React from "react";

function amountOfStars(grade){
  var text = [];
  for (var i = 0; i < grade; i++){
    text.push(<img key={i} src="/images/star.png" alt="Star"/>);
  }
  return text;
}

export default function Movie(props) {
  return (
    <li key={props.item.id} className="list-group-item">
      { props.item.title}
      {amountOfStars(props.item.grade)}
      <img src="/images/delete.png" alt="Delete movie" className="delete-movie-icon" onClick={() => props.deleteItem(props.item.id)}/>
    </li>
  )

  
}