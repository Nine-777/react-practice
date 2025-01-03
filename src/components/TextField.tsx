import TextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export const InputTextField = ({ id, label, defaultValue, ...props }: MuiTextFieldProps) => {
  return (
    <TextField id={id} label={label} defaultValue={defaultValue} {...props} variant="outlined" />
  );
};

export default InputTextField;
