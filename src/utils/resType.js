const success = (res, inputData) => {
  const data = inputData?.map(doc => doc?.data())
  res.status(200).json(data);
}

const error = (res, error) => {
  console.log(error)
  res.status(404).json({
    message: "No se pueden obtener los datos",
    error
})
};

export {success, error};
