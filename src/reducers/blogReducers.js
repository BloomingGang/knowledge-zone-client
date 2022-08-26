import {
  ALL_BLOG_REQUEST,
  CLEAR_ERROR,
  ALL_BLOG_FAIL,
  ALL_BLOG_SUCCESS,
} from "../constant/blogConstant";

export const blogReducer = (state = { result: [] }, action) => {
  switch (action.type) {
    case ALL_BLOG_REQUEST:
      return {
        loading: true,
        result: [],
      };
    case ALL_BLOG_SUCCESS:
      return {
        loading: false,
        result: action.payload,
      };
    case ALL_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
