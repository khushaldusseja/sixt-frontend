import { 
    OFFER_LIST
} from '../actions/offerList';

const defaultState = { 
    offerList: [],
};

export default function offerList(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case OFFER_LIST:
            return payload;
    
        default:
            return state
    }
}

