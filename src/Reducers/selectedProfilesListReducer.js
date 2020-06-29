export default function (state = null, action) {
  switch (action.type) {
    case "ANIMAL_CLICKED":
      return action.payload;

    default:
      return state;
  }
}
