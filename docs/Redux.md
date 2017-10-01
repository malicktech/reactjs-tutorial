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
send action to store






# RxJS + REdux + React
https://redux-observable.js.org/

can be use to manage asynchronous 

* redux-observable
- Side effet management for reduxn using Epics
- make it easier to compose and control async tasks, over any amount of time
- Don't need to manage your own Rx subscriptions
- can use redux tooling

* Epics
a function that takes a stream of all actions and dispatched and returns a stream of new actions to dispatch