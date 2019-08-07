export default function detail(
    state = {
        data: {
            author: {
                avatar_url: "",
                loginname :"",
            },
            title: "",
            create_at:"",
            reply_count: 0,
            replies:[],
        },
        loading: false,
    },
    action
) {
    switch (action.type) {
        case "DETAIL_UPDATE":
            return {
                data: state.data,
                loading: true,
            };
        case "DETAIL_UPDATE_SUCCESS":
            return {
                data: action.data,
                loading: false,
            };
        case "DETAIL_UPDATE_FAILED":
            return {
                data: state.data,
                loading: false,
            };
        default:
            return state;
    }
}