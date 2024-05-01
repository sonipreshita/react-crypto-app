import React from "react";
import { CDBNavbar, CDBInput } from "cdbreact";

const Navbar = () => {

  return (
    <header className="headerClass">
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        <CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav" />
        <div className="ml-auto">
          <i className="fas fa-bell"></i>
          <i className="fas fa-comment-alt mx-4"></i>
          <i class="fas fa-user"></i>
        </div>
      </CDBNavbar>
    </header>
  );
}

export default Navbar;
