import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='Home'>
        <h1>Welcome to Mesgana Ministries</h1>
         <p>We empower single mothers in East Africa by providing education and revolving loans to build brighter futures.</p>
         <Link to="/get-involved">Support Us </Link>
    </div>
  )
}

export default Home