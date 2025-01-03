import Typography from '@mui/material/Typography';
import React from 'react';

type HeadingProps = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'primary' | 'secondary' | 'inherit' | 'textPrimary' | 'textSecondary';
  align?: 'left' | 'center' | 'right' | 'justify';
  label: string;
};

const Heading: React.FC<HeadingProps> = ({
  level = 'h5',
  color = 'inherit',
  align = 'left',
  label,
}) => {
  return (
    <Typography variant={level} color={color} align={align}>
      {label}
    </Typography>
  );
};
export default Heading;
