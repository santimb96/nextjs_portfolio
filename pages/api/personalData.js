import {
  db
} from "../../src/utils/firebaseConfig";

import {
  collection,
  getDocs
} from "firebase/firestore";

const personalDataCollection = collection(db, "personalData");

const handler = (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET":
      getPersonalData()
        .then(data => {
          // const personalData = data.map(doc => doc.data()); if collection has more than one document
          const personalData = data[0]?.data();
          res.status(200).json(personalData);
        })
        .catch(error => res.status(404).json(error));
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