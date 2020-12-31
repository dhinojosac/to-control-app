import React, {useState} from "react";

export default function Patient(props) {
    const [count, setCount] = useState(0);

    const {details} = props;

    function handleIncrementClick() {
        setCount(count + 1);
    }
    function handleDecrementClick() {
        if (count > 0){
            setCount(count - 1);
        }
    }

    if (!details){
        return null;
    }

    return <div className="patient">
        <div className="patient-info" onClick={()=>console.log("Clicked "+ details.firstname)}>
            <h2>{details.firstname} {details.lastname}</h2>
            <p>{details.description}</p>
        </div>
        <div className="patient-buttons">
            <button className="patient-sub" disabled={count === 0} onClick={handleDecrementClick}>-</button>
            <h3 className="patient-count">{count ? count : ""}</h3>
            <button className="patient-add" onClick={handleIncrementClick}>+</button>
        </div>
    </div>
}
