const {
  FETCH_PROFILES,
  Create_PROFILE,
  DELETE_PROFILE,
  
} = require("../Actions/Constants");

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_PROFILES:
      console.log("FETCH_PROFILES", action);
      return action.payload;
    case Create_PROFILE:
      // let newState = [...state];
      // newState.push(action.payload);
      // return newState;
      const payload=action.payload
 return [...state,payload]
    case DELETE_PROFILE:
      if (action.payload === 200) {
        let newstate = state.filter((item) => {
          return item.id !== action.id;
        });
        return newstate;
      } else {
        console.log("an error occured", action);
      }
      break;

    default:
      return state;
  }
}



