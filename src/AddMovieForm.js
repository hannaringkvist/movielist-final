import React, { useRef } from "react";

export default function AddMovieForm(props) {

  const titleRef = useRef();
  const gradeRef = useRef();

  //Hela formuläret där användaren skriver sin input om e film.
  return (
    <div>
     <legend>Lägg till en film</legend>
     
      <label for="title-field">Titel:</label>
      <input type="text" id="title-field" className="form-control" ref={titleRef}/>

      <label for="rating-field">Betyg:</label>

      <select type="text" id="rating-field" className="form-control" ref={gradeRef}>
        <option value="0">Välj betyg här...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button type="submit" className="btn btn-success mt-3" onClick={() => props.addItem(titleRef.current.value, gradeRef.current.value)}>Spara film</button>
    </div>
  )
}