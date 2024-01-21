// components/Header.tsx

import React, {useEffect, useState} from 'react';
import {Row, Col} from 'antd';
import {PhoneOutlined} from '@ant-design/icons';
import singaporeFlag from '../../public/icons/singapore_flag.png';
import eezeeLogo from '../../public/icons/eezee_logo.png';
import Image from 'next/image';
import { Input, Badge } from 'antd';
import { ShoppingCartOutlined, MenuOutlined, TagsOutlined, LayoutOutlined } from '@ant-design/icons';
import SearchBar from "./SearchBar";

interface HeaderProps {
    itemCount?: number;
}

const {Search} = Input;
const Header: React.FC<HeaderProps> = ({ itemCount }) => {
    return (
        <>
            <Row align="middle" style={{background: '#f0f0f0', marginBottom: '10px'}}>
                <Col span={2}>
                    {/*blank*/}
                </Col>
                <Col span={2} xs={4} sm={4} md={3} lg={2} xl={2}>
                    <Image src={singaporeFlag} alt="Singapore Flag" width={16} height={16}/>
                    <span> Singapore</span>
                </Col>
                <Col span={2} xs={5} sm={5} md={4} lg={4} xl={4}>
                    <PhoneOutlined style={{fontSize: '16px', marginLeft: '8px'}} rev={undefined}/>
                    <span>{"+65 6797 9688"}</span>
                </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
                <Col span={2}>
                    {/*blank*/}
                </Col>
                <Col span={3} xs={4} sm={4} md={3} lg={3} xl={2}>
                    <Image src={eezeeLogo} alt="Eezee Logo" width={'100%'} height={'30%'}/>
                </Col>
                <Col span={8} xs={4} sm={4} md={8} lg={8} xl={8}>
                    <SearchBar />
                </Col>
                <Col span={8}>
                    {/*blank*/}
                </Col>
                <Col span={2} xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Badge count={itemCount} showZero offset={[8, 0]} style={{ backgroundColor: '#2A64DB', color: 'white' }}>
                        <ShoppingCartOutlined style={{fontSize: '24px', }} rev={undefined} />
                    </Badge>
                </Col>
            </Row>
            <Row style={{ marginBottom: '10px' }}>
                <Col span={2}>
                    {/*blank*/}
                </Col>
                <Col span={3} style={{ color: '#2A64DB' }} xs={4} sm={4} md={5} lg={4} xl={2}>
                    <MenuOutlined style={{marginRight: '8px'}} rev={undefined} />
                    View All Categories
                </Col>
                <Col span={3} style={{ color: '#2A64DB', marginLeft: '8px' }} xs={4} sm={4} md={4} lg={3} xl={2}>
                    <TagsOutlined style={{marginRight: '8px'}} rev={undefined} />
                    View All Brands
                </Col>
                <Col span={3} style={{ color: '#2A64DB' }} xs={4} sm={4} md={5} lg={4} xl={3}>
                    <LayoutOutlined style={{marginRight: '8px'}} rev={undefined} />
                    View All Specs Tables
                </Col>
            </Row>
        </>

    );
};

export default Header;
