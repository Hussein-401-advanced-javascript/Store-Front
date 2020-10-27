import superagent from 'superagent';

let apiCategories = 'http://api-testtt.herokuapp.com/api/v1/categories';
let apiProducts = 'http://api-testtt.herokuapp.com/api/v1/products'
// action creator is a function that returns an object
// return a function from my action creator
export const getRemoteData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(apiCategories).then(data=> {
        // call my action after getting the API response.
        dispatch(getAction(data.body));
    });
}
export const getRemoteProductsData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(apiProducts).then(data=> {
        // call my action after getting the API response.
        dispatch(getProductAction(data.body));
    });
    
}

export const reducerQuntity = (body, id) => (dispatch) => {
    // return a fucntion that will call superagent API
    let apiProducts = `apiProducts/${id}`
    return superagent.put(apiProducts).send(body).then(data=> {
        // call my action after getting the API response.
        dispatch(putProductAction(data.body));
    });
    
}

// acton creator function 
const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

const getProductAction = payload => {
    return {
        type: 'GET_Products',
        payload: payload
    }
}

const putProductAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}