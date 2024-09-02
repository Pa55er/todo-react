import "./list.css";
import List from "./List";

export default function PostList({ lists, setLists }) {
    return (
        <ul className="postList mw">
            {lists.map((list, i) => (
                <List key={i} list={list} setLists={setLists} index={i} />
            ))}
        </ul>
    );
}
