import { Table } from 'antd';
import {useCrypto} from "../context/crypto-context.jsx";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        showSorterTooltip: {
            target: 'full-header',
        },

        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },

    {
        title: 'Amount',
        dataIndex: 'amount',

    },
    {
        title: 'Price, $',
        dataIndex: 'price',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.price - b.price,
    },
];

export default function AssetsTable() {
    const {assets} = useCrypto()

    const data = assets.map((a) => ({
            key: a.id,
            name: a.name,
            price: a.price,
            amount: a.amount,
        }
    ))

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return <Table pagination={false} columns={columns} dataSource={data} onChange={onChange}/>
}