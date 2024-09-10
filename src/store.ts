import { Store } from "@tanstack/react-store";

interface IStore {
    search: string;
    filter: string;
}

export const store = new Store<IStore>({
    search: "",
    filter: ""
})