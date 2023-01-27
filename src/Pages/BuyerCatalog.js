import "../BuyerCatalog.css";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
function BuyerCatalog() {
  return (
    <div>
      <NavBar />

      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <Product
              title="Product 1"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>

          <div className="col-md-3">
            <Product
              title="Product 2"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>
          <div className="col-md-3">
            <Product
              title="Product 3"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>
          <div className="col-md-3">
            <Product
              title="Product 1"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Product
              title="Product 1"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>

          <div className="col-md-3">
            <Product
              title="Product 2"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>
          <div className="col-md-3">
            <Product
              title="Product 3"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>
          <div className="col-md-3">
            <Product
              title="Product 1"
              image="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerCatalog;
