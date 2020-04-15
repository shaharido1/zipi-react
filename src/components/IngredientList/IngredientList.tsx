import React from 'react';
import './IngredientList.css';
import { recipesMock } from '../../mock/recpie';
import { RecipeInterface } from '../../interface/recipe.interface';
import { RecipieItem } from '../RecipieItem/RecipieItem';

export function IngredientList() {
  return (
        <div>asds!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
        // <div className="RecipiesList">
        //   {
        //     recipesMock
        //           .map((recipe: RecipeInterface) =>
        //             <RecipieItem recipieInput={recipe} key={recipe.id}/>
        //         )
        //   }
        // </div>
  );
}




// const [recipiesToPresent, setRecipiesToPresent] = useState(recipes)
// const handleKeyUp = (event : any  ) => {
//   setRecipiesToPresent(
//       recipes.filter(({name}) => name.includes(event.target.value))
//   )
// }
{/*<input onKeyUp={handleKeyUp} />*/}
