import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router';
import { GridToolbar } from '@mui/x-data-grid/internals';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export const DataTable = (props: Props) => {
  const { columns, rows, slug } = props;
  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id: number) => {
    console.log(id);
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className={'flex justify-evenly'}>
          <Link to={`/${slug}/${params.row.id}`}>
            <img className={'block w-5 h-5 cursor-pointer'} src="/view.svg" alt="view icon" />
          </Link>
          <button
            onClick={() => handleDelete(params.row.id)}
            type={'button'}
            className={'cursor-pointer'}
            aria-label={'delete button'}>
            <img className={'w-5 h-5'} src="/delete.svg" alt="delete icon" />
          </button>
        </div>
      );
    },
  };

  return (
    <DataGrid
      className={'bg-white w-fit ml-auto mr-auto max-w-full'}
      rows={rows}
      columns={[...columns, actionColumn]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableDensitySelector
      disableColumnSelector
    />
  );
};
