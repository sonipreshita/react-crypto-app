import { Routes, Route } from 'react-router-dom';
import CoinList from './Components/CoinList';
import Home from './Components/Home';
import {Exchanges} from './Components/Exchnage-List';

const RoutesList = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<CoinList />} />
          <Route path="/exchanges" element={<Exchanges />} />
          {/* <Route path="/about" element={<About />} /> */}
       </Routes>
    </>
 );
};

export default RoutesList;