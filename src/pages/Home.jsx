import React from "react";

const Home = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-transparent">
      <div class="container-fluid" style={{width:'250px', border:'1px solid gray', borderRadius: '10px'}}>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
               >
                Browse Collections
              </a>
              <ul class="dropdown-menu" style={{width: "250px", margin: "5px -50px" }}>
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;
