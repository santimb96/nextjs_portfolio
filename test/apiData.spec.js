import { expect } from "chai";
import getApiData from "../src/utils/apiData";

const URL_BASE = process.env.URL || "http://localhost:3000";

describe("get api data ", () => {
  it("should be successfully", async () => {
    const data = await getApiData(`${URL_BASE}/api/skillAPI`);
    expect(data?.frontend?.length).to.equal(4);
  });

  it("should be successfully", async () => {
    const data = await getApiData(`${URL_BASE}/api/skillAPI`);
    expect(data?.backend?.length).to.equal(3);
  });

  it("should be failed", async () => {
    const error = await getApiData(`${URL_BASE}/api/skillAPI2`);
    expect(error?.message).to.equal("Error al obtener los datos");
  });
})