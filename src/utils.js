import moment from 'moment';
import axios from 'axios';

// this date is the correct format for Github's search API
export const monthQuery = (num = 1) =>
    moment().subtract(num, "month").format("YYYY-MM-DD");

// this provides a nice formatted date for the repo results
export const monthFormat = (num = 1) =>
    moment().subtract(num, "month").format("Do MMMM YYYY");

// export 

export const axiosRequest = ({ lang, numberOfResults, num }) => {
    const gitHubUrl =
        'https://api.github.com/search/repositories?q=' +
        'language:' + lang +
        '+created:>' + monthQuery(num) +
        '&per_page=' + numberOfResults +
        '&sort=stars';

    return axios.get(gitHubUrl)
        .then(response => {
            console.log(`Status code: ${response.status}`);
            console.log('Response data array:\n', response.data.items);
            return response.data.items;
        });
};
