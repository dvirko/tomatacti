import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet"/>
      <nav>
        <ul class="menu">
    <li class="menu_list">
        <span class="front fas fa-home"></span>
        <Link class="side" to="/Home">דף - הבית</Link>
    </li>
    <li class="menu_list">
        <span class="front fas fa-male"></span>
        <Link class="side" to="/">על - הצוות</Link>
    </li>
    <li class="menu_list">
        <span class="front fas fa-project-diagram"></span>
        <Link class="side" to="/Projects">פרוייקטים</Link>
    </li>

</ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;