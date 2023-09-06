// import { useState } from 'react';


// function MainHeader(props) {
//     const [actualUserMoney, setActualUserMoney] = useState('USD');
//     const { userAuthorized } = props;
//     // const length = userAuthorized.length;

//     if (userAuthorized.length !== undefined) {
//         console.log(userAuthorized)

//         const nameOfValies = Object.keys(userAuthorized[0].money);

//         function setupMoney(event) {
//             setActualUserMoney(event.target.value)
//         }
//         return (
//             <>
//                 <div className='moneyOpsion'>Продаж {actualUserMoney} <div>Обрати іншу валюту <select onChange={setupMoney}>
//                     {nameOfValies.map((currency, index) => (
//                         <option key={index} value={currency}>
//                             {currency}
//                         </option>
//                     ))}
//                 </select></div></div>
//             </>)
//     }
//     else return null


//     //     console.log(userAuthorized)
//     // const [actualUserMoney, setActualUserMoney] = useState('USD');
//     // const nameOfValies = Object.keys(userAuthorized[0].money);

//     // function setupMoney(event) {
//     //     setActualUserMoney(event.target.value)
//     // }
//     // return (
//     //     <>
//     //         <div className='moneyOpsion'>Продаж {actualUserMoney} <div>Обрати іншу валюту <select onChange={setupMoney}>
//     //             {nameOfValies.map((currency, index) => (
//     //                 <option key={index} value={currency}>
//     //                     {currency}
//     //                 </option>
//     //             ))}
//     //         </select></div></div>
//     //     </>)
// }

// export default MainHeader;