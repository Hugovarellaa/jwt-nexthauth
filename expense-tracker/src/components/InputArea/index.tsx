import { Item } from "../../types/item"
import * as C from "./styles"

interface InputAreaProps {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}:InputAreaProps) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(Date.now()),
            category: "food",
            title: "Item de teste",
            value: 300
        }
        onAdd(newItem)
    }
    return(
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}