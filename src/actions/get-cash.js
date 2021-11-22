import { GET_CASH } from '../tools/constants';

 export const GetCash = (cash) =>{
    return{
        type: GET_CASH,
        cash
    }
}

// export default GetCash;