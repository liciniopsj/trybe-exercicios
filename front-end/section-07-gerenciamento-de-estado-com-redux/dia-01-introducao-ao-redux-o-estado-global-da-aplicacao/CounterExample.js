import { legacy_createStore as createStore } from 'redux'; // to avoid deprecated warning use legacy_createStore instead of just createStore
import { composeWithDevTools } from '@redux-devtools/extension'; // required to use in conjunction with the Redux Dev Tools extension on chrome

// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => { // usually a switch is used instead of if.
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 };
  }
  return state;
  // switch (action.type) {
  //   case 'INCREMENT_COUNTER':
  //       return { count: state.count + 1 };
  
  //   default:
  //     return state
  // }
};

// 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools()); // composeWithDevTools() required to use in conjunction with the Redux Dev Tools extension on chrome

// 3. Criando a Action
const action = { type: 'INCREMENT_COUNTER' };

// 4. Disparando a Action
const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', () => store.dispatch(action)); // store.dispatch(action) executes the switch inside the reducer

// 5. Lendo do Estado global
store.subscribe(() => { // updates the store
  const globalState = store.getState(); // gets the store, returns a object, in this case { count: n }

  const countEl = document.querySelector('h2');
  countEl.innerHTML = globalState.count;

  console.log('Estado atualizado !');
});
