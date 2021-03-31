import axios from 'axios';
const { REACT_APP_API_HOST } = process.env;

export const getWhiskies = (filterObj) => {
  console.log(filterObj);
  const endpoint = `${REACT_APP_API_HOST}/v1/whiskies`
  const params = {
    ratingMin: filterObj.ratings.min,
    ratingMax: filterObj.ratings.max,
    type: filterObj.type
  }
  return axios.get(endpoint, { params: params } )
}

export const getWhisky = (id) => {
  const endpoint = `${REACT_APP_API_HOST}/v1/whiskies/${id}`
  return axios.get(endpoint)
}