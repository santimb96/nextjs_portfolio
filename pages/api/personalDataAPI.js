import getData from "../../src/utils/apiWrapper";

const COLLECTION_NAME = "personalData";

const getPersonalData = (req, res) => getData(req, res, COLLECTION_NAME);

export default getPersonalData;