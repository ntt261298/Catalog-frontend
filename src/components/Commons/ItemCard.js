import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const ItemCard = (props) => {
  const { id, title, category_id } = props.item;
  return (
    <Card key={id} className="item-card">
      <Card.Body>
        <Card.Title style={{ borderBottom: '1px solid #f7f7f7' }}>{ title }</Card.Title>
        <Link to={`/category/${category_id}/item/${id}`}>
          <Button variant="primary">
              View Detail
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};


ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
