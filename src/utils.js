import moment from 'moment';
import axios from 'axios';

// this date is the correct format for Github's search API
export const gitHubMonthQuery = moment().subtract(1, "month").format("YYYY-MM-DD");
// this provides a nice formatted date for the repo results
export const oneMonthFormat = moment().subtract(1, "month").format("Do MMMM YYYY");

export const gitHubUrl = (lang) =>
  `https://api.github.com/search/repositories?q=language:${lang}+created:>${gitHubMonthQuery}&sort=stars&per_page=3`;

export const axiosRequest = (urlStr) => {
  return axios.get(urlStr)
    .then(response => {
      console.log(`Status code: ${response.status}`);
      console.log('Response data array:\n', response.data.items);
      return response.data.items;
  });
};
