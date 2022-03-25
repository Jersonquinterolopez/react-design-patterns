import { LeftSideComponent } from './features/LeftSideComponent';
import { LargePersonListItem } from './features/people/LargePersonListItem';
import { SmallPersonListItem } from './features/people/SmallPersonListItem';
import { SmallProductListItem } from './features/products/SmallProductListItem';
import { RightSideComponent } from './features/RightSideComponent';
import { NumberedList } from './layout/NumberedList';
import { RegularList } from './layout/RegularList';
import { SplitScreen } from './layout/SplitScreen';
import { people } from './shared/utils/people';
import { products } from './shared/utils/products';
import { LargeProductListItem } from './features/products/LargeProductListItem';

const App = () => {
  return (
    // <SplitScreen leftWeight={1} rightWeight={3}>
    //   <LeftSideComponent name="Jhon" />
    //   <RightSideComponent message="Hello world" />
    // </SplitScreen>
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />

      <hr />

      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <hr />

      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />

      <hr />

      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
};

export default App;
