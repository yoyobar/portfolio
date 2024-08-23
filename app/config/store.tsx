import { create } from 'zustand';

type ModalState = {
    open: boolean;
    src: string;
};

type ModalStore = {
    modal: ModalState;
    setOpen: (bool: boolean) => void;
    setSrc: (src: string) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    modal: {
        open: false,
        src: '',
    },
    setOpen: (bool: boolean) =>
        set((state) => ({
            modal: {
                open: bool,
                src: state.modal.src,
            },
        })),
    setSrc: (src: string) =>
        set((state) => ({
            modal: {
                open: state.modal.open,
                src: src,
            },
        })),
}));
