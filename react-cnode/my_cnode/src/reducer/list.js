export default function list(
    state = {
        data: [],
        loading: false,
    },
    action
) {
    switch (action.type) {
        case "LIST_UPDATE":
            return {
                data: state.data,
                loading: true,
            }
        case "LIST_UPDATE_SUCCESS":
            return {
                data: action.data,
                loading: false,
            }
        case "LIST_UPDATE_FAILED":
            return {
                data: action.data,
                loading: false,
            }
        default:
            return state;
    }
}