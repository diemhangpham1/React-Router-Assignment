import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}