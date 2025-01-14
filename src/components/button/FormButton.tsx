import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const ICON_MAP = {
  send: <SendIcon />,
  delete: <DeleteIcon />,
} as const;

type Props = {
  label: string;
  icon?: keyof typeof ICON_MAP;
  handleClickButton: () => void;
  sx?: object;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

const FormButton = ({ label, icon = 'send', handleClickButton, ...props }: Props) => {
  return (
    <Button
      variant="contained"
      endIcon={icon ? ICON_MAP[icon] : undefined}
      onClick={handleClickButton}
      {...props}
    >
      {label}
    </Button>
  );
};

export default FormButton;