import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Movie from "./Movie";
import OrderByAlphaButton from "./OrderByAlphaButton";
import OrderByGradeButton from "./OrderByGradeButton";

export default function MovieApllication() {
  //todo är vår variabel, och setTodos är den vi ändrar listan med
  const [movies, setMovies] = useState([]);

  function addItem(title, grade){
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 :1;

    if(title != "" || grade != "0"){
      setMovies([...movies, {
        id: newId,
        title: title,
        grade: grade
      }]);
    }else{
      window.alert("Fyll i rätt information!")
    }
  }


function deleteItem(id){
  setMovies(movies.filter((item) => item.id !== id));
}

function orderByAlpha () {
  const sortedData = [...movies].sort((a,b) => {
    return a.title > b.title ? 1 : -1
  })
  setMovies(sortedData)
}

function orderByNumber(){
  const sortedData = [...movies].sort((a,b) => {
    return a.grade > b.grade ? 1 : -1
  })
  setMovies(sortedData)
}


return (
    <div>
      <AddMovieForm addItem={addItem}/>
      <ul>
        { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />)}
      </ul>
      <OrderByAlphaButton orderByAlpha={orderByAlpha}/>
      <OrderByGradeButton orderByNumber={orderByNumber}/>
    </div>
)

}
  