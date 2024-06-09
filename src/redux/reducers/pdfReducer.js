import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const pdfReducer = createReducer(initialState, {
  GetMeterialExpensesPdfRequest: (state) => {
    state.loading = true;
  },
  GetMeterialExpensesPdfSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
    state.filename = action.payload.file;
  },
  GetMeterialExpensesPdfFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetLabourExpensesPdfRequest: (state) => {
    state.loading = true;
  },
  GetLabourExpensesPdfSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
    state.filename2 = action.payload.file;
  },
  GetLabourExpensesPdfFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearSuccess: (state) => {
    state.success = null;
  },
});
