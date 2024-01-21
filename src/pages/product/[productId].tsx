// pages/product/[productId].tsx

import {useRouter} from "next/router";
import {Col, Row, Card, Divider, Carousel, Button} from 'antd';
import Layout from "../../components/Layout";
import productsData from "../../data/products.json";
import React, {useContext, useRef, useState} from "react";
import ShoppingCart from "../../components/ShoppingCart";
import {AppStateContext} from "../../utils/AppState";

const {Meta} = Card;

export default function ProductPage() {
    const router = useRouter();
    const {pathname, query} = router;
    const { itemCount, setItemCount } = useContext(AppStateContext);

    const updateCartCount = (quantity: number) => {
        setItemCount((prevCount) => {
            const newCount = prevCount + quantity;
            return newCount;
        });
    };
    const findProductById = (id: string) => {
        return productsData.find((product) => product.id === id);
    };
    const selectedProduct = findProductById(query.productId as string);

    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselRef = useRef(null);

    if (!selectedProduct) {
        return (
            <Layout>
                <p>Loading...</p>
            </Layout>
        );
    }
    const handleThumbnailClick = (index) => {
        setCarouselIndex(index);
    };


    return (
        <>
            {/*<style jsx>{`*/}
            {/*    .eezee{*/}
            {/*        color: #2A64DB;*/}
            {/*        font-size: 16px;*/}
            {/*    }*/}
            {/*`}</style>*/}

            {/*<p className="eezee">*/}
            {/*    This is your product page*/}
            {/*</p>*/}

            {/*<p className="eezee">*/}
            {/*    This is your dynamic product id: <strong>{router.query.productId}</strong>*/}
            {/*</p>*/}

            <style jsx>{`
                .thumbnail-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }

                .thumbnail {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    margin: 0 5px;
                    cursor: pointer;
                }

                .thumbnail.active {
                    border: 2px solid #2A64DB;
                }

                .thumbnail-dots {
                    bottom: -15px;
                }

                
                .thumbnail-container img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    margin: 0 5px;
                }
            `}</style>

            <Layout itemCount={itemCount}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} style={{marginTop: '15px', backgroundColor: 'white'}}>
                        <div style={{display: 'flex'}}>
                            <Card
                                style={{
                                    width: "30%",
                                    backgroundColor: "whitesmoke",
                                    marginTop: "16px",
                                    marginLeft: "16px",
                                    marginBottom: "16px"
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        padding: "10px",
                                    }}
                                >
                                    <img
                                        alt="example"
                                        src={selectedProduct.metadata.brandImage ? selectedProduct.metadata.brandImage : "Undefined"}
                                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                                    />
                                </div>
                                <Meta
                                    title={
                                        <div
                                            style={{
                                                color: "#2A64DB",
                                                textAlign: "center",
                                                marginTop: "10px",
                                            }}
                                        >
                                            View Brand
                                        </div>
                                    }
                                />
                            </Card>
                            <div style={{marginLeft: '16px', marginTop: '10px', flexDirection: 'column'}}>
                                <div style={{marginLeft: '16px', marginTop: '10px'}}>
                                    <h2>{selectedProduct.title}</h2>
                                </div>
                                <div style={{marginLeft: '16px', marginTop: '10px'}}>
                                    Brand: <span style={{color: '#2A64DB'}}>{selectedProduct.metadata.brand}</span>
                                </div>
                                <div style={{marginLeft: '16px', marginTop: '10px'}}>
                                    Model: <span style={{color: '#2A64DB'}}>{selectedProduct.metadata.model}</span>
                                </div>
                            </div>
                        </div>
                        <Divider/>
                        <div style={{justifyContent: 'center'}}>
                            <Carousel
                                // autoplay
                                beforeChange={(from, to) => setCarouselIndex(to)}
                                dotPosition="bottom"
                                dots={{className: 'thumbnail-dots'}}
                                ref={carouselRef}
                            >
                                {selectedProduct.images.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image.url}
                                            alt={`Product Image ${index}`}
                                            style={{width: '100%', maxHeight: '400px', objectFit: 'contain'}}
                                        />
                                    </div>
                                ))}
                            </Carousel>

                            <div className="thumbnail-container">
                                {selectedProduct.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.url}
                                        alt={`Thumbnail ${index}`}
                                        className={`thumbnail ${carouselIndex === index ? 'active' : ''}`}
                                        onClick={() => {
                                            if (carouselRef && carouselRef.current) {
                                                carouselRef.current.goTo(index, false);
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <Divider/>
                        <div style={{marginLeft: '16px', marginTop: '10px'}}>
                            <h2>Product Description</h2>
                            <h3>Specification</h3>
                            <div dangerouslySetInnerHTML={{__html: selectedProduct.descriptionHtml}}/>
                        </div>
                    </Col>
                    <Col span={6} style={{marginTop: '15px', marginLeft:'10px', height: '100%', backgroundColor: 'white'}}>
                        <ShoppingCart currencySymbol={selectedProduct.currencySymbol} price={selectedProduct.lowPrice} updateCartCount={updateCartCount} />
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </Layout>
        </>
    )
}