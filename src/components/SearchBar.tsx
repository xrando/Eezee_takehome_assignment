// components/SearchBar.tsx

import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from "react";


const SearchBar: React.FC = () => {
    return (
        <Space style={{ alignItems: 'center', paddingLeft: '5%' }}>
            <Input
                placeholder="Search Products Here"
                style={{ borderRadius: '20px', paddingRight: '4px', width: '160%', height: '35px', textAlign: 'center' }}
                suffix={
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2A64DB', borderRadius: '50%', padding: '8px' }}>
                        <SearchOutlined style={{color: '#fff'}} rev={undefined} />
                    </span>
                }
            />
        </Space>
    );
};

export default SearchBar;
