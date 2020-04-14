import React, { useState } from 'react';
import './Main.css';
import { recipes } from '../../mock/recpie';
import { RecipeInterface } from '../../interface/recipe.interface';
import { RecipieItem } from '../RecipieItem/RecipieItem';

export function Main() {
  const [recipiesToPresent, setRecipiesToPresent] = useState(recipes)
  const handleKeyUp = (event : any  ) => {
    setRecipiesToPresent(
        recipes.filter(({name}) => name.includes(event.target.value))
    )
  }

  return (
      <div className="main">
        {/*<input onKeyUp={handleKeyUp} />*/}
        <div className="RecipiesList">
          {
            recipiesToPresent
                  .map((recipieFromServer: RecipeInterface) =>
                  <RecipieItem recipieInput={recipieFromServer} key={recipieFromServer.id}/>
                )
          }
        </div>
      </div>
  );
}


