import { useEffect, useRef, useState } from "react";
import axios from "axios";
import currencys from "../currency.json";
import DateDisplay from "./DateDisplay";
import Background from "./Background";

const Input = ({ setRes }) => {

  // const [currencyData, setCurrencyData] = useState({});
  const currencyData=useRef({})
  const [amount, setAmount] = useState(1);
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("ILS");

  useEffect(() => {
    getCurrencys();
  }, []);

  useEffect(() => {
    const { current } = currencyData;
    if (current["USD"])
      setRes(
        calculateRes(amount, current[from].value, current[to].value)
      );
  }, [from, to, amount]);

  const getCurrencys = async () => {
    const data = currencys.data;
    currencyData.current=data;
    setOptions(Object.keys(data));
    setRes(calculateRes(amount, data[from].value, data[to].value));
  };
  const calculateRes = (amount, from, to) => {
    return (amount / from) * to;
  };
  return (
    <>
      <div className="text-center items-center justify-center" >
        <div className="container text-center mx-auto mt-8">
          <h1 className=" text-3xl font-bold mb-4">Money Exchange</h1>
          <h1 className="text-xl font-mono font-bold pb-7"><DateDisplay /> </h1>
          <div className="flex items-center mb-4  justify-center">

            <input
              type="number"
              className="border border-gray-400 p-2 mr-2 w-24 "
              value={amount}
              onChange={(e) => setAmount(e.target.value)} />
            <select
              className="border border-gray-400 p-2 mr-2"
              select onChange={(e) => setFrom(e.target.value)} value={from}
            >
              {options.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <button onClick={() => setTo(from) + setFrom(to)} className="bg-blue-500 text-white px-4 py-2 rounded">
              Switch
            </button>
          </div>
          <div>
            <p className="text-lg text-blue-800 font-bold">
              {from} to {to}
            </p>
          </div>
          <div className="mt-4 ">
            <select className="border border-black border-solid p-2 mr-2" onChange={(e) => setTo(e.target.value)} value={to}>
              {options.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>

  );
};
export default Input;
