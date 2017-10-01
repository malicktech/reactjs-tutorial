# Redux

Provides prédicable state managment using actions and reducers

* action
Describe something has (or should) happen, but don't specify how it should be done


* Store 


* Reducer 
handle state transitions ( must be done sunchronously)
A pure function that takes the previous state and an action, then compute and returns the ne state

(state + action) => state
(previousState + action) => newState


* Dispatcher

* Async
- users interactions (mouse, keybord, etc ...)
- AJAX
- Timer/Animation
- WebSockets
- Work Workers, etc ..


use middleware to manage async/side effets

callback : the most primitive way to handle async in javascript

# RxJS + REdux + React
can be use to manage asynchronous 