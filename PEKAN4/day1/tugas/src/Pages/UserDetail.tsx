import { useParams } from "react-router-dom";
import type { UserRouteParams } from "../types/Routes";

function UserDetail() {
  const { id } = useParams<UserRouteParams>();

  return <h2>User ID: {id}</h2>;
}

export default UserDetail;
