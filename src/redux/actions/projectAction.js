import axios from "axios";
const url = "https://erp-project-backend-jqan.onrender.com"
// const url = "http://localhost:8000"

const token = localStorage.getItem("token")

export const getManagerProject = () => async (dispatch) => {
  try {
    dispatch({ type: "ProjectRequest" });

    const config = {headers: {Authorization:`Bearer ${token}`}}
    
    const { data } = await axios.get(`${url}/api/v1/manager/project/data`, config);
    dispatch({ type: "ProjectSuccess", payload: data.project });
  } catch (err) {
    dispatch({ type: "ProjectFail", payload: err.response.data.message });
  }
};
export const getClientProject = () => async (dispatch) => {
  try {
    dispatch({ type: "ProjectRequest" });
    
    const config = {headers: {Authorization:`Bearer ${token}`}}

    const { data } = await axios.get(`${url}/api/v1/client/project/data`, config);
    dispatch({ type: "ProjectSuccess", payload: data.project });
  } catch (err) {
    dispatch({ type: "ProjectFail", payload: err.response.data.message });
  }
};
export const createExpenses = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AddExpensesRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` }  };

    const { data } = await axios.post(
      `${url}/api/v1/project/expenses`,
      userData,
      config
    );
    dispatch({ type: "AddExpensesSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddExpensesFail", payload: err.response.data.message });
  }
};
export const deleteExpenses = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteExpensesRequest" });
    const config = {headers: {Authorization:`Bearer ${token}`}}
    const { data } = await axios.delete(
      `${url}/api/v1/delete/project/expenses/${id}`, config
    );
    dispatch({ type: "DeleteExpensesSuccess", payload: data });
    // console.log(userData);
  } catch (err) {
    dispatch({
      type: "DeleteExpensesFail",
      payload: err.response.data.message,
    });
  }
};
export const createLabourExpenses = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AddLabourRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` }  };

    const { data } = await axios.post(
      `${url}/api/v1/labour/expenses`,
      userData,
      config
    );
    dispatch({ type: "AddLabourSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddLabourFail", payload: err.response.data.message });
  }
};
export const deleteLabourExpenses = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteLabourRequest" });
    const config = {headers: {Authorization:`Bearer ${token}`}}
    const { data } = await axios.delete(`${url}/api/v1/delete/labour/expenses/${id}`, config);
    dispatch({ type: "DeleteLabourSuccess", payload: data });
    // console.log(userData);
  } catch (err) {
    dispatch({
      type: "DeleteLabourFail",
      payload: err.response.data.message,
    });
  }
};
export const createDeposit = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AddDepositRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` }  };

    const { data } = await axios.post(
      `${url}/api/v1/project/deposit`,
      userData,
      config
    );
    dispatch({ type: "AddDepositSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddDepositFail", payload: err.response.data.message });
  }
};
export const deleteDeposit = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteDepositRequest" });
    const config = {headers: {Authorization:`Bearer ${token}`}}
    const { data } = await axios.delete(`${url}/api/v1/delete/project/deposit/${id}`, config);
    dispatch({ type: "DeleteDepositSuccess", payload: data });
    // console.log(userData);
  } catch (err) {
    dispatch({
      type: "DeleteDepositFail",
      payload: err.response.data.message,
    });
  }
};

export const createWithdraw = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AddWithdrawRequest" });
    const config = { headers: { "Content-Type": "application/json", Authorization:`Bearer ${token}` }  };

    const { data } = await axios.post(
      `${url}/api/v1/project/withdraw`,
      userData,
      config
    );
    dispatch({ type: "AddWithdrawSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddWithdrawFail", payload: err.response.data.message });
  }
};
export const deleteWithdraw = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteWithdrawRequest" });
    const config = {headers: {Authorization:`Bearer ${token}`}}
    const { data } = await axios.delete(
      `${url}/api/v1/delete/project/withdraw/${id}`, config
    );
    dispatch({ type: "DeleteWithdrawSuccess", payload: data });
    // console.log(userData);
  } catch (err) {
    dispatch({
      type: "DeleteWithdrawFail",
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
