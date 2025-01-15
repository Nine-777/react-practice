import Button from '@mui/material/Button';

type Props = {
  label: string;
  handleClickButton: () => void;
  sx?: object;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

const FormButton = ({ label, icon = 'send', handleClickButton, ...props }: Props) => {
  return (
    <Button
      variant="contained"
      onClick={handleClickButton}
      {...props}
    >
      {label}
    </Button>
  );
};

export default FormButton;
