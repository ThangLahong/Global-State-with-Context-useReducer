import {useContext} from 'react'
import context from './context'

export const useStore = () => {
    const [state, dispatch] = useContext(context);
    return [state, dispatch];
}