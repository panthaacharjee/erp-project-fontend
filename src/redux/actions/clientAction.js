import axios from "axios";
const url = "https://erp-project-backend-jqan.onrender.com"
// const url = "http://localhost:8000"

const token = localStorage.getItem("token")

export const createClientNotification = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateNotificationRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/create/client/notification`,
      userData,
      config
    );
    dispatch({ type: "CreateNotificationSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "CreateNotificationFail",
      payload: err.response.data.message,
    });
  }
};
