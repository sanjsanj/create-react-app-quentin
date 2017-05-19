import React from 'react';

const List = ({ items, component}) => {
  const itemList = items.map(item => React.createElement(component, {...item, key:item.id}));
  return (
    <div>
      {itemList}
    </div>
  );
};

export default List;
