import axios from 'axios'
export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED'
export const NEW_SMURF = 'NEW_SMURF'
export const POST_SMURF_LOADING = 'POST_SMURF_LOADING'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILED = 'POST_SMURF_FAILED'

export const smurfFetchLoading = () => ({ type: FETCH_SMURF_LOADING });
export const smurfPostLoading = () => ({ type: POST_SMURF_LOADING });

export const smurfFetchSuccess = data => ({
    type: FETCH_SMURF_SUCCESS,
    payload: data
});
export const smurfPostSuccess = data => ({
    type: POST_SMURF_SUCCESS,
    payload: data
});

export const smurfFetchFailed = error => ({
    type: FETCH_SMURF_FAILED,
    payload: error
});
export const smurfPostFailed = error => ({
    type: POST_SMURF_LOADING,
    payload: error
});

export const newSmurf = newSmurf => {
    return { type: NEW_SMURF, payload: newSmurf };
}
export function fetchSmurfs(){
    return function(dispatch){
        dispatch(smurfFetchLoading());
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('fetch', res);
                dispatch(smurfFetchSuccess(res.data))
            })
            .catch(error => dispatch(smurfFetchFailed(error)))
    };
}

export function postSmurfs(props){
    return function(dispatch){
        dispatch(smurfPostLoading);
        axios
            .post('http://localhost:3333/smurfs', props)
            .then(res => {
                console.log('post', res);
                dispatch(smurfPostSuccess(res));
            })
            .catch(error => dispatch(smurfPostFailed(error)))
    }
}