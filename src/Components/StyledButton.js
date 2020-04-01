
import React from 'react';


const StyledButton = (props) => {

  const {destination, label} = props;


  return (
    <Button
      onClick = {() => props.history.push(destination)}
      style={{color: '#FFFFFF' }}
    >
      {label}
    </Button>
  );
};

export default StyledButton;
