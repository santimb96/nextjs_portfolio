import { collection } from 'firebase/firestore'
import { initApp as db } from '../../src/settings/firebaseConfig'
import { success, error, methodNotAllowed } from '../../src/utils/resType'
import { getDocsWithAuth } from './firebaseAuthOperations'

// get req, res type and collection name for fetch data
const getData = (req, res, COLLECTION_NAME) => {
  if (req?.method === 'GET') {
    return fetchData(COLLECTION_NAME)
      .then((data) => success(res, data))
      .catch((err) => error(res, err))
  }
  return methodNotAllowed(res)
}

// fetch data from firestore collection
const fetchData = (COLLECTION_NAME) => {
  const collectionRef = collection(db(), COLLECTION_NAME)
  return getDocsWithAuth(collectionRef)
}

export default getData
