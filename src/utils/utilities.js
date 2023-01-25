const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

const sortByEndDate = (data) => {
  const formattedData = data?.map((doc) => {
    doc?.startDate && (doc.startDate = new Date(doc?.startDate))
    doc.endDate = new Date(doc?.endDate)

    return doc
  })

  return formattedData.sort((a, b) => (a.endDate < b.endDate ? 1 : -1))
}

const formatDate = (date) => {
  const month = date?.getMonth()
  return `${MONTHS[month]?.slice(0, 3)}. - ${date?.getFullYear()}`
}

export { sortByEndDate, formatDate }
