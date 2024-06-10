import axios from "axios";
// const url = "https://erp-project-backend-jqan.onrender.com"
const url = "http://localhost:8000"

const token = localStorage.getItem("token")

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${url}/api/v1/login/user`, userData, config);
    localStorage.setItem("token", data.token)
    dispatch({ type: "LoginSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "LoginFail", payload: err.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });
    ``
    const { data } = await axios.get(`${url}/api/v1/user/me`, {headers: {Authorization:`Bearer ${token}`}});
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "LoadUserFail", payload: err.response.data.message });
    // console.log(error.message);
  }
};

export const forgotPassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "ForgotPasswordRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${url}/api/v1/user/forgot/password`,
      userData,
      config
    );
    dispatch({ type: "ForgotPasswordSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "ForgotPasswordFail",
      payload: err.response.data.message,
    });
    // console.log(error.message);
  }
};

//Reset Password
export const resetPassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "ResetPasswordRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(
      `${url}/api/v1/user/password/reset`,
      userData,
      config
    );
    dispatch({ type: "ResetPasswordSuccess", payload: data.message });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: "ResetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

//Logout User
export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutRequest" });
    // const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.get(`${url}/api/v1/logout`);
    dispatch({ type: "LogoutSuccess", payload: data.message });
    localStorage.removeItem("token")
  } catch (error) {
    dispatch({
      type: "LogoutFail",
      payload: error.response.data.message,
    });
  }
};

//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};
