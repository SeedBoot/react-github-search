import axios from 'axios';

export default function request(url) {
  axios.get(url)
    .then(response => {
    // const stuff = response.data.items;
    this.setState({data: response.data.items});
    console.log(response.data.items)
  });
}
