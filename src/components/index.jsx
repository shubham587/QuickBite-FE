import logo from '../images/logo.webp'


const Navbar = () =>{
    return (
        <div className="flex bg-gray-800 p-[2px_20px]">
      <img src={logo} alt="" className="logo" />
      <div className="spacer"></div>
      <div className="searchBar">
      <input
        type="text"
        // value={query}
        // onChange={handleInputChange}
        placeholder="Search..."
        className="searchInput"
      />
    </div>
    <div style={{width:"12%"}} ></div>
      <ul className="navbarList">
        <li className="navbarItem" onClick={() => navigate('/quick-bite-application/home')}>
          <p>Home</p>
        </li>
        <li className="navbarItem"  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div>
         <div style={{color:"#646cff"}}>Catalouge</div>
         {open && <div className="dropdownMenu">
            <p className="dropdownItem">Snack</p>
            <p className="dropdownItem">Lunch</p>
            <p className="dropdownItem">BreakFast</p>
            <p className="dropdownItem">Juice</p>
            <p className="dropdownItem">Dinner</p>
            <p className="dropdownItem">Sandwich</p>
         </div>}
         </div>
        </li>
        <li className="navbarItem" onClick={() => navigate('/quick-bite-application/cart')}>
          <p>Cart</p>
        </li>
      </ul>
    </div>
    )
}
export default Navbar