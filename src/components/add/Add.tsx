import { Dispatch, SetStateAction } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type FormData = {
  [key: string]: string | number | boolean;
};

export const Add = (props: Props) => {
  const { slug, columns, setOpen } = props;

  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form data:', data);
    // mutation.mutate(data);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 w-full h-full">
      <div className="relative bg-main-bg rounded-lg p-12 w-[50vw]">
        <span
          className="absolute top-3 right-4 text-xl cursor-pointer text-soft-color"
          onClick={() => setOpen(false)}>
          Close X
        </span>
        <h2 className="mb-10 text-2xl text-soft-color">Add new {slug}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
          {columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="flex flex-col items-end  gap-2 w-full" key={column.field}>
                <label className="text-sm text-white">{column.headerName}</label>
                <input
                  type={column.type as string}
                  placeholder={column.field}
                  {...register(column.field, { required: true })}
                  className="px-3 py-2 bg-transparent border border-soft-color rounded text-white outline-none w-full"
                />
                {errors[column.field] && (
                  <span className="text-red-400 text-xs">This field is required</span>
                )}
              </div>
            ))}
          <button
            type="submit"
            className="w-1/2 py-2 mt-4 bg-soft-bg text-white rounded hover:opacity-60 transition-all duration-400 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};