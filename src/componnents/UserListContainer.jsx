import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";
import { useEffect } from "react";

export default function UserListContainer() {
  const { loading, error, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  return (
    <div className="w-1/2 p-4  bg-blue-300 rounded-xl shadow-xl ">
      <h3 className="text-center text-lg font-semibold pb-2 border-b mb-4 border-white">
        List of users
      </h3>
      {loading ? (
        <span>Loading Data ...</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <ul>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
}
