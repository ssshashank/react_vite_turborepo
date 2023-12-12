import { create } from "zustand";
import useCounterSlice, { CounterSlice } from "../slice/useCounter";

const useGlobalStore = create<CounterSlice>()((...set) => ({
	...useCounterSlice(...set),
}));

export default useGlobalStore;
