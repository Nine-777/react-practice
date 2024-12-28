import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from "@mui/icons-material/Delete";

const ICON_MAP = {
    send: <SendIcon />,
    delete: <DeleteIcon />,
} as const;

type Props = {
label: string;
icon?: keyof typeof ICON_MAP;
}

const FormButton = ({ label , icon="send" } :Props) => {
    return (
        <Button
            variant="contained"
            endIcon={ICON_MAP[icon]}
        >
            {label}
        </Button>
    )
}

export default FormButton;