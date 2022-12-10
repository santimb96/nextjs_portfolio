import getData from "../../src/utils/apiWrapper";

const COLLECTION_NAME = "experience";

const getExperience = (req, res) => getData(req, res, COLLECTION_NAME);

export default getExperience;