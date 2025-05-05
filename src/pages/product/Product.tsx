import { singleProduct } from '../../data.tsx';
import { Single } from '../../components/single/Single.tsx';

export const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};