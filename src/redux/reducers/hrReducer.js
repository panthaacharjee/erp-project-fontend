import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const employeeReducer = createReducer(initialState, {
  CreateEmployeeRequest: (state) => {
    state.loading = true;
  },
  CreateEmployeeSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateEmployeeFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetEmployeeRequest: (state) => {
    state.aloading = true;
  },
  GetEmployeeSuccess: (state, action) => {
    state.aloading = false;
    state.employee = action.payload.employee;
  },
  GetEmployeeFail: (state, action) => {
    state.aloading = false;
    state.error = action.payload;
  },
  GetSingleEmployeeRequest: (state) => {
    state.sloading = true;
  },
  GetSingleEmployeeSuccess: (state, action) => {
    state.sloading = false;
    state.singleEmployee = action.payload.employee;
  },
  GetSingleEmployeeFail: (state, action) => {
    state.sloading = false;
    state.error = action.payload;
  },
  GetUpdateEmployeeRequest: (state) => {
    state.uloading = true;
  },
  GetUpdateEmployeeSuccess: (state, action) => {
    state.uloading = false;
    state.singleEmployee = action.payload.employee;
    state.usuccess = action.payload.message;
  },
  GetUpdateEmployeeFail: (state, action) => {
    state.uloading = false;
    state.uerror = action.payload;
  },

  DeleteEmployeeRequest: (state) => {
    state.dloading = true;
  },
  DeleteEmployeeSuccess: (state, action) => {
    state.dloading = false;
    state.dsuccess = action.payload.message;
  },
  DeleteEmployeeFail: (state, action) => {
    state.dloading = false;
    state.derror = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.dsuccess = null;
  },
});

export const clientReducer = createReducer(initialState, {
  CreateClientRequest: (state) => {
    state.eloading = true;
  },
  CreateClientSuccess: (state, action) => {
    state.eloading = false;
    state.success = action.payload.message;
  },
  CreateClientFail: (state, action) => {
    state.eloading = false;
    state.error = action.payload;
  },

  GetClientRequest: (state) => {
    state.loading = true;
  },
  GetClientSuccess: (state, action) => {
    state.loading = false;
    state.client = action.payload.client;
  },
  GetClientFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetSingleClientRequest: (state) => {
    state.loading = true;
  },
  GetSingleClientSuccess: (state, action) => {
    state.loading = false;
    state.singleClient = action.payload.client;
  },
  GetSingleClientFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetUpdateClientRequest: (state) => {
    state.uloading = true;
  },
  GetUpdateClientSuccess: (state, action) => {
    state.uloading = false;
    state.singleClient = action.payload.client;
    state.usuccess = action.payload.message;
  },
  GetUpdateClientFail: (state, action) => {
    state.uloading = false;
    state.uerror = action.payload;
  },

  DeleteClientRequest: (state) => {
    state.dloading = true;
  },
  DeleteClientSuccess: (state, action) => {
    state.dloading = false;
    state.dsuccess = action.payload.message;
  },
  DeleteClientFail: (state, action) => {
    state.dloading = false;
    state.derror = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.dsuccess = null;
  },
});

export const projectUserReducer = createReducer(initialState, {
  GetProjectManagerRequest: (state) => {
    state.loading = true;
  },
  GetProjectManagerSuccess: (state, action) => {
    state.loading = false;
    state.manager = action.payload.manager;
  },
  GetProjectManagerFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetProjectClientRequest: (state) => {
    state.loading = true;
  },
  GetProjectClientSuccess: (state, action) => {
    state.loading = false;
    state.client = action.payload.client;
  },
  GetProjectClientFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const hrProjectReducer = createReducer(initialState, {
  CreateProjectRequest: (state) => {
    state.loading = true;
  },
  CreateProjectSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateProjectFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetProjectRequest: (state) => {
    state.loading = true;
  },
  GetProjectSuccess: (state, action) => {
    state.loading = false;
    state.projects = action.payload.project;
  },
  GetProjectFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetSingleProjectRequest: (state) => {
    state.loading = true;
  },
  GetSingleProjectSuccess: (state, action) => {
    state.loading = false;
    state.project = action.payload;
  },
  GetSingleProjectFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ResignManagerRequest: (state) => {
    state.rmloading = true;
  },
  ResignManagerSuccess: (state, action) => {
    state.rmloading = false;
    state.project = action.payload.project;
    state.success1 = action.payload.message;
  },
  ResignManagerFail: (state, action) => {
    state.rmloading = false;
    state.error = action.payload;
  },

  ResignClientRequest: (state) => {
    state.rcloading = true;
  },
  ResignClientSuccess: (state, action) => {
    state.rcloading = false;
    state.project = action.payload.project;
    state.success2 = action.payload.message;
  },
  ResignClientFail: (state, action) => {
    state.rcloading = false;
    state.error = action.payload;
  },

  AssignManagerRequest: (state) => {
    state.amloading = true;
  },
  AssignManagerSuccess: (state, action) => {
    state.amloading = false;
    state.project = action.payload.project;
  },
  AssignManagerFail: (state, action) => {
    state.amloading = false;
    state.error = action.payload;
  },

  AssignClientRequest: (state) => {
    state.acloading = true;
  },
  AssignClientSuccess: (state, action) => {
    state.acloading = false;
    state.project = action.payload.project;
  },
  AssignClientFail: (state, action) => {
    state.acloading = false;
    state.error = action.payload;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const salaryReducer = createReducer(initialState, {
  CreateSalaryRequest: (state) => {
    state.loading = true;
  },
  CreateSalarySuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateSalaryFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const notificationReducer = createReducer(initialState, {
  GetAdminNotificationRequest: (state) => {
    state.loading = true;
  },
  GetAdminNotificationSuccess: (state, action) => {
    state.loading = false;
    state.adminNotification = action.payload.adminNotification;
  },
  GetAdminNotificationFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetManagerNotificationRequest: (state) => {
    state.loading = true;
  },
  GetManagerNotificationSuccess: (state, action) => {
    state.loading = false;
    state.managerNotification = action.payload.managerNotification;
  },
  GetManagerNotificationFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetClientNotificationRequest: (state) => {
    state.loading = true;
  },
  GetClientNotificationSuccess: (state, action) => {
    state.loading = false;
    state.clientNotification = action.payload.clientNotification;
  },
  GetClientNotificationFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const updateHrReducer = createReducer(initialState, {
  UpdateHrPasswordRequest: (state) => {
    state.loading = true;
  },
  UpdateHrPasswordSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  UpdateHrPasswordFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UpdateHrProfileRequest: (state) => {
    state.loading = true;
  },
  UpdateHrProfileSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  UpdateHrProfileFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UpdateHrAvatarRequest: (state) => {
    state.loading = true;
  },
  UpdateHrAvatarSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  UpdateHrAvatarFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearSuccess: (state) => {
    state.success = null;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});

export const attendenceReducer = createReducer(initialState, {
  CreateAttendenceRequest: (state) => {
    state.loading = true;
  },
  CreateAttendenceSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateAttendenceFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetAttendenceRequest: (state) => {
    state.loading = true;
  },
  GetAttendenceSuccess: (state, action) => {
    state.loading = false;
    state.allAttendence = action.payload.attendence;
  },
  GetAttendenceFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
});
