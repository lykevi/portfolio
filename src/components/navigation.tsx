import {Link, Outlet} from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`about`}>About Me</Link></li>
        <li><Link to={`resume&cv`}>Resume & CV </Link></li>
        <li><Link to={`photos`}>Photography</Link></li>
      </ul>
      <div id="detail">
        <Outlet/>
      </div>

    </>
  );
}