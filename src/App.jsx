import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png"
            alt="Logo"
            className="logo"
          />
          <div>
            <h1>RESQORA</h1>
            <p>National Portal of India</p>
          </div>
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">EMERGENCY</a></li>
            <li><a href="#">REPORT AN ISSUE</a></li>
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">🔍</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h2>STOP DOMESTIC VIOLENCE</h2>
          <img
            src="https://cdn.pixabay.com/photo/2020/04/25/13/09/family-5099741_960_720.png"
            alt="Domestic Violence Awareness"
            className="banner-img"
          />
          <button>Find Help Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;
