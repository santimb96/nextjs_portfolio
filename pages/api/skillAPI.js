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
  error,
  methodNotAllowed
} from "../../src/utils/resType";
// const skillCollection = collection(db(), "skill");
const COLLECTION_NAME = "skill";

const getSkill = (req, res) => getData(req, res, COLLECTION_NAME);

export default getSkill;