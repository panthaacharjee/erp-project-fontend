import axios from "axios";
const url = "https://erp-project-backend-jqan.onrender.com"
const token = localStorage.getItem("token")

export const createEmployee = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateEmployeeRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/manager/create`,
      userData,
      config
    );
    dispatch({ type: "CreateEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const getEmployee = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GetEmployeeRequest" });
    const config = {headers: {Authorization:`Bearer ${token}`}}
    const { data } = await axios.get(`${url}/api/v1/get/manager?keyword=${keyword}`, config);
    dispatch({ type: "GetEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const getSingleEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleEmployeeRequest" });
    const config = {headers: {Authorization:`Bearer ${token}`}}
    const { data } = await axios.get(`${url}/api/v1/manager/${id}`, config);
    dispatch({ type: "GetSingleEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetSingleEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const updateEmployee = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "GetUpdateEmployeeRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };
    const { data } = await axios.put(
      `${url}/api/v1/manager/update/${id}`,
      userData,
      config
    );
    dispatch({ type: "GetUpdateEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetUpdateEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteEmployeeRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.delete(`${url}/api/v1/manager/delete/${id}`, config);
    dispatch({ type: "DeleteEmployeeSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "DeleteEmployeeFail",
      payload: err.response.data.message,
    });
  }
};

export const createClient = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateClientRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/client/create`,
      userData,
      config
    );
    dispatch({ type: "CreateClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateClientFail",
      payload: err.response.data.message,
    });
  }
};

export const getClient = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GetClientRequest" });
    const config = { headers: {  Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/get/client?keyword=${keyword}`, config);
    dispatch({ type: "GetClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetClientFail",
      payload: err.response.data.message,
    });
  }
};

export const getSingleClient = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleClientRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/client/${id}`, config);
    dispatch({ type: "GetSingleClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetSingleClientFail",
      payload: err.response.data.message,
    });
  }
};

export const updateClient = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "GetUpdateClientRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/client/update/${id}`,
      userData,
      config
    );
    dispatch({ type: "GetUpdateClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetUpdateClientFail",
      payload: err.response.data.message,
    });
  }
};

export const deleteClient = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteClientRequest" });

    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.delete(`${url}/api/v1/client/delete/${id}`, config);
    dispatch({ type: "DeleteClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "DeleteClientFail",
      payload: err.response.data.message,
    });
  }
};

export const getProjectManager = () => async (dispatch) => {
  try {
    dispatch({ type: "GetProjectManagerRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/project/manager`, config);
    dispatch({ type: "GetProjectManagerSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetProjectManagerFail",
      payload: err.response.data.message,
    });
  }
};

export const getProjectClient = () => async (dispatch) => {
  try {
    dispatch({ type: "GetProjectClientRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/project/client`, config);
    dispatch({ type: "GetProjectClientSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetProjectClientFail",
      payload: err.response.data.message,
    });
  }
};

export const createProject = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateProjectRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/project/create`,
      userData,
      config
    );
    dispatch({ type: "CreateProjectSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateProjectFail",
      payload: err.response.data.message,
    });
  }
};

export const getProject = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GetProjectRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/get/project?keyword=${keyword}`, config);
    dispatch({ type: "GetProjectSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetProjectFail",
      payload: err.response.data.message,
    });
  }
};

export const getSingleProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleProjectRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/get/project/${id}`, config);
    dispatch({ type: "GetSingleProjectSuccess", payload: data.project });
  } catch (err) {
    dispatch({
      type: "GetSingleProjectFail",
      payload: err.response.data.message,
    });
  }
};

export const createSalary = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateSalaryRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/payment/create`,
      userData,
      config
    );
    dispatch({ type: "CreateSalarySuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateSalaryFail",
      payload: err.response.data.message,
    });
  }
};

export const getAdminNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAdminNotificationRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/admin/notification`, config);
    dispatch({ type: "GetAdminNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetAdminNotificationFail",
      payload: err.response.data.message,
    });
  }
};
export const getManagerNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "GetManagerNotificationRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/maneger/notification`, config);
    dispatch({ type: "GetManagerNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetManagerNotificationFail",
      payload: err.response.data.message,
    });
  }
};
export const getClientNotification = () => async (dispatch) => {
  try {
    dispatch({ type: "GetClientNotificationRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/get/client/notification`, config);
    dispatch({ type: "GetClientNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetClientNotificationFail",
      payload: err.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateHrPasswordRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/subadmin/password/update`,
      userData,
      config
    );

    dispatch({ type: "UpdateHrPasswordSuccess", payload: data.user.name });
  } catch (error) {
    dispatch({
      type: "UpdateHrPasswordFail",
      payload: error.response.data.message,
    });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateHrProfileRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/subadmin/profile/update`,
      userData,
      config
    );

    dispatch({ type: "UpdateHrProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UpdateHrProfileFail",
      payload: error.response.data.message,
    });
  }
};

// Update Avatar
export const updateAvatar = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateHrAvatarRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/subadmin/avatar/update`,
      userData,
      config
    );

    dispatch({ type: "UpdateHrAvatarSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UpdateHrAvatarFail",
      payload: error.response.data.message,
    });
  }
};

// Resign Manager
export const resignManager = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "ResignManagerRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/manager/resign/${id}`,
      userData,
      config
    );

    dispatch({ type: "ResignManagerSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "ResignManagerFail",
      payload: error.response.data.message,
    });
  }
};

//Resign Client
export const resignClient = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "ResignClientRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/client/resign/${id}`,
      userData,
      config
    );

    dispatch({ type: "ResignClientSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "ResignClientFail",
      payload: error.response.data.message,
    });
  }
};

//Assign Manager
export const assignManager = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "AssignManagerRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/manager/assign/${id}`,
      userData,
      config
    );

    dispatch({ type: "AssignManagerSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "AssignManagerFail",
      payload: error.response.data.message,
    });
  }
};

//Assign Client
export const assignClient = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "AssignClientRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/client/assign/${id}`,
      userData,
      config
    );

    dispatch({ type: "AssignClientSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "AssignClientFail",
      payload: error.response.data.message,
    });
  }
};

export const createAttendence = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateAttendenceRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/create/attendence`,
      userData,
      config
    );
    dispatch({ type: "CreateAttendenceSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateAttendenceFail",
      payload: err.response.data.message,
    });
  }
};
export const getAttendence = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAttendenceRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/get/attendence`, config);
    dispatch({ type: "GetAttendenceSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "GetAttendenceFail",
      payload: err.response.data.message,
    });
  }
};
//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing Success
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};
