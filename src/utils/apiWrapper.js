import {
  collection
} from "firebase/firestore";

import {
  initApp as db
} from "../../src/settings/firebaseConfig";

import {
  getDocs
} from "firebase/firestore";

const getData = (COLLECTION_NAME) => new Promise((resolve, reject) => {
  const collectionRef = collection(db(), COLLECTION_NAME);
  getDocs(collectionRef)
    .then(data => resolve(data?.docs))
    .catch(error => reject(error));
});

export default getData;