import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStorePersisted = create()(
    persist(
        (set, get) => ({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            img: '',
            skinTone: null,
            eyeColor: null,
            lipColor: null,
            lipSticks: null,
            eyeShadows: null,
            blushes: null,
            setUser: (user) => set((state) => ({...state, ...user}))
        }),
        { name: 'user-profile' }
    ),
);

export const useImageStorePersisted = create()(
    persist(
        (set, get) => ({
            imageData: null,
            setImageData: (image) => set((state) => ({...state, imageData: image}))
        }),
        { name: 'image-profile' }
    ),
);