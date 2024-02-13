import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Todo from "@/components/Todo";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Todo />
      <Component {...pageProps} />
    </Provider>
  );
}
