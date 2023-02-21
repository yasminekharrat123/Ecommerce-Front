import "../BuyerCatalog/BuyerCatalog.css";
import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";

function BuyerCatalog() {
  return (
    <body>
      <div className="bg-color1">
        <NavBar />
        <h1 className="titre">Découvrez nos produits</h1>
        <h3 className="sous-titre">
          Des milliers de vendeurs proposent de nouveaux produits chaque jour !
          Soyez les premiers à les découvrir.
        </h3>

        <div className="container bg-light rounded  ">
          <div className="row ">
            <div className="col-md-3 card1">
              <Product
                title="Product 1"
                price="1000"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>

            <div className="col-md-3 card1">
              <Product
                title="Product 2"
                price="1000"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
            <div className="col-md-3 card1">
              <Product
                title="Product 3"
                price="1000"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
            <div className="col-md-3 card1">
              <Product
                title="Product 1"
                price="1000"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Product
                title="Product 1"
                price="1000"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>

            <div className="col-md-3">
              <Product
                title="Product 2"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
            <div className="col-md-3">
              <Product
                title="Product 3"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
            <div className="col-md-3">
              <Product
                title="Product 1"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 card2">
              <Product
                title="Product 1"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>

            <div className="col-md-3 card2">
              <Product
                title="Product 2"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
            <div className="col-md-3 card2">
              <Product
                title="Product 3"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
            <div className="col-md-3 card2">
              <Product
                title="Product 1"
                description="Lorem ipsum dolor sit amet. Nam quia consectetur ut quis sapiente aut recusandae voluptatem sit voluptas dolorem qui nulla sequi quo possimus fugit. "
                image="https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5808.jpg?w=900&t=st=1674932600~exp=1674933200~hmac=f11b876c96bcb66c745a7fef83f3291b72562fa42be3e13ea8d6c2600e58889c"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default BuyerCatalog;
