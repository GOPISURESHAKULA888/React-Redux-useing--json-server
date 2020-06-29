 import { combineReducers } from 'redux';
import profileReducer from './ProfilesReducer';
import selectedProfilesListReducer from './selectedProfilesListReducer';
import FetchProfilesReducers from './FetchProfilesReducers';

const rootReducers = combineReducers({
 //state:(state={})=>state
 profiledata:profileReducer,
 selectedProfilesdata:selectedProfilesListReducer,
 FetchProfilesdata:FetchProfilesReducers,

});

export default rootReducers;
