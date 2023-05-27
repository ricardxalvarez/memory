import React, { useContext, useState } from "react"
import { GameState } from "./types"

const AppProvider  = React.createContext(null as any)

export const AppContext = ({children}: {children: React.ReactNode}) => {
    const [game_state, set_game_state] = useState<GameState>('welcome')
    const values = {game_state, set_game_state}
    return <AppProvider.Provider value={values}>{children}</AppProvider.Provider>
}

export const useGlobal = () => {
    return useContext(AppProvider)
}