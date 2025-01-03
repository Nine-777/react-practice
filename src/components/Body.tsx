import Typography from '@mui/joy/Typography';
import React from 'react';

type BodyProps = {
  level?: 'body-lg' | 'body-md' | 'body-sm';
  align?: 'left' | 'center' | 'right' | 'justify';
  label: string;
};

const Body: React.FC<BodyProps> = ({ level = 'body-md', align = 'left', label }) => {
  return (
    <Typography level={level} textAlign={align}>
      {label}
    </Typography>
  );
};

export default Body;
