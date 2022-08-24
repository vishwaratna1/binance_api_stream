import React from "react";
import DataTable from "react-data-table-component";

const DisplayData = ({ socket }) => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        socket.on("update_data", (data) => {
            setData(data);
        });
    }, [socket]);

    const columns = [
        {
            id: 1,
            selector: (row) => row.symbol,
            name: "Symbol",
        },
        {
            id: 2,
            selector: (row) => row.priceChange,
            name: "PriceChange",
        },
        {
            id: 3,
            selector: (row) => row.priceChangePercent,
            name: "PriceChangePercent",
        },
        {
            id: 4,
            selector: (row) => row.weightedAvgPrice,
            name: "WeightedAvgPrice",
        },
        {
            id: 5,
            selector: (row) => row.prevClosePrice,
            name: "PrevClosePrice",
        },
        {
            id: 6,
            selector: (row) => row.lastPrice,
            name: "LastPrice",
        },
        {
            id: 7,
            selector: (row) => row.lastQty,
            name: "LastQty",
        },
        {
            id: 8,
            selector: (row) => row.bidPrice,
            name: "BidPrice",
        },
        {
            id: 9,
            selector: (row) => row.bidQty,
            name: "BidQty",
        },
        {
            id: 10,
            selector: (row) => row.askPrice,
            name: "AskPrice",
        },
        {
            id: 11,
            selector: (row) => row.askQty,
            name: "AskQty",
        },
        {
            id: 12,
            selector: (row) => row.openPrice,
            name: "OpenPrice",
        },
        {
            id: 13,
            selector: (row) => row.highPrice,
            name: "HighPrice",
        },
        {
            id: 14,
            selector: (row) => row.lowPrice,
            name: "LowPrice",
        },
        {
            id: 15,
            selector: (row) => row.volume,
            name: "Volume",
        },
        {
            id: 16,
            selector: (row) => row.quoteVolume,
            name: "QuoteVolume",
        },
        {
            id: 17,
            selector: (row) => row.openTime,
            name: "OpenTime",
        },
        {
            id: 18,
            selector: (row) => row.closeTime,
            name: "CloseTime",
        },
        {
            id: 19,
            selector: (row) => row.firstId,
            name: "FirstId",
        },
        {
            id: 20,
            selector: (row) => row.lastId,
            name: "LastId",
        },
        {
            id: 21,
            selector: (row) => row.count,
            name: "Count",
        },
    ];

    return (
        <>
            <h1> BINANCE API DATA </h1>
            <DataTable columns={columns} data={data} />
        </>
    );
};

export default DisplayData;
