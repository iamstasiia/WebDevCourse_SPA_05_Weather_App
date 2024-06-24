import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ setLocation }) {
    const [input, setInput] = useState("");
    const [showInput, setShowInput] = useState(false);

    const showInputEvent = () => {
        if (showInput && input !== "") {
            setLocation(input);
            setInput("");
        }
        setShowInput(!showInput);
    };

    const submitEvent = (event) => {
        event.preventDefault();

        if (input !== "") {
            setLocation(input);
            setInput("");
        }
        setShowInput(false);
    };

    return (
        <div className="search-container">
            <form
                onSubmit={submitEvent}
                className={showInput ? "show-form" : ""}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter location"
                    className={showInput ? "show-input" : ""}
                    id="input"
                />
                <label htmlFor="input" onClick={showInputEvent}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </label>
            </form>
        </div>
    );
}
export default Search;
