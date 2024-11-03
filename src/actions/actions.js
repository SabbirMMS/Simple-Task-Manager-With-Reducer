import { actionsTypes } from "../actionTypes/actionTypes";
let nextId = 0;
export function addTask(text, dispatch) {
  dispatch({
    type: actionsTypes.ADD_TASK,
    payload: {
      id: nextId++,
      text,
      done: false,
    },
  });
}

export function changeTask(task, dispatch) {
  dispatch({
    type: actionsTypes.CHANGE_TASK,
    payload: {
      task,
    },
  });
}

export function deleteTask(taskId, dispatch) {
  dispatch({
    type: actionsTypes.DELETE_TASK,
    payload: {
      taskId,
    },
  });
}

export const increment = (dispatch) => {
  dispatch({ type: actionsTypes.INCREMENT });
};

export const decrement = (dispatch) => {
  dispatch({ type: actionsTypes.DECREMENT });
};
