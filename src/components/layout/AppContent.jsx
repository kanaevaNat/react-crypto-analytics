import {Layout, Typography} from "antd";
import {useCrypto} from "../../context/crypto-context.jsx";
import PortfolioChart from "../PortfolioChart.jsx";
import AssetsTable from "../AssetsTable.jsx";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#001259',
    padding: '1rem'
};

export default function AppContent(){
    const {assets, crypto} = useCrypto()
    const cryptoPriceMap = crypto.reduce((acc,c) => {
        acc[c.id] = c.price
        return acc
    }, {})

    return (<Layout.Content style={contentStyle}>
        <PortfolioChart/>
        <AssetsTable/>
        <Typography.Title level = {3} style = {{ color: '#fff'}}>
            Portfolio: {' '}
            {assets
                .map ((asset) => asset.amount * cryptoPriceMap[asset.id])
                .reduce((acc,v) => (acc += v), 0)
                .toFixed(2)}$
        </Typography.Title>
    </Layout.Content>)
}