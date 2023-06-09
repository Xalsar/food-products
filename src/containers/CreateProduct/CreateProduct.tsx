import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type Props = {
  // VALUES
  name: string;
  handleTypeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
  handleSelectCategory: (event: React.FormEvent<HTMLSelectElement>) => void;
  price: string;
  handleTypePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // SUBMIT
  hasSubmittedForm: boolean;
  handleSubmitForm: (event: React.FormEvent<EventTarget>) => void;
  isNameValid: boolean;
  isPriceValid: boolean;
  nameErrorMessage: string;
  priceErrorMessage: string;
  isFormValid: boolean;
};

const CreateProduct = ({
  // VALUES
  name,
  handleTypeName,
  category,
  handleSelectCategory,
  price,
  handleTypePrice,
  // SUBMIT
  hasSubmittedForm,
  handleSubmitForm,
  isNameValid,
  isPriceValid,
  nameErrorMessage,
  priceErrorMessage,
  isFormValid,
}: Props) => {
  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="product.name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={name}
              onChange={handleTypeName}
              isValid={hasSubmittedForm && isNameValid}
              isInvalid={hasSubmittedForm && !isNameValid}
            />
            <Form.Control.Feedback type="invalid">
              {nameErrorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="product.category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={handleSelectCategory}
              isValid={hasSubmittedForm}
            >
              <option value="greens">greens</option>
              <option value="fish">fish</option>
              <option value="meat">meat</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="product.price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={price}
              onChange={handleTypePrice}
              isValid={hasSubmittedForm && isPriceValid}
              isInvalid={hasSubmittedForm && !isPriceValid}
            />
            <Form.Control.Feedback type="invalid">
              {priceErrorMessage}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Create
        </Button>
        {hasSubmittedForm && !isFormValid && (
          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            Form is not valid, please check all the fields
          </Form.Control.Feedback>
        )}
      </Form>
    </Container>
  );
};

export default CreateProduct;
