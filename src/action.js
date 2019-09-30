const axios = require('axios');

function getData() {
    return axios.get('http://localhost:8000/transaction');
}

export function getTransaction() {
    return (dispatch) => {
        return getData().then(response =>
            dispatch({
                type: 'FETCH_DATA',
                payload: response.data
            }));
    }
}