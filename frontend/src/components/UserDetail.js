import { Link } from "react-router-dom";

export default function UserDetail(props) {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.gender}</td>
      <td>{props.data.age}</td>
      <td>
        <Link className="btn btn-info m-1" to={"/view-user/" + props.data._id}>
          view
        </Link>
        <Link
          className="btn btn-primary m-1"
          to={"/edit-user/" + props.data._id}
        >
          edit
        </Link>
        <button
          className="btn btn-danger m-1"
          onClick={() => props.deleteUser(props.data._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
