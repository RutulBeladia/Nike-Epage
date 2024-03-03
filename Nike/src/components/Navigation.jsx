const Navigation = () =>{
    return(
        <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About Us</li>
          <li href="#">Contact Us</li>
        </ul>

        <button>Login</button>
      </nav>
    );
};

export default Navigation;