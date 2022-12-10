const success = (res, inputData) => {
  console.log(inputData)
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

const methodNotAllowed = (res) => res.status(405).json({message: "Método no permitido"});

export {
  success,
  error,
  methodNotAllowed
};