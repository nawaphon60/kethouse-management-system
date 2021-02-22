import { Action } from '@ngrx/store';


export enum AccountTypes {
    SET_PROFILE = '[Account] SET_PROFILE',
    UPDATE_PROFILE = '[Account] UPDATE_PROFILE'
}

export class SET_PROFILE implements Action{
    readonly type = AccountTypes.SET_PROFILE;
    constructor(public playload: any){}
}

export class UPDATE_PROFILE implements Action{
    readonly type = AccountTypes.SET_PROFILE;
    constructor(public playload: any){}
}


export type AccountAction
    =  SET_PROFILE
    | UPDATE_PROFILE
