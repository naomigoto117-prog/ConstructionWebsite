function Topbar() {
  return (
    <div className="container-fluid bg-dark p-0 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-3">
            <a className="text-white-50 px-2" href="tel:+639123456789">
              <i className="fa fa-phone-alt text-primary me-2"></i>
              +63 912 345 6789
            </a>
            <a className="text-white-50 px-2" href="mailto:info@arkitektur.com">
              <i className="fa fa-envelope-open text-primary me-2"></i>
              info@arkitektur.com
            </a>
          </div>
        </div>

        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square btn-outline-light me-1" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-sm-square btn-outline-light me-1" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-sm-square btn-outline-light" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;