import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import BuySell from '../models/BuySell';
import OptionType from '../models/OptionType';
import { withStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },

  input : {
    height: "30px",
    padding: "0px 5px 0px 5px",
    textAlign:'center'
  },
}));

export default function PositionInput({position}) {
  const classes = useStyles();
  const {checked, premium , buysell, putcall, strike , handleRemoveClick, handleCheckChange , handleInputChange, handleToggleChange, index } = position;
  // const [checked, setChecked] = React.useState(true);
 
  const handleChange = (event) => {
    setChecked(event.target.checked);
    handleCheckChange();
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <div className={classes.root}>
    <Grid container justify='space-around' spacing = {1} alignItems="center" key = {index}>
    <Grid item xs = {1}>
    <Checkbox
        checked={checked}
        onChange={e => handleCheckChange(e,index)}
        color="primary"
        style={{textAlign: "center"}}
      />
      </Grid>
        <Grid item xs = {2} style={{textAlign: "center"}}>
            <RowToggleButtons index = {index} name = "buysell" value = {buysell} onChange = {handleToggleChange}  options = {BuySell} ></RowToggleButtons>
        </Grid>
        <Grid item xs = {2}>
            <RowTextField index = {index} name = "strike" value = {strike } onChange = {handleInputChange}/>
        </Grid>
        <Grid item xs = {2}>
            <RowTextField index = {index} name = "premium" value=  {premium } onChange = {handleInputChange} />
        </Grid>
        <Grid item xs = {2} style={{textAlign: "center"}}>
            <RowToggleButtons index = {index} name = "putcall" value = {putcall} onChange = {handleToggleChange}  options = {OptionType} ></RowToggleButtons>
        </Grid>
        <Grid item xs = {1} style={{textAlign: "center"}}>
        <IconButton color="primary" size = 'small' variant="contained" className={classes.input}  aria-label="Delete this position" onClick = {handleRemoveClick}>
            <DeleteIcon/>
        </IconButton>
        </Grid>       
      </Grid> 
    </div>
  );
}

const RowTextField = ({index, name, value,onChange}) => {

    const classes = useStyles();
    return <TextField name = {name} defaultValue = {value} onChange = {e => onChange(e,index)}  InputProps={{ classes: { input: classes.input } }} size = "small" id="quantity"  variant="outlined" />
    
}

const RowToggleButtons = ({index, name, value, onChange,options}) => {
    const classes = useStyles();
    return <ToggleButtonGroup
                value={value}
                exclusive
                onChange={(e,newValue) => onChange(index, name, newValue)}>
                {
                    Object.keys(options).map((key,i) => {
                    const option = options[key];

                    return (
                        <ToggleButton key= {option.code} value={option.value} aria-label={option.description} className = {classes.input}>
                          <ToggleButtonTypography>{option.description}</ToggleButtonTypography>
                         </ToggleButton>
                    );
                })}  
            </ToggleButtonGroup>
}


const ToggleButtonTypography = withStyles({
    root: {    
      color: "#9c9c9c",
      fontSize: "12px",
      textAlign: "center",

    }
  })(Typography);

