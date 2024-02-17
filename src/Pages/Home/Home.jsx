import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Resources from "../../Components/Resources/Resources";
import NewsAndBlog from "./NewsAndBlog";
import PeopleSay from "./PeopleSay";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <NewsAndBlog/>
            <Resources></Resources>
            <PeopleSay/>
            <Subscribe/>
        </div>
    );
};

export default Home;