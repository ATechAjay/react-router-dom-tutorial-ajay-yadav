# Steps For Create Routes

1. Create a React project using any tool, for example using vite, use the following command.

```JavaScript
npm create vite@latest
cd folderName
npm install
npm run dev
```

2. Download the react-router-dom library in the project using this commands.

```JavaScript
npm i react-router-dom
```

3. Now we need to include a Navigation bar, so i am going to use Bootstrap for this.

```JavaScript
// 1. Inlcude Bootstrap CDN into React HTML file - It will update time to time, so copy the latest one.
   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />

  <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>

// 2. Create a React component for the Navbar.

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React-Router-DOM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

```

4. Create a Root router using createBrowserRouter()

First thing first, replace all anchor <a href="#">Click here</a> tags with <Link to="#">Click here</Link> component.
