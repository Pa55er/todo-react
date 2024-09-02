import "./list.css";
export default function List({ list, setLists, index }) {
    const removeItem = () => {
        setLists((prev) => {
            const newList = prev.filter((_, i) => i !== index);
            localStorage.setItem("tripLists", JSON.stringify(newList));
            return newList;
        });
    };
    return (
        <li className="list">
            <p>{list}</p>
            <i className="fa-solid fa-trash" onClick={removeItem}></i>
        </li>
    );
}
