import { Route, Routes } from "react-router-dom";
import ClientePage from "../pages/clientePage";
import ReservaPage from "../pages/reservaPage";
import RestaurantePage from "../pages/restaurantePage";



function Rotas() {
    return (
            <Routes>
                <Route path="/" element={<ClientePage/>} /> 
                <Route path="/reserva" element={<ReservaPage/>} />
                <Route path="/restaurante" element={<RestaurantePage/>} />  
            </Routes>
    );
}

export default Rotas;
