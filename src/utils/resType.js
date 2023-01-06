const success = (res, inputData) => {
  //evaluate if the collection has more than 1 document or not
  const data = inputData?.length > 1 ? inputData?.map((doc) => doc?.data()) : inputData[0]?.data()
  res.status(200).json(data)
}

const error = (res, error) => {
  res.status(404).json({
    message: 'No se pueden obtener los datos',
    error
  })
}

export { success, error }
