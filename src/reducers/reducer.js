import { actionsTypes } from "../actionTypes/actionTypes";

export default function reducer(draft, action) {
  switch (action.type) {
    case actionsTypes.ADD_TASK: {
      draft.tasks.push(action.payload);
      break;
    }
    case actionsTypes.CHANGE_TASK: {
      const { task } = action.payload;
      const index = draft.tasks.findIndex((t) => t.id === task.id);
      draft.tasks[index] = task;
      break;
    }
    case actionsTypes.DELETE_TASK: {
      draft.tasks = draft.tasks.filter((t) => t.id !== action.payload.taskId);
      break;
    }
    case actionsTypes.INCREMENT: {
      draft.counter += 1;
      break;
    }
    case actionsTypes.DECREMENT: {
      draft.counter > 0 ? (draft.counter -= 1) : draft.counter;
      break;
    }

    default: {
      return draft;
    }
  }
}
