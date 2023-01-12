



const initialstate = 5000;

const reducer = (state = initialstate,action) =>{ //create reducer;action is pass in the action file
    switch(action.type){
        case 'deposit':
            return state + action.payload; //payload is data=1000
        case 'withdraw':
            console.log("AAA",action.payload);
            if(state >(action.payload)){
                return state - action.payload;
            }else{
              alert("Amount has been exceed");
             return state = action.payload;
            }
        case 'interest':
            return (state *112)/100;
                
        default:
            return state;
    }
}

export default reducer;
