// pages/index.tsx

import React, {useContext} from "react";
import {Col, Row, Card} from 'antd';
import Image from "next/image";
import banner from "../../public/images/banner.png";
import Layout from "../components/Layout";
import brandsData from "../data/brands.json";
import productsData from "../data/products.json";
import {RightOutlined} from "@ant-design/icons";
import {AppStateContext} from "../utils/AppState";

const { Meta } = Card;

export default function Homepage(): JSX.Element {
    const { itemCount } = useContext(AppStateContext);
    const filter = (array) => {
        const uniqueNames = new Set();
        return array.filter(item => {
            if (!uniqueNames.has(item.name) && item.image?.url && item.productCount) {
                uniqueNames.add(item.name);
                return true;
            }
            return false;
        });
    };

    // filter duplicate brands
    const filteredBrands = filter(brandsData);
    return (
        <>
            {/*<style jsx>{`*/}
            {/*    .eezee {*/}
            {/*        color: #2A64DB;*/}
            {/*        font-size: 16px;*/}
            {/*    }*/}
            {/*`}</style>*/}

            {/*<p className="eezee">*/}
            {/*    Welcome to Eezee Take-home Assignment! Enjoy :)*/}
            {/*</p>*/}

            <Layout itemCount={itemCount}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} style={{marginTop: '15px'}}>
                        <div style={{border: '5px solid #fff', overflow: 'hidden'}}>
                            <Image src={banner} alt="Banner" width={2000} height={450}/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={18} style={{marginTop: '15px'}}>
                        <b style={{fontSize: '20px'}}>Featured Brands</b>
                        <br/>
                        <span style={{color: '#888888'}}>Browse the full catalog of brands today</span>
                    </Col>
                    <Col span={3} style={{ color: '#2A64DB', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <span>View <RightOutlined rev={undefined} /> </span>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={2}></Col>
                    {filteredBrands.slice(0, 5).map((brand) => (
                        <Col key={brand.id} xs={8} sm={8} md={4} lg={4} xl={4}>
                            <Card
                                // hoverable
                                style={{width: '100%', height: '100%'}}
                                cover={<img alt={brand.name} src={brand.image?.url ?? 'fallbackImageUrl'}
                                            style={{width: '100%', height: '150px', objectFit: 'contain'}}/>}
                            >
                                <Meta
                                    title={<div style={{ textAlign: 'center', fontWeight: 'bold' }}>{brand.name}</div>}
                                    description={<div style={{ textAlign: 'center' }}>{`${brand.productCount} products`}</div>}
                                />
                            </Card>
                        </Col>
                    ))}
                    <Col span={2}></Col>
                </Row>

                <Row>
                    <Col span={2}></Col>
                    <Col span={20} style={{marginTop: '15px'}}>
                        <b style={{fontSize: '20px'}}>Our Most Popular Products</b>
                        <br/>
                        <span style={{color: '#888888'}}>Trusted by the best companies in Asia</span>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Row gutter={8}>
                    <Col span={2}></Col>
                    {productsData.slice(0, 5).map((product) => (
                        <Col key={product.id} xs={8} sm={8} md={4} lg={4} xl={4}>
                            <Card
                                // hoverable
                                style={{width: '100%', height: '100%'}}
                                cover={<img alt={product.title} src={product.images[0]?.url ?? 'fallbackImageUrl'}
                                            style={{width: '100%', height: '150px', objectFit: 'contain'}}/>}

                            >
                                <Meta
                                    title={
                                        <div>
                                            <span style={{ color: 'lightgrey', textDecoration: 'line-through' }}>{product.highPriceOriginalPretty ? `${product.highPricePretty} - ${product.highPriceOriginalPretty}` : 'Null'}</span>
                                            <br/>
                                            <span style={{ color: 'dodgerblue' }}>{product.highPricePretty ? `${product.lowPricePretty} - ${product.highPricePretty}` : product.lowPricePretty}</span>
                                        </div>
                                    }
                                    description={<div style={{ color: 'black' }}>{` ${product.title}`}</div>}
                                />
                            </Card>
                        </Col>
                    ))}
                    <Col span={2}></Col>
                </Row>
            </Layout>

        </>
    )
}