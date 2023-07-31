import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  route: null,
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    fetchRoute(state) {
      state.loading = true;
      state.error = false;
    },
    fetchRouteSuccess(state, action) {
      state.route = action.payload;
      state.loading = false;
    },
    fetchRouteFailed(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const routerActions = routerSlice.actions;

export const routeLoading = (state) => state.loading;
export const routeError = (state) => state.error;
export const selectRoute = (state) => state.route;

const routerReducer = routerSlice.reducer;
export default routerReducer;
