import {
  collection
} from "firebase/firestore";

import {
  initApp as db
} from "../../src/settings/firebaseConfig";

import {
  getDocs
} from "firebase/firestore";

import {
  success,
  error,
  methodNotAllowed
} from "../../src/utils/resType";

// get req, res type and collection name for fetch data
const getData = (req, res, COLLECTION_NAME) => {
  if (req?.method === "GET") {
    return fetchData(COLLECTION_NAME)
      .then(data => success(res, data))
      .catch(err => error(res, err));
  }
  return methodNotAllowed(res);
}

// fetch data from firestore collection
const fetchData = (COLLECTION_NAME) => new Promise((resolve, reject) => {
  const collectionRef = collection(db(), COLLECTION_NAME);
  getDocs(collectionRef)
    .then(data => resolve(data?.docs))
    .catch(error => reject(error));
});

export default getData;