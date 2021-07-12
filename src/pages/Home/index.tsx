import DataFetcherDisplayer from "../../components/DateFetcherDisplayer";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <DataFetcherDisplayer dataName="questions" />
    </div>
  );
};

export default Home;
