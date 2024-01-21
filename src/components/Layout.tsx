// components/Layout.tsx

import Header from './Header';
import {Col, Row} from "antd";
import React from "react";

interface LayoutProps {
    itemCount?: number;
}

const Layout: React.FC<LayoutProps> = ({ itemCount, children }) => {
    return (
        <>
            <style jsx>{`
                .eezee {
                    color: #2A64DB;
                    font-size: 16px;
                }
            `}</style>

            <Row>
                <Col span={24}><Header itemCount={itemCount} /></Col>
            </Row>
            <div style={{backgroundColor: "whitesmoke"}}>
                {children}
            </div>
        </>

    )
}

export default Layout;