const Display = ({ value }) => {
  return <h1 className="text-center pt-5 text-3xl text-orange-500 font-bold">{value.toFixed(3)}</h1>;
};
export default Display;
