import axios from "axios";
const url = "https://erp-project-backend-jqan.onrender.com"
// const url = "http://localhost:8000"

const token = localStorage.getItem("token")

export const getRevenue = () => async (dispatch) => {
  try {
    dispatch({ type: "RevenueRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/total/revenue`, config);
    dispatch({ type: "RevenueSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "RevenueFail", payload: err.response.data.message });
  }
};

export const getMonthlyRevenue = () => async (dispatch) => {
  try {
    dispatch({ type: "MontlyRevenueRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/monthly/revenue`, config);
    dispatch({ type: "MonthlyRevenueSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "MonthlyRevenueFail",
      payload: err.response.data.message,
    });
  }
};
export const getAllProject = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "AllProjectRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/all/project?keyword=${keyword}`, config);
    dispatch({ type: "AllProjectSuccess", payload: data.projects });
  } catch (err) {
    dispatch({ type: "AllProjectFail", payload: err.response.data.message });
  }
};

export const adminDeposit = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AdminDepositRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/create/deposit`,
      userData,
      config
    );
    dispatch({ type: "AdminDepositSuccess", payload: data.message });
  } catch (err) {
    dispatch({ type: "AdminDepositFail", payload: err.response.data.message });
  }
};

export const adminWithdraw = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AdminWithdrawRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/create/withdraw`,
      userData,
      config
    );
    dispatch({ type: "AdminWithdrawSuccess", payload: data.message });
  } catch (err) {
    dispatch({ type: "AdminWithdrawFail", payload: err.response.data.message });
  }
};

export const getAllDeposit = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAdminDepositRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/admin/deposit`, config);
    dispatch({ type: "GetAdminDepositSuccess", payload: data.adminDeposit });
  } catch (err) {
    dispatch({
      type: "GetAdminDepositFail",
      payload: err.response.data.message,
    });
  }
};

export const getAllWithdraw = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAdminWithdrawRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/admin/withdraw`, config);
    dispatch({ type: "GetAdminWithdrawSuccess", payload: data.adminWithdraw });
  } catch (err) {
    dispatch({
      type: "GetAdminWithdrawFail",
      payload: err.response.data.message,
    });
  }
};

export const deleteDeposit = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteDepositRequest" });
    const config = { headers: { Authorization:`Bearer ${token}` } };
    const { data } = await axios.delete(`${url}/api/v1/delete/deposit/${id}`, config);
    dispatch({ type: "DeleteDepositSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "DeleteDepositFail",
      payload: err.response.data.message,
    });
  }
};
export const deleteWithdraw = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteWithdrawRequest" });
    const config = { headers: {  Authorization:`Bearer ${token}` } };
    const { data } = await axios.delete(`${url}/api/v1/delete/withdraw/${id}`, config);
    dispatch({ type: "DeleteWithdrawSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "DeleteWithdrawFail",
      payload: err.response.data.message,
    });
  }
};

export const getTopCustomer = () => async (dispatch) => {
  try {
    dispatch({ type: "TopCustomerRequest" });
    const config = { headers: {  Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/top/customer`, config);
    dispatch({ type: "TopCustomerSuccess", payload: data.topCustomer });
  } catch (err) {
    dispatch({
      type: "TopCustomerFail",
      payload: err.response.data.message,
    });
  }
};
export const getUnpaidCustomer = () => async (dispatch) => {
  try {
    dispatch({ type: "TopUnpaidCustomerRequest" });
    const config = { headers: {  Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/top/unpaid/customer`, config);
    dispatch({
      type: "TopUnpaidCustomerSuccess",
      payload: data.topUnpaidCustomer,
    });
  } catch (err) {
    dispatch({
      type: "TopUnpaidCustomerFail",
      payload: err.response.data.message,
    });
  }
};

export const getTotalDeposit = () => async (dispatch) => {
  try {
    dispatch({ type: "TotalDepositRequest" });
    const config = { headers: {  Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/total/deposit`, config);
    dispatch({
      type: "TotalDepositSuccess",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "TotalDepositFail",
      payload: err.response.data.message,
    });
  }
};
export const getTotalWithdraw = () => async (dispatch) => {
  try {
    dispatch({ type: "TotalWithdrawRequest" });
    const config = { headers: {  Authorization:`Bearer ${token}` } };
    const { data } = await axios.get(`${url}/api/v1/total/withdraw`, config);
    dispatch({
      type: "TotalWithdrawSuccess",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "TotalWithdrawFail",
      payload: err.response.data.message,
    });
  }
};

// Update Password
export const updatePasswordAdmin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateAdminPasswordRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/admin/password/update`,
      userData,
      config
    );

    dispatch({ type: "UpdateAdminPasswordSuccess", payload: data.user.name });
  } catch (error) {
    dispatch({
      type: "UpdateAdminPasswordFail",
      payload: error.response.data.message,
    });
  }
};

// Update Profile
export const updateProfileAdmin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateAdminProfileRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/admin/profile/update`,
      userData,
      config
    );

    dispatch({ type: "UpdateAdminProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UpdateAdminProfileFail",
      payload: error.response.data.message,
    });
  }
};

// Update Avatar
export const updateAvatarAdmin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateAdminAvatarRequest" });

    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/admin/avatar/update`,
      userData,
      config
    );

    dispatch({ type: "UpdateAdminAvatarSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "UpdateAdminAvatarFail",
      payload: error.response.data.message,
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
