const initialState = {
  nameState: "",
  email: "",
  department: "",
  floor: "",
  comfort: [],
  parking: "",
  price: "",
  image: "",
  elevator: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        nameState: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_DEPARTMENT':
      return {
        ...state,
        department: action.payload,
      };
    case 'SET_FLOOR':
      return {
        ...state,
        floor: action.payload,
      };
    case 'SET_PRICE':
      return {
        ...state,
        price: action.payload,
      };
    case 'SET_PARKING':
      return {
        ...state,
        parking: action.payload,
      };
    case 'SET_ELEVATOR':
      return {
        ...state,
        elevator: action.payload,
      };
    case 'SET_IMAGE':
      return {
        ...state,
        image: action.payload,
      };
    case 'SET_COMFORT':
      return {
        ...state,
        comfort: [...state.comfort, action.payload],
      };
    case 'DELETE_COMFORT':
      return {
        ...state,
        comfort: state.comfort.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
