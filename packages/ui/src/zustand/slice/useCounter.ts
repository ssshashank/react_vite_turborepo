import { StateCreator } from "zustand";
export interface CounterSlice {
	count: number;
	incrementCounter: () => void;
	decrementCounter: () => void;
}

const useCounterSlice: StateCreator<CounterSlice, [], [], CounterSlice> = (
	set
) => ({
	count: 0,
	incrementCounter: () => set((state) => ({ count: state.count + 1 })),
	decrementCounter: () => set((state) => ({ count: state.count - 1 })),
});

export default useCounterSlice;
