import Product from "../../types/Product";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import ProductsListGroup from "../../components/ProductsListGroup/ProductsListGroup";

import useSimilarProductModal from "./hooks/use-similarProductModal";

type Props = {
  show: boolean;
  handleClose: () => void;
  productsInRange: Product[];
};

const SimilarProductsModal = ({
  show,
  handleClose,
  productsInRange: productsListToLoad,
}: Props) => {
  const productsClosePriceList = useSimilarProductModal(productsListToLoad);

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Products from the same category and closest price
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductsListGroup>
          {productsClosePriceList.map((item: Product, index: number) => (
            <ListGroup.Item key={index}>
              <div>{item.name}</div>
              <div>{item.category}</div>
              <div>{item.price}</div>
            </ListGroup.Item>
          ))}
        </ProductsListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SimilarProductsModal;
