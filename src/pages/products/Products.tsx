import { DataTable } from '../../components/dataTable/DataTable.tsx';
import { products, ProductsColumns } from '../../data.tsx';
import { Add } from '../../components/add/Add.tsx';
import { useState } from 'react';

export default function Products() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className={'flex items-center justify-between gap-5 mb-5'}>
        <h1>Products</h1>
        <button
          onClick={() => setOpen(true)}
          className={
            'flex gap-2 text-lg border-1 border-main py-2 px-4 rounded-lg cursor-pointer transition-all duration-400 hover:bg-dark hover:border-transparent'
          }>
          Add New Product
          <img src="/note.svg" alt="add" />
        </button>
      </div>
      <DataTable slug="products" columns={ProductsColumns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={ProductsColumns} setOpen={setOpen} />}
    </section>
  );
}
