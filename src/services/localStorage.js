export const setRankingInLocalStorage = (ranking) => {
  localStorage.setItem('ranking', JSON.stringify(ranking));
};

export const getRankingFromLocalStorage = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  return ranking || [];
};
