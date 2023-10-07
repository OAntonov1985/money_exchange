import React, { useState } from "react";
import { useSelector } from "react-redux";

function ButtonFinishDeal() {
    const [modalMakeDeal, setModalMakeDeal] = useState(false)

    const buttonClassname = useSelector((state) => state.buttonClassname);
    const valueForSail = useSelector((state) => state.valueForSail);
    const valueForBuy = useSelector((state) => state.valueForBuy);

    function buttonPushToMakeDeal() {
        setModalMakeDeal(true);
    }

    return (
        <>
            <div className="submit__deal">
                <button
                    className={buttonClassname}
                    // disabled={buttonActive}
                    onClick={buttonPushToMakeDeal}>
                    Продати {valueForSail} і купити {valueForBuy}
                </button>
            </div>
        </>
    )
}

export default React.memo(ButtonFinishDeal)