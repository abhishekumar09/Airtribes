// import logo from './logo.svg';
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store";
import themeContext from "./context/ThemeContext";
import { useState } from "react";
function App() {
  const [theme,setTheme] = useState('light')
  return (
    <themeContext.Provider value={{theme:theme,setTheme:setTheme}}>
    <Provider store={store}>
    <div className="App">
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
    </Provider>
    </themeContext.Provider>
  );
}

export default App;
