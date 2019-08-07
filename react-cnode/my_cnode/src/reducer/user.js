export default function detail(
    state = {
        data: {
            avatar_url: "",
            loginname: "",
            score: "",
            create_at:"",
            recent_topics :[],
            recent_replies: [],
        },
        loading: false,
    },
    action
) {
    switch (action.type) {
        case "USER_UPDATE":
            return {
                data: state.data,
                loading: true,
            };
        case "USER_UPDATE_SUCCESS":
            return {
                data: action.data,
                loading: false,
            };
        case "USER_UPDATE_FAILED":
            return {
                data: state.data,
                loading: false,
            };
        default:
            return state;
    }
}