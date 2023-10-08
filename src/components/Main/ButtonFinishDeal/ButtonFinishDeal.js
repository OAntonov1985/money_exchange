import React from "react";
import { useSelector } from "react-redux";

function ButtonFinishDeal(props) {

    const buttonClassname = useSelector((state) => state.buttonClassname);
    const valueForSail = useSelector((state) => state.valueForSail);
    const valueForBuy = useSelector((state) => state.valueForBuy);

    return (
        <>
            <div className="submit__deal">
                <button
                    className={buttonClassname}
                    onClick={props.onClick}>
                    Продати {valueForSail} і купити {valueForBuy}
                </button>
            </div>
        </>
    )
}

export default React.memo(ButtonFinishDeal)