import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from "react";


const SearchBar: React.FC = () => {
    return (
        <Space>
            <Input
                placeholder="Search Products Here"
                style={{ borderRadius: '20px', paddingRight: '10px', width: '450px', alignItems: 'center' }}
                suffix={
                    <Space>
                        <span style={{backgroundColor: '#2A64DB', borderRadius: '50%', padding: '2px'}}>
                            <SearchOutlined style={{color: '#fff'}} rev={undefined}/>
                        </span>
                    </Space>
                }
            />
        </Space>
    );
};

export default SearchBar;
