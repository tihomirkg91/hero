export const setDataToLocalStorage = (data) => {
  const arr = []
  const previousData = JSON.parse(localStorage.getItem('BOOKMARKED'))
  arr.unshift(data)
  if (previousData !== null) {
    arr.unshift(...previousData)
  }
  localStorage.setItem('BOOKMARKED', JSON.stringify(arr))
}
