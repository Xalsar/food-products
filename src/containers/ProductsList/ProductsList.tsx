import Product from "../../types/Product";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

import SimilarProductsModal from "../SimilarProductsModal/SimilarProductsModal";
import ProductsListGroup from "../../components/ProductsListGroup/ProductsListGroup";

import classes from "./ProductsList.module.scss";

type Props = {
  // PAGINATION
  itemsToShow: Product[];
  checkIfPageIsActive: (page: number) => boolean;
  pagesToShowInPagination: number[];
  handleClickChangePage: (page: number) => void;
  handleClickPrevPage: () => void;
  handleClickNextPage: () => void;
  handleClickFirstPage: () => void;
  handleClickLastPage: () => void;
  lastPage: number;
  // CATEGORY
  category: string;
  handleSelectCategory: (
    selectEvent: React.FormEvent<HTMLSelectElement>
  ) => void;
  // MIN - MAX
  minimum: string;
  handleTypeMinimum: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maximum: string;
  handleTypeMaximum: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isMinimumDefined: boolean;
  isMaximumDefined: boolean;
  isMinimumValid: boolean;
  isMaximumValid: boolean;
  isMinimumANumber: boolean;
  isMaximumANumber: boolean;
  isMinMoreThanMax: boolean;
  // CLICK PRODUCT
  handleClickProduct: (productId: string) => void;
  showSimilarProductsModal: boolean;
  productsInRange: Product[];
  handleClickCloseSimilarProductsModal: () => void;
};

const ProductsList = ({
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
  // MIN - MAX
  minimum,
  handleTypeMinimum,
  maximum,
  handleTypeMaximum,
  isMinimumDefined,
  isMaximumDefined,
  isMinimumValid,
  isMaximumValid,
  isMinimumANumber,
  isMaximumANumber,
  isMinMoreThanMax,
  // CLICK PRODUCT
  handleClickProduct,
  showSimilarProductsModal,
  productsInRange,
  handleClickCloseSimilarProductsModal,
}: Props) => {
  return (
    <>
      <SimilarProductsModal
        show={showSimilarProductsModal}
        handleClose={handleClickCloseSimilarProductsModal}
        productsInRange={productsInRange}
      />
      <Container>
        <Row>
          <Col>
            <Form className="mb-3 mt-3">
              <InputGroup>
                <Form.Select value={category} onChange={handleSelectCategory}>
                  <option value="">----</option>
                  <option value="meat">meat</option>
                  <option value="greens">greens</option>
                  <option value="fish">fish</option>
                </Form.Select>

                <Form.Control
                  value={minimum}
                  onChange={handleTypeMinimum}
                  placeholder="Minimum"
                  isInvalid={isMinimumDefined && !isMinimumValid}
                />
                <Form.Control
                  value={maximum}
                  onChange={handleTypeMaximum}
                  placeholder="Maximum"
                  isInvalid={isMaximumDefined && !isMaximumValid}
                />
              </InputGroup>
              {isMinimumDefined && !isMinimumANumber && (
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  Minimum value shas to be a positive number
                </Form.Control.Feedback>
              )}
              {isMaximumDefined && !isMaximumANumber && (
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  Maximum value has to be a positive number
                </Form.Control.Feedback>
              )}
              {isMinMoreThanMax && (
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  Minimum can not be greater than maximum
                </Form.Control.Feedback>
              )}
            </Form>

            <ProductsListGroup>
              {itemsToShow.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => handleClickProduct(item.id)}
                >
                  <div>{item.name}</div>
                  <div>{item.category}</div>
                  <div>{item.price}</div>
                </ListGroup.Item>
              ))}
            </ProductsListGroup>

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
    </>
  );
};

export default ProductsList;
