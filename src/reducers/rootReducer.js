import {combineReducers} from "redux";
import {phones} from "./phones";
import {connectRouter} from "connected-react-router";
import {PhonesPage} from "./phonesPage";

export default history => combineReducers({
  phones: phones,
  router: connectRouter(history),
  phonesPage: PhonesPage
})