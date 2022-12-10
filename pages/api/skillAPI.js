import getData from "../../src/utils/apiWrapper";

const COLLECTION_NAME = "skill";

const getSkill = (req, res) => getData(req, res, COLLECTION_NAME);

export default getSkill;