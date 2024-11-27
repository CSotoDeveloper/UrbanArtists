import { createContext } from "react";
import { artists } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const currencySymbol = '$'

  const value = {
    artists, currencySymbol
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}

export default AppContextProvider