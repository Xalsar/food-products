import ListGroup from "react-bootstrap/ListGroup";

import classes from "./ProductsListGroup.module.scss";

type Props = {
  children: JSX.Element[];
};

const ProductsListGroup = ({ children }: Props) => {
  return <ListGroup className={classes.productsList}>{children}</ListGroup>;
};

export default ProductsListGroup;
