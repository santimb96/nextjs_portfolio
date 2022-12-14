/* eslint-disable no-undef */
import { expect } from 'chai'
import getApiData from '../src/utils/apiData'

describe('get api data ', () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL

  it('get frontend data successfully', async () => {
    const data = await getApiData(`${BASE_URL}/api/skillAPI`)
    expect(data?.frontend?.length).to.equal(4)
  })

  it('get backend data successfully', async () => {
    const data = await getApiData(`${BASE_URL}/api/skillAPI`)
    expect(data?.backend?.length).to.equal(3)
  })

  it('get error message from backend', async () => {
    const error = await getApiData(`${BASE_URL}/api/skillAPI2`)
    expect(error?.message).to.equal('Error al obtener los datos')
  })
})
