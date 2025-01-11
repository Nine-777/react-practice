// ---- MUI ----
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: Props) {
  return <Box component="section">{children}</Box>;
}
