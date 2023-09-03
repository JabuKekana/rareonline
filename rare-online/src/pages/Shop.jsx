import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: allProducts, loading } = useGetData("products");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    console.log("Filtering with value:", filterValue);
    if (filterValue === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (item) => item.category.toLowerCase() === filterValue.toLowerCase()
      );
      console.log("Filtered products:", filtered);
      setFilteredProducts(filtered);
    }
  };
  

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = allProducts.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(searchedProducts);
  };

  // Shuffle the filtered products array before rendering
  const shuffledFilteredProducts = [...filteredProducts].sort(() => Math.random() - 0.5);

  return (
    <Helmet title="Shop">
      <CommonSection title="Shop" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="all">All</option>
                  <option value="Mobile-Phone">Mobile Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Watch">Watch</option>
                    <option value="Other">Other</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              {/* Sort by options */}
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title"></h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={shuffledFilteredProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
