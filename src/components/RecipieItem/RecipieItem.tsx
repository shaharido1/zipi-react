import React from 'react';
import './RecipieItem.css';
import { RecipeInterface } from '../../interface/recipe.interface';

export interface RecipieItemProp {
  recipieInput: RecipeInterface
}


export function RecipieItem (properties : RecipieItemProp) {
  return (
      <div className="recipeItem">
        <div className="displayProp">
          <div className="label">name: </div>
          <div className="PropValue">{properties.recipieInput.name}</div>
        </div>
        <div className="displayProp">
          <div className="label">id: </div>
          <div className="PropValue">{properties.recipieInput.id}</div>
        </div>
      </div>
  );
}

