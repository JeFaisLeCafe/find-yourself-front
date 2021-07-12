import { useState, useEffect } from "react";

const DataFetcherDisplayer: React.FC<{ dataName: string }> = ({ dataName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/" + dataName)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setData(myJson);
      });
  }, [dataName]);

  return (
    <>
      {data.map((item: any, index: number) => (
        <p key={item.id}>{`${index}: ${JSON.stringify(item)}`}</p>
      ))}
    </>
  );
};

export default DataFetcherDisplayer;
