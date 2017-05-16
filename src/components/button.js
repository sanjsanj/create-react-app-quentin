import React, { Component } from 'react';

export default ({ children, action }) => {
  return(
    <button onClick={action}>{children}</button>
  )
}
