const ResponseState = Object.freeze({
    NOT_FETCHED: 'NOT_FETCHED',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR',
    POSTING: 'POSTING',
    POST_SUCCESS: 'POST_SUCCESS',
    POST_ERROR: 'POST_ERROR',
    API_ERROR: 'API_ERROR',
});

export default ResponseState;