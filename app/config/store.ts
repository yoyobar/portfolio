import { create } from 'zustand';
interface refStore {
    ref: HTMLDivElement | null;
    setRef: (text: HTMLDivElement) => void;
}
export const useRefStore = create<refStore>((set) => ({
    ref: null,
    setRef: (text: HTMLDivElement) => set(() => ({ ref: text })),
}));
