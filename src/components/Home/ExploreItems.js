import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Fade from "react-reveal/Fade";

const ExploreItems = () => {
  const [products, setProducts] = useState([]);

  //   --------- Pagination ---------
  const itemsCountPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  //   Get the start index in the page
  const startIndexInPage = (currentPage - 1) * itemsCountPerPage;

  //   Get the items in the page
  const paginatdItems = products.slice(startIndexInPage, startIndexInPage + itemsCountPerPage);

  //   Get no of pages
  const noOfPages = Math.ceil(paginatdItems.length / itemsCountPerPage);

  //   Get array of pages numbers
  let pagesArray = [];
  for (let i = 1; i <= noOfPages; i++) {
    pagesArray.push(i);
  }

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products", { cancelToken: cancelToken.token })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <div>
      <div className="container-new">
        <div className="title">Explore Products</div>
        <div className="products-container">
          {(
            <div>
              <Spinner animation="border" role="status" />
            </div>
          ) &&
            paginatdItems.map((product, index) => (
              <Fade key={index}>
                <div className="products">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.img[0]} style={{ width: "118px", height: "118px" }} />
                    <div className="products_name">{product.name}</div>
                    <div className="products_price d-flex justify-content-between">
                      <span> ${product.priceAfterdiscount.toFixed(2)}</span>
                      <span className="products_old-price">${product.price.toFixed(2)}</span>
                    </div>
                  </Link>
                  <div className={product.inStock > 0 ? "products_stock" : "products_stock products_outstock"}>
                    {product.inStock > 0 ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </Fade>
            ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pagesArray.length + 1}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={"pagination d-flex justify-content-center align-items-center p-0 mt-4"}
          pageClassName={"pagination_page"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"pagination_buttons mx-2"}
          nextLinkClassName={"pagination_buttons mx-2"}
          breakLinkClassName={"page-link"}
          activeClassName={"pagination_page-active"}
          // forcePage={paginatedPage - 1}
        />
      </div>
    </div>
  );
};

export default ExploreItems;
