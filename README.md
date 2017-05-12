##########
# TODOs  #
##########

with - `react`, `redux`, `webpack 2`, `node` backend (`express` server, `logging`, `habitat` etc) and `docker-compose`

- [ ] webpack setup changes (if needed)
- [ ] frontend interface tests
- [ ] validation in frontend (tcomb)
- [ ] interface with master detail
		create todo lists
		select an active todo list, for which the items can be managed  
		add a todo list item
		order the todo list items
		mark a todo list item as completed

- [ ] rest endpoints on the backend
		GET  /list get all lists
		POST /list create a new list

		GET   /list/:id get all tasks of the list mentioned
		PUT   /list/:id get all tasks of the list mentioned
		POST  /list/:id/tasks create a new task



- [ ] backend database connectivity with mongo and mongoskin
