import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux'; //store ekee thiyena data access krnna puluwan useSelector eken
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(6),
        
        position: 'relative',
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  }));


export default function Bankui() {

  const store = useSelector((state)=>state);
  console.log(store.bank);

  const dispatch = useDispatch();

 const { depositMoney,withdrawMoney,addinterestRate } = bindActionCreators(actionCreators,dispatch);
 // const data= bindActionCreators(actionCreators,dispatch);
  //console.log("ACTIONS",data);




        // const classes = useStyles();
      
        return (
         
             
          <div>
            <h1> {store.bank}</h1>
           
            
              <Box sx={{ mx: 'auto', width: 200 }} padding={10}  justifyContent="center">
           
            <Button onClick={()=>depositMoney(1000)} variant="contained" color="primary">
              Payment Add
            </Button>
            <Button onClick={()=>withdrawMoney(1000)} variant="contained">Withdraw </Button>
           
            <Button  onClick={()=>addinterestRate(1000)}  variant="contained" color="secondary">
              Add Interest 
            </Button>
           
            </Box>
           
    
          </div>
        );
      
}
