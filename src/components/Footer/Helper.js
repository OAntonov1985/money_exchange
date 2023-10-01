// import { useDispatch, useSelector } from "react-redux";
// import { isLoading } from '../App/store2';

// export default function Helper(event) {
//     const dispatch = useDispatch();
//     const num = useSelector((state) => state.isLoading);
//     dispatch(isLoading(5));
//     console.log(event);
//     return dispatch(isLoading(5));;
// }

export function pushNum(currentNum) {
    return currentNum + 5;
}