import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/HomePage">Home</NavLink>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Product</NavLink>
          </li>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
