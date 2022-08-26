import axios from "axios";
import {
  ALL_BLOG_REQUEST,
  CLEAR_ERROR,
  ALL_BLOG_FAIL,
  ALL_BLOG_SUCCESS,
} from "../constant/blogConstant";

export const getBlog = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BLOG_REQUEST });

    const { data } = await axios.get(
      "https://desolate-beach-15424.herokuapp.com/blogs"
    );
    dispatch({
      type: ALL_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
