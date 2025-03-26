import { create } from 'zustand';

export const useMakeupStore = create((set) => ({
    lipSticks: null,
    eyeShadows: null,
    blushes: null,
    setMakeup: (makeup) => set((state) => ({ ...state, ...makeup }))
}));