import { Store } from "@tanstack/react-store";

interface IStore {
    search: string;
}

export const store = new Store<IStore>({
    search: "",
})