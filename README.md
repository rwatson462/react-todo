# react-todo

> A (very) basic todo list written in React

## Setup and runnnig
1. Download the repository
2. Ensure Docker is installed
3. Open a terminal at this directory
4. Run `docker compose up`
5. Point your browser to `http://localhost:3000` to see the app

This should build the Node container, install the React dependencies, and start the todo app (in developer mode).  
You can then edit the code and see the changes reflected immediately in your browser!

## Key ideas in this app

### Repository pattern for loading and saving Todos
The Repository pattern allows us to separate storing/retrieval of data from the app so you don't end up hard-coding dependencies all over the place.  
Although this is a simple example, you don't want to tie yourself to a library (in this example localStorage) where you might change in the future.  
While it might look a bit weird, the `useRepository` hook would enable us to inject dependencies (like an API Client) to the Repository class.  It just happens that right now such a thing doesn't happen.

### Reducer pattern for maintaining state
The Reducer pattern gives us a declarative way to manage the state of our Todo list with commands such as "complete", and "add".

### Dumb components
All the state in the app is stored at the top level, in the `App` component, then passed down to the other components as props, both the properties and their setters are passed in this way.  
In this simple example, this gives us a single place where the state is maintained and allows the other components to be unaware of the effects they have.  
For example, the `Checkbox` component only knows whether it is checked or not and that is calls a function whenever its state wishes to change.  It's up to the App to receive the message from the Checkbox and update the state.
