export const depositMoney=(amount)=>{
    return (dispatch) =>{ //dispatch method eka eeke athule dispatch method eka call krnwa parameters pass krla
        dispatch({
            type: 'deposit',
            payload: amount,
        });
    };
}

export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload:amount,
        })
    }
}

export const addinterestRate = (percentage)=>{
    return (dispatch)=>{
        dispatch({
            type: 'interest',
            payload: percentage
        })
    }
}