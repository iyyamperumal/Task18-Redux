import Product from "../../components/product";
const initialState = {
    count: 1,
    price: 109.95,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "inc_countprice":
            return {
                ...state,
                count: state.count + 1,
                price: state.price + initialState.price,
            };
        case "dec_countprice":
            return {
                ...state,
                count: state.count - 1,
                price: state.price - initialState.price,
            };
        case "reset-countprice":
            return {
                ...state,
                count: initialState,
                price: initialState,
            };
        default:
            return state;
    }
};

export default counterReducer;