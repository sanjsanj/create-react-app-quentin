import React from 'react';

export default ({ children, action }) => {
  return(
    <div>
      <button onClick={action}>{children}</button>
    </div>
  )
}
