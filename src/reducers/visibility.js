/**
 * Created by lenovo on 2017/11/9.
 */
const visibility = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case "VISIBLE_TODOS":
      return action.filter;
    default:
      return state;
  }
}

export default visibility;