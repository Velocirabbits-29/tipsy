function createQuery() {
  let query1 = "";
  let query2 = "";
  
  for (let i = 1; i <= 15; i++) {
    query1 += `strIngredient${i}, `
    query2 += `strMeasure${i}, `

  }
  console.log(query1);
  console.log(query2);
  return [query1, query2]
}

function createWhereQuery() {
  let query1 = "WHERE ";
  let query2 = "";
  
  for (let i = 1; i <= 15; i++) {
    query1 += `UPPER(strIngredient${i})=UPPER($1) OR `
  }
  return query1
}

function matchesCategory() {
  let query = '';
  
}

// 'SELECT iddrink, strdrink, strdrinkthumb, strinstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15 FROM cocktails WHERE strIngredient1=$1 OR strIngredient2=$1 OR strIngredient3=$1 OR strIngredient4=$1 OR strIngredient5=$1 OR strIngredient6=$1 OR strIngredient7=$1 OR strIngredient8=$1 OR strIngredient9=$1 OR strIngredient10=$1 OR strIngredient11=$1 OR strIngredient12=$1 OR strIngredient13=$1 OR strIngredient14=$1 OR strIngredient15=$1'
// console.log(createQuery());
// createQuery();
console.log(createWhereQuery());
