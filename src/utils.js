import moment from 'moment';
import axios from 'axios';

// this date is the correct format for Github's search API
export const gitHubMonthQuery = moment().subtract(1, "month").format("YYYY-MM-DD");
// this provides a nice formatted date for the repo results
export const oneMonthFormat = moment().subtract(1, "month").format("Do MMMM YYYY");

export const gitHubUrl = (lang, date) => `https://api.github.com/search/repositories?q=language:${lang}+created:>${date}&sort=stars&per_page=3`;

export const axiosRequest = (urlStr, that) => {
  axios.get(urlStr)
    .then(response => {
    // that.setState({data: response.data.items});
    console.log(response.data.items)
  });
};
