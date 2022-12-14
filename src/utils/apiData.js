import { saveData, checkAndReturnData } from './localStorage'

const getApiData = (endpoint) =>
  new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) =>
        reject({
          message: 'Error al obtener los datos',
          error
        })
      )
  })

const getData = (COLLECTION_NAME, ENDPOINT) => {
  const hasData = checkAndReturnData(COLLECTION_NAME)
  if (!hasData) {
    getApiData(ENDPOINT)
      .then((data) => {
        saveData(COLLECTION_NAME, data)
        return data
      })
      .catch((error) => new Error(error))
  }
  return hasData
}

export default getData
