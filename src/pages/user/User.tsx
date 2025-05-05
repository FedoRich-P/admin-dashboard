import { singleUser } from '../../data.tsx';
import { Single } from '../../components/single/Single.tsx';

export const User = () => {

  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}