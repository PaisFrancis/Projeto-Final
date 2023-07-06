import { AppAction, AppState } from "../context/AppContext";

export function reducer(state: AppState, { type, payload }: AppAction) {
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload, isLoggedIn: true };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, user: undefined, isLoggedIn: false };
    case "SET_ITEMS":
      return { ...state, items: payload };
    case "SET_RESERVATIONS":
      return { ...state, reservations: payload };
    case "ADD_RESERVATION":
      return { ...state, reservations: [...state.reservations, payload] };
    case "UPDATE_RESERVATION":
      return {
        ...state,
        reservations: state.reservations.map((reservation) =>
          reservation.id === payload.id ? payload : reservation
        ),
      };
    case "DELETE_RESERVATION":
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== payload
        ),
      };
    default:
      return state;
  }
}
