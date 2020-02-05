import {combineReducers} from "redux";
import {phones} from "./phones";
import {connectRouter} from "connected-react-router";
import {phonesPage} from "./phonesPage";
import {phonePage} from "./phonePage";
import {basket} from "./basket";


export default history => combineReducers({
  phones: phones,
  router: connectRouter(history),
  phonesPage: phonesPage,
  phonePage: phonePage,
  basket: basket
})