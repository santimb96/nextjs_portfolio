import getData from "../../src/utils/apiWrapper";

const COLLECTION_NAME = "certification";

const getCertification = (req, res) => getData(req, res, COLLECTION_NAME);

export default getCertification;