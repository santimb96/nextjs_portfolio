import getApiData from "./apiData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(3),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("get data from differents endpoints", async () => {
  const endpoint = "/api/skillAPI";
  const data = await getApiData(endpoint);

  expect(data.length).toStrictEqual(3);
  expect(fetch).toHaveBeenCalledTimes(1);
});