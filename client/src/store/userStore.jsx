import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStorePersisted = create()(
    persist(
        (set, get) => ({
            firtName: '',
            lastName: '',
            email: '',
            password: '',
            setUser: (user) => set((state) => ({...state, ...user}))
        }),
        { name: 'user-profile' }
    ),
);

export const useImageStorePersisted = create()(
    persist(
        (set, get) => ({
            face: [],
            setImage: (image) => set((state) => ({...state, ...image}))
        }),
        { name: 'image-profile' }
    ),
);