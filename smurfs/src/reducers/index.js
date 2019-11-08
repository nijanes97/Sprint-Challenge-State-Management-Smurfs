import {
    FETCH_SMURF_LOADING,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILED,
    NEW_SMURF,
    POST_SMURF_LOADING,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILED
} from '../actions';

const initialState = {
    smurfs: [],
    error: null,
    isFetching: false,
    isPosting: false,
    newSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
};

function reducer(state = initialState, action){
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_SMURF_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_SMURF_FAILED:
            return {
                ...state,
                smurfs: [],
                isFetching: false,
                error: action.payload
            };
        case POST_SMURF_LOADING:
            return {
                ...state,
                isPosting: true,
                error: null
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: null,
                smurfs: [...state.smurfs, action.payload]
            };
        case POST_SMURF_FAILED:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };
        case NEW_SMURF:
            return{
                ...state,
                newSmurf: action.payload
            };
        default:
            return state;
    }
}

export default reducer;