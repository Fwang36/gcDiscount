import './Navbar.scss'


export default function Navbar(props) {

  return (
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">GC Discount Furniture</a>
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">View Our Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Admin</a>
      </li>
      </ul>
</nav>
  )
}