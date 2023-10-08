import { actualCourseAfterChangeValue, setReadInpit, actualValueForSailRow1, setStartBalanseRow1 } from '../App/store2';

export function updateCurrencyData(dispatch, event, userMoney) {
    dispatch(actualCourseAfterChangeValue(1));
    dispatch(setReadInpit('readOnly'));
    dispatch(actualValueForSailRow1(event.target.value));
    dispatch(setStartBalanseRow1(userMoney[event.target.value]));
}
