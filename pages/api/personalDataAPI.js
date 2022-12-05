import {
  initApp as db
} from "../../src/settings/firebaseConfig";

import {
  collection,
  getDocs
} from "firebase/firestore";

import { success, error } from "../../src/utils/resType";

const personalDataCollection = collection(db(), "personalData");

const handler = (req, res) => {
  switch (req?.method) {
    case "GET":
      getPersonalData()
        .then(data => success(res, data))
        .catch(err => error(res, err));
        break;
    default:
      res.status(404).json({
        error: "method not supported"
      });
  }
};

const getPersonalData = () => new Promise((resolve, reject) => {
  getDocs(personalDataCollection)
    .then(data => resolve(data?.docs))
    .catch(error => reject(error));
});

export default handler;