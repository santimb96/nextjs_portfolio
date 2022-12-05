import {
  initApp as db
} from "../../src/settings/firebaseConfig";

import {
  collection
} from "firebase/firestore";

// import { getDocs } from "firebase/firestore";
import getData from "../../src/utils/apiWrapper";
import {
  success,
  error
} from "../../src/utils/resType";
// const skillCollection = collection(db(), "skill");
const COLLECTION_NAME = "skill";

const getSkill = (req, res) => {
  if (req?.method === "GET") {
    return getData(COLLECTION_NAME)
      .then(data => success(res, data))
      .catch(err => error(res, err));
  }
  return res.status(405).json({
    error: "Método no permitido"
  });
}

export default getSkill;