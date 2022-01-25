
const initialState = { reservation: { reservations: [], masters: [], services: [] } }

export const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CABINET': {
      const copyReservation = { ...state.reservation };


      copyReservation.masters = action.payload.masters;
      copyReservation.services = action.payload.services;
      copyReservation.reservations = action.payload.reservations;

      return { ...state, reservation: copyReservation }
    }
    case 'DELETE_RESERVATION': {
      const copyReservation = {
        ...state.reservation,
        reservations: state.reservation.reservations // чтобы не мутировать исходный массив сплайсом
      };
      const id = action.payload;
      const index = copyReservation.reservations.findIndex(reservation => reservation.id === id);
      copyReservation.reservations.splice(index, 1); // применение мутирующего метода сплайс

      return { ...state, reservation: copyReservation }
    }

    default:
      return state;
  }
};

export default cabinetReducer;
