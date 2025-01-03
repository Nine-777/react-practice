import Typography from '@mui/joy/Typography';
import React from 'react';

type TitleProps = {
  level?: 'title-lg' | 'title-md' | 'title-sm';
  align?: 'left' | 'center' | 'right' | 'justify';
  label: string;
};

const Title: React.FC<TitleProps> = ({ level = 'title-md', align = 'left', label }) => {
  return (
    <Typography level={level} textAlign={align}>
      {label}
    </Typography>
  );
};
export default Title;
