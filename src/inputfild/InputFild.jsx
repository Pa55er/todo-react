import { useState } from "react";
import "./InputFild.css";

export default function InputFild({ setLists }) {
    const [inputText, setInputText] = useState("");
    const inputItem = (e) => {
        setInputText(e.target.value);
    };
    const addItem = () => {
        if (inputText.trim().length < 2) {
            alert(
                inputText.trim() === ""
                    ? "내용을 입력해주세요"
                    : "2글자 이상 입력해주세요"
            );
            document.querySelector(".tripInput").focus();
            return;
        }

        setLists((prev) => {
            const newList = [inputText, ...prev];
            localStorage.setItem("tripLists", JSON.stringify(newList));
            return newList;
        });
        setInputText("");
        document.querySelector(".tripInput").focus();
    };
    const handleKeyup = (e) => {
        if (e.key === "Enter") {
            addItem();
        }
    };
    return (
        <div className="inputfild mw">
            <input
                className="tripInput"
                value={inputText}
                type="text"
                placeholder="여행지를 입력해주세요"
                onChange={inputItem}
                onKeyUp={handleKeyup}
            ></input>
            <button onClick={addItem}>검색</button>
        </div>
    );
}
