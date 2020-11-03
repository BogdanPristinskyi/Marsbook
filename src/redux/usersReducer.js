const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



const initialState = {
    users: [
        {
            id: 1,
            fullName: 'Bogdan Pristinskyi',
            avatar:'https://www.speakers.ca/wp-content/uploads/2013/10/chrishadfield.jpg',
            followed: false,
            status: `I'm developer of this React App`,
            location: { city: 'Montreal', country: 'Canada' }
        },
        {
            id: 2,
            fullName: 'Emil Pristinskyy',
            avatar:'https://www.speakers.ca/wp-content/uploads/2013/10/chrishadfield.jpg',
            followed: true,
            status: 'I am a little developer',
            location: { city: 'Montreal', country: 'Canada' }
        },
        {
            id: 3,
            fullName: 'Olena Pristinska',
            avatar:'https://www.speakers.ca/wp-content/uploads/2013/10/chrishadfield.jpg',
            followed: true,
            status: `I am the developer's wife`,
            location: { city: 'Montreal', country: 'Canada' }
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
case SET_USERS:{
    return {...state, users: [...state.users, ...action.users]}
}
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u=> {
                    if (u.id === action.userId){
                        return{ ...u, followed: false}
                    }
                    return u;
                })
            }

        default:
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC =(users)=>({type: SET_USERS, users })


export default usersReducer;