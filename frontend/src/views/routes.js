import { Route, IndexRoute } from 'react-router';
import Layout from '../views/Layout';
import TodoItemList from '../views/TodoItemList';
import TodoItem from '../views/TodoItem';
import TodoList from '../views/TodoList';

export default function Routes() {
// ```
// interface ITodoList {
//   todoListId: number;
//   name: string;
//   createdAt: timestamp;
// }

// A todo list item must look like this
// interface ITodoListItem {
//   todoListItemId: number;
//   todoListId: number;
//   name: string;
//   rank: number;
//   completed: boolean;
//   createdAt: timestamp;
//   completedAt?: timestamp;
// }

// ```

//     GET  /list get all lists
//     POST /list create a new list

//     GET   /list/:id get all tasks of the list mentioned
//     PUT   /list/:id get all tasks of the list mentioned
//     POST  /list/:id/tasks create a new task

  return (
    <Route
      component={Layout}
      path="/"
    >
      <IndexRoute
        component={TodoItemList}
      />
      <Route
        component={Layout}
        path="layout"
      />
      <Route
        component={TodoList}
        path="/todos/:listid/"
      />
      <Route
        component={TodoItem}
        path="/todos/:listid/:itemid"
      />
    </Route>
  );
}
