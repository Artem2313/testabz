import axios from 'axios';

export const fetchUsers = countUsers => {
  return axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${countUsers}`,
  );
};

export const fetchToken = () => {
  return axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token',
  );
};

export const fetchPositions = () => {
  return axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
  );
};

export const addUser = data => {
  const userToken = JSON.parse(window.localStorage.getItem('token'));
  const axiosConfig = {
    headers: {
      Token: userToken,
    },
  };

  const formData = new FormData();
  formData.append('position_id', data.position_id);
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('photo', data.photo);

  return axios.post(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    formData,
    axiosConfig,
  );
};
