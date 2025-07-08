import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {AppDispatch,RootState} from "./store"

//custom hooks with given hooks plus type
export const useAppDispatch=useDispatch.withTypes<AppDispatch>()
export const useAppSelector=useSelector.withTypes<RootState>()

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch = () => useDispatch<AppDispatch>();