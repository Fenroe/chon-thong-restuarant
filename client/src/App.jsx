const App = () => {
  return (
    <div className="parallax-wrapper">
      <header>
        <nav>
          <a href="">About</a><a href="">Menu</a><a href="">Info</a>
        </nav>
      </header>
      <section className="parallax-group image-group">
        <img
        src="/exterior.jpg"
        alt="Exterior of restuarant"
        className="parallax-layer bottom-layer" />
        <div className="parallax-layer top-layer">
          <h1>Local Thai Cuisine</h1>
        </div>
      </section>
      <section className="parallax-group text-group">
        <div className="group-content-wrapper">
          <img src="/logo.jpg" alt="Chon Thong Thai Ravintola Kouvola" className="text-group-icon"/>
          <h1>Order From Home</h1>
          <p>You can order from our restuarant over the phone to pick up and enjoy from the comfort of your own home.</p>
          <a href="">Click here to learn more</a>
        </div>
      </section>
      <section className="parallax-group image-group">
        <img
        src="/welcome.jpg"
        alt="Exterior of restuarant"
        className="parallax-layer bottom-layer" />
        <div className="parallax-layer top-layer">
          <h1>Local Thai Cuisine</h1>
        </div>
      </section>
    </div>
  )
}

export default App
