const sortByEndDate = (data) => {
  const formattedData = data?.map((doc) => {
    doc.startDate = new Date(doc.startDate)
    if (doc?.startDate) {
      doc.endDate = new Date(doc.endDate)
    }
    return doc
  })

  return formattedData.sort((a, b) => (a.endDate < b.endDate ? 1 : -1))
}

const formatDate = (date) => {
  const month = date.getMonth() + 1
  return `${month >= 10 ? month : `0${month}`}/${date.getFullYear()}`
}

export { sortByEndDate, formatDate }
