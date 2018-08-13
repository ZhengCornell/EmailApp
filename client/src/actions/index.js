import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, FETCH_SURVEY } from "./types";

export const fetchUser = () => {
  return dispatch => {
    //thunk 激活了 dispatch, 发给reducer
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const handleToken = token => {
  return dispatch => {
    axios
      .post("/api/stripe", token)
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const submitSurvey = (values, history) => {
  return async dispatch => {
    const res = await axios.post("/api/surveys", values);

    history.push("/surveys");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const fetchSurveys = () => {
  return async dispatch => {
    const res = await axios.get("/api/surveys");

    console.log(res.data);
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  };
};

export const fetchSurvey = surveyId => {
  return async dispatch => {
    const url = "/api/surveys/" + surveyId;
    const res = await axios.get(url);

    console.log(res.data);
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  };
};
