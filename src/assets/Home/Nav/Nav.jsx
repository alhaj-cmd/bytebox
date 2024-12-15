function Nav() {

    return (
      <>
      <div className="navbar bg-base-100 shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Book <span>Shop</span></a>
  </div>  
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Blogs</a></li>
    </ul>
  </div>
</div>
      </>
    )
  }
  
  export default Nav