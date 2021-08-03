export function setItem(MyFavorite) {
  const favoriteString = JSON.stringify(MyFavorite);
  localStorage.setItem('MyFavorite', favoriteString);
}

export function getItem() {
  return JSON.parse(localStorage.getItem('MyFavorite'));
}
