# Todolist React Redux-toolkit

### Skapa projektet och installera redux + toolkit

1. Navigera till din mapp där du vill ha ditt projekt
2. Skapa projektet: `npx create-next-app@latest todolist-redux-toolkit`
3. Installera paket: `npm install @reduxjs/toolkit react-redux`

## Skapa en Redux slice

<i>En Redux Slice är ett bit av applikationens `state` och de relaterade `reducers`. Slice innehåller det initiala state och definerar hur state ska uppdateras i förhållande till `actions`</i>

- Skapa `todoSlice.js` i root.
  <i>Den här filen kommer att innehålla din Redux slice för att hantera todos.</i>
- Importera `createSlice` funktionen från `@reduxjs/toolkit`
- Definera initialt state samt reducers till din todo slice.
- Lämpliga reducers kan vara:

        addTodo
        toggleComplete
        deleteTodo

- En idé är att det initaiala state är en tom array. `[]`

        const todoSlice = createSlice({
        name: "todos",
        initialState: [],
        reducers: {
            addTodo: (state, action) => {
            const newTodo = {
                // Din kod här
            };
            state.push(newTodo);
            },
            toggleComplete: (state, action) => {
                // Din kod här
            },
            deleteTodo: (state, action) => {
               // Din kod här
            },
        },
        });

- Exportera dina reducers
- Exportera `todoSlice.reducer`

## Skapa Redux Store

- Skapa en fil `store.js` i root
- Öppna filen:
  - Importera `configureStore` funktionen från `@reduxjs/toolkit`.
  - Importera `todoSlice` reducern
  - Använd configureStore för att skapa Redux store.

## Skapa Todo komponenten / filen

<i> Den här filen kommer att innehålla Todo-komponenten som hanterar visningen och hanteringen av todo-listan.</i>

- Skapa en fil Todo.js. I din `components` mapp (om du har en annars src eller root).
- Öppna filen
- Importera `useState` från react
- Importera `useSelector, useDispatch` från `react-redux`;
- Importera `actions` från `todoSlice`: `addTodo, toggleComplete, deleteTodo` från `sökvägen/till/todoSlice`

- Nu kan du skapa Todo komponenten.

        function Todo(){
            // useState som hanterar ´text, setText´
            // useSelector
            // dispatch

            // handleInputChange(e)

            // handleAddTodo()

            // handleToggleComplete(id)

            // handleDeleteTodo(id)

        }

        return (
            <div>
              <input/>
              <ul>
                <li>
                  <button> Add Todo </button>
                  <button> Delete </button>
                </li>
              </ul>
            </div>
        )

- Glöm inte att exportera Todo

## Uppdatera innehållet i `_app.js`

<i>För att rendera din nya Todo-komponent behöver vi uppdatera \_app.js filen lite.</i>

- Importera `Provider` från `react-redux`
- Importera `store` från `sökväg/till/store.js`
- Importera `Todo` från `sökväg/till/Todo.js`

- Wrappa med Provider och lägg till Todo komponenten:

        export default function App({ Component, pageProps }) {
        return (
            <Provider store={store}>
            <Todo />
            <Component {...pageProps} />
            </Provider>
        );
        }
