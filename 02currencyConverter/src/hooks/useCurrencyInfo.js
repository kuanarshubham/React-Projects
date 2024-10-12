import {useEffect, useState} from 'react'

export default function useCurrencyInfo(currency){

    const [data, setData] = useState({});

    useEffect(() => {
        //we didin't needed to use fetch since fetch returns a Promise 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
    }, [currency]); 

    console.log(data);

    return data;
}
