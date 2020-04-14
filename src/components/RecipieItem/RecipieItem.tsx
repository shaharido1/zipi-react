import React from 'react';
import './RecipieItem.css';
import { RecipeInterface } from '../../interface/recipe.interface';

export interface RecipieItemProp {
  recipieInput: RecipeInterface
}
export function RecipieItem ({recipieInput} :RecipieItemProp) {
  return (
      <div className="recipeItem">
        <div className="displayProp">
          <div className="label">name: </div>
          <div className="PropValue">{recipieInput.name}</div>
        </div>
        <div className="displayProp">
          <div className="label">id: </div>
          <div className="PropValue">{recipieInput.id}</div>
        </div>
      </div>
  );
}

