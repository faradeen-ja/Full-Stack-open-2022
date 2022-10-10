import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = function () {
  const request = axios.get(baseUrl);
  return request.then(function (Response) {
    return Response.data;
  });
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(function (Response) {
    return Response.data;
  });
};

const query = (name) => {
  const request = axios.get(`${baseUrl}/query/${name}`);
  return request.then(function (Response) {
    return Response.data;
  });
};

const update = function (id, newObject) {
  const request = axios.put(`${baseUrl}/${id}`);
  return request.then((Response) => Response.data);
};

const delete_ = function (id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((Response) => Response.data);
};



const axiosMethods = {getAll, create, update, query, delete_}
export default axiosMethods
