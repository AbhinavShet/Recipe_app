import React from 'react';


const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>Calories : {calories}</p>
            <ol>
                <h3>Things u will need:</h3>{ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt=""></img>
        </div>
    )
}


export default Recipe;