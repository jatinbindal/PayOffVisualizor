import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PositionInput from './PositionInput';
import PositionInputHeader from './PositionInputHeader';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      justifyContent: 'center'
      
    },
  },
  input : {
    height: "30px",
    padding: "0px 0px 0px 0px",
  },
  
  label : {
    height: "30px",
    top: "-3px"
  },

  button : {
    height: "30px",

  }
   
}));





export default function InputSection() {
  const classes = useStyles();
  const createNewPosition = () => (
    {
      checked : true,
      buysell : "",
      premium : null,
      strike : null,
      putcall : "",
      valid : false
    });
  
  const [positions, setPositions] = useState([{...createNewPosition()}]);
  
   
  const handleInputChange = (e, index) => {
    const { name , value } = e.target;
    const list = [...positions];
    list[index][name] = value;
    setPositions(list);
  };

  const handleToggleChange = (index,name,value) => {
    const list = [...positions];
    list[index][name] = value;
    setPositions([...positions]);

  }

  const handleCheckChange = (event,index) => {
    const list = [...positions];
    list[index].checked = event.target.checked;
    setPositions([...positions]);
  }
  const handleAddClick = () => {
    setPositions([...positions, { ...createNewPosition()}]);
  };
  
  const handleRemoveClick = index => {
    const list = [...positions];
    list.splice(index, 1);
    setPositions(list);
  };

  return (   
      <form className={classes.root} noValidate autoComplete="off">
        <TextField  margin="dense" InputProps={{ classes: { input: classes.input } }}  InputLabelProps = {{ classes : { root : classes.label }}}size = "small" id="stock" label="Stock" variant="outlined" />
        <Button onClick = {handleAddClick} variant="contained" color="primary" className={classes.button}   startIcon={<AddIcon/>}>
          Add Position
        </Button>
        <PositionInputHeader/>
        {positions.map((pos,  i) => {  
            return (  
                <PositionInput key = {i} position = {{...pos, index : i , handleRemoveClick , handleCheckChange , handleInputChange, handleToggleChange}} > </PositionInput>
              );
        })}
      </form>
  );
}


