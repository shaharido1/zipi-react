import React from 'react';
import './Main.css';
import { RecipeList } from '../RecipeList/RecipeList';
import { IngredientList } from '../IngredientList/IngredientList';

export function Main() {
  return (
      <div className="main">
        <RecipeList/>
        <IngredientList/>
      </div>
  );
}


