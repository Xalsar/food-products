import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";

import useProductsList from "./hooks/use-productsList";

import classes from "./ProductsList.module.scss";

const ProductsList = () => {
  const {
    // PAGINATION
    itemsToShow,
    checkIfPageIsActive,
    pagesToShowInPagination,
    handleClickChangePage,
    handleClickPrevPage,
    handleClickNextPage,
    handleClickFirstPage,
    handleClickLastPage,
    lastPage,
  } = useProductsList();

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {itemsToShow.map((item, index) => (
              <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
            ))}
          </ListGroup>

          <div className={classes.paginationContainer}>
            <Pagination>
              <Pagination.First onClick={handleClickFirstPage} />
              <Pagination.Item onClick={handleClickFirstPage}>
                {1}
              </Pagination.Item>
              <Pagination.Prev onClick={handleClickPrevPage} />

              {pagesToShowInPagination.map((page, index) => (
                <Pagination.Item
                  key={index}
                  active={checkIfPageIsActive(page)}
                  onClick={() => handleClickChangePage(page)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next onClick={handleClickNextPage} />
              <Pagination.Item onClick={handleClickLastPage}>
                {lastPage + 1}
              </Pagination.Item>
              <Pagination.Last onClick={handleClickLastPage} />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsList;
