import {
  initApp as db
} from "../../src/utils/firebaseConfig";

import {
  collection,
  getDocs
} from "firebase/firestore";

const skillCollection = collection(db(), "skills");

const handler = (req, res) => {
  switch (req?.method) {
    case "GET":
      getSkill()
        .then(data => {
          const skill = data[0]?.data();
          res.status(200).json(skill);
        })
        .catch(error => res.status(404).json(error));
        break;
    default:
      res.status(404).json({
        error: "method not supported"
      });
  }
};

const getSkill = () => new Promise((resolve, reject) => {
  getDocs(skillCollection)
    .then(data => {
      resolve(data?.docs)
    })
    .catch(error => reject(error));
});

export default handler;