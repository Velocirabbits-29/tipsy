import React from 'react'



function MyList(props) {
  const { userFavs, userRecipes } = props;

  const Title = (userFavs.length === 0) ? 'My Recipes' : 'My Favorites';

  let ListItems, List;
  List = (userFavs.length === 0) ? userRecipes : userFavs;

  // Fill out logic to create 'ul' element for each recipe/favorite (need db info)
  ListItems = List.map();

  return (
    <div>
      <h2>{ Title }</h2>
      { ListItems }
    </div>
  )
}

export default MyList
