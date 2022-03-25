// with this design pattern we create a regularList wich receive three props ({ TheList, TheResourceName, ItemComponent })
// we can reuse this list as much as we can in different parts of our application,

export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
