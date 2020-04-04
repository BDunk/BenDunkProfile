
import React from 'react';
import {Button} from "@material-ui/core";
import { withRouter } from "react-router";

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

export default withRouter(StyledButton);
