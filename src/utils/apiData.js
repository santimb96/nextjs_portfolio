const getApiData = (endpoint) => new Promise((resolve, reject) => {

  fetch(endpoint)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject({
      message: "Error al obtener los datos",
      error
    }));
});

export default getApiData;