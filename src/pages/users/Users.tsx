import { userRows, UsersColumns } from '../../data.tsx';
import { useState } from 'react';
import { DataTable } from '../../components/dataTable/DataTable.tsx';
import { Add } from '../../components/add/Add.tsx';

export const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <section>
      <div className={'flex items-center justify-between gap-5 mb-5'}>
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}
                className={'flex gap-2 text-lg border-1 border-main py-2 px-4 rounded-lg cursor-pointer transition-all duration-400 hover:bg-dark hover:border-transparent'}>
          Add New User
          <img src="/note.svg" alt="add" /></button>
      </div>
      <DataTable slug="users" columns={UsersColumns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={UsersColumns} setOpen={setOpen} />}
    </section>
  );
};
