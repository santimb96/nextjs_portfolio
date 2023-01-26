import getData from '../../src/utils/apiWrapper'

const COLLECTION_NAME = 'project'

const getProject = (req, res) => getData(req, res, COLLECTION_NAME)

export default getProject
