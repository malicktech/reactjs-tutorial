


* Functional and Class Components ?

Functional components : 
it's a stateless component
plain JavaScript functions,
 don't have life cycle workflow implemented, although they don't have a state. If you desire to use the state, you have to extend from React.Component

class componnenet : stateful
You have to extend React.Component to create a stateful component which then will need a constructor and you'll be able to use the state.


* 

React 0.14 introduced pure function components.

This should be the preferred option for all stateless components.
