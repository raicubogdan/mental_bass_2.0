
const getDateFromTimestamp = (timeStamp: any): string => {
  const date = timeStamp.toDate()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  console.log(year)

  return `${day}.${month}.${year}`
}

export default getDateFromTimestamp