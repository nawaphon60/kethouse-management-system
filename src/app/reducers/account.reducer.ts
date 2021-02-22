import { AccountTypes, AccountAction } from '../actions';


interface accountState {
    me: any
    g: string
}


let InitialState: accountState = {
    me: {},
    g:''
}

export function AccountStore(state = InitialState, action: AccountAction): accountState {
    switch (action.type) {
        case AccountTypes.SET_PROFILE:
            // console.log(action.playload)
            return {
                ...state,
                me: action.playload
            }
        default:
            return state
    }
}


