export const useRecent = (item, setRecent) => {
  const recent = JSON.parse(localStorage.getItem('recent'));
  if (recent && recent.length > 3) {
    recent.pop();
  }
  if (recent && recent.length > 0) {
    for (let i = 0; i < recent.length; i++) {
      try {
        console.log(recent[i]._id);
        if (recent[i]._id == item._id) {
          recent.splice(i, 1);
        }
      } catch (e) {
        console.log('Error: ', e, 'Item: ', recent);
      }
    }
    localStorage.setItem('recent', JSON.stringify([...recent, item]));
    setRecent(JSON.parse(localStorage.getItem('recent')));
  } else {
    localStorage.setItem('recent', JSON.stringify([item]));
    setRecent(JSON.parse(localStorage.getItem('recent')));
  }
  // localStorage.removeItem('recent');
};
