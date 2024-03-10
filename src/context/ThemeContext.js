import { createContext } from "react";
const themeContext = createContext({theme:'light',setTheme:()=>{}})
export default themeContext;