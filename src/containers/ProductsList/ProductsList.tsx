import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

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
    // CATEGORY
    category,
    handleSelectCategory,
  } = useProductsList();

  return (
    <Container>
      <Row>
        <Col>
          <Form className="mb-3 mt-3">
            <Form.Select value={category} onChange={handleSelectCategory}>
              <option>----</option>
              <option value="meat">meat</option>
              <option value="greens">greens</option>
              <option value="fish">fish</option>
            </Form.Select>
          </Form>

          <ListGroup>
            {itemsToShow.map((item, index) => (
              <ListGroup.Item key={index} className={classes.productItem}>
                <div>{item.name}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
              </ListGroup.Item>
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
