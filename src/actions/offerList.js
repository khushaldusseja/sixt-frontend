
export const OFFER_LIST = 'OFFER_LIST';

export const setOffers = (object) => (dispatch, getState) => {
    return dispatch({
        type: OFFER_LIST,
        payload: object
    });
}
