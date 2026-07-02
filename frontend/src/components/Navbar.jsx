function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-5">
      <a href="#home" className="navbar-brand d-flex align-items-center">
        <i className="fa fa-building text-red me-3 logo-icon"></i>
        <h1 className="m-0 brand-name">Arkitekt</h1>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#appointment" className="nav-link">Appointment</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <a href="#contact" className="btn btn-red ms-lg-4">
          Get A Quote <i className="fa fa-arrow-right ms-2"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;