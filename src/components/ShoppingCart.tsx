// components/ShoppingCart.tsx

import React, { useState } from 'react';
import { Button, Input, Divider, Col, Row } from 'antd';

interface ShoppingCartProps {
    currencySymbol: string;
    price: number;
    updateCartCount: (quantity: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ currencySymbol, price, updateCartCount  }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        updateCartCount(quantity);
    };

    const handleAddToFavorites = () => {
        console.log('Added to favorites');
    };

    return (
        <div>
            <div style={{ color: '#2A64DB', fontWeight: 'bold', width: '90%', margin: '0 auto', marginTop: '10px' }}>
                <span style={{ verticalAlign: 'middle' }}>{currencySymbol}</span>
                <span style={{ fontSize: '30px', verticalAlign: 'top' }}>{price}</span>
            </div>
            <Divider style={{ margin: '0', marginBottom: '20px'}} dashed={true} />
            <div style={{ display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto'}}>
                <span style={{ fontWeight: 'bold', marginRight: '20px' }}>Quantity: </span>
                <div style={{ display: 'flow', alignItems: 'center' }}>
                    <Button style={{ borderRadius: '0', color: '#2A64DB' }} onClick={handleDecrement}>
                        -
                    </Button>
                    <Input
                        value={quantity}
                        style={{ width: '50px', textAlign: 'center', borderRadius: '0' }}
                        readOnly
                    />
                    <Button style={{ borderRadius: '0', color: '#2A64DB' }} onClick={handleIncrement}>
                        +
                    </Button>
                </div>
            </div>
            <Row justify="center" style={{marginTop: '20px'}}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 20 }} lg={{ span: 22 }} xl={{ span: 22 }} style={{ width: '90%', maxWidth: '400px', margin: '0 auto' }}>
                    <Button
                        style={{ background: '#2A64DB', color: 'white', border: '1px solid dodgerblue', borderRadius: '0', marginBottom: '5px' }}
                        block
                        onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 20 }} lg={{ span: 22 }} xl={{ span: 22 }} style={{ width: '90%', maxWidth: '400px', margin: '0 auto' }}>
                    <Button
                        style={{ background: 'white', color: '#2A64DB', border: '1px solid dodgerblue', borderRadius: '0', marginBottom: '20px' }}
                        block
                        onClick={handleAddToFavorites}
                    >
                        Add to Favorites
                    </Button>
                </Col>
            </Row>
        </div>
    );

};

export default ShoppingCart;
