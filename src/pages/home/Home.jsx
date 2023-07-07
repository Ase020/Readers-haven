import { BookList } from "../../components";
import "./home.css";

// eslint-disable-next-line react/prop-types
const Home = ({ allBook }) => {
  return (
    <div>
      <BookList allBook={allBook} />
    </div>
  );
};

export default Home;
