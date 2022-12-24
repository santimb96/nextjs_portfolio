import { saveData, checkAndReturnData } from './localStorage'

const getApiData = (COLLECTION_NAME, ENDPOINT) =>
  new Promise((resolve, reject) => {
    const hasData = checkAndReturnData(COLLECTION_NAME)
    if (hasData) {
      resolve(hasData)
    }
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        saveData(COLLECTION_NAME, data)
        resolve(data)
      })
      .catch((error) =>
        reject({
          message: 'Error al obtener los datos',
          error
        })
      )
  })

export default getApiData
