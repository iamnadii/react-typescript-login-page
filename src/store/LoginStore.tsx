import create from "zustand"

interface LoginProp {
    username: string,
    password: string,
    setUsername: (name: string) => void
    setPassword: (pass: string) => void
}

export const useLoginStore = create<LoginProp>((set) => ({
    username: "",
    password: "",
    setUsername: (name: string) => set(state => ({ ...state, username: name })),
    setPassword: (pass: string) => set(state => ({ ...state, password: pass })),
}));