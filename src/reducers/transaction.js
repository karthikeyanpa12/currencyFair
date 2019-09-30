
const initialState = [];

export default function transaction(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload;
        default:
            return state;
    }
}