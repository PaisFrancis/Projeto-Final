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
    case "ADD_ITEM":
      return { ...state, items: [...state.items, payload] };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
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
    case "SET_TABLES":
      return { ...state, tables: payload };
    case "ADD_TABLE":
      return { ...state, tables: [...state.tables, payload] };
    case "UPDATE_TABLE":
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.number === payload.id ? payload : table
        ),
      };
    case "DELETE_TABLE":
      return {
        ...state,
        tables: state.tables.filter((table) => table.number !== payload),
      };
    default:
      return state;
  }
}
