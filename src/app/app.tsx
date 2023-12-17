import { Routing } from "@/pages";
import { BrowserRouter } from 'react-router-dom';
import { store } from "@/app/store"
import { Provider } from "react-redux";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </Provider>
    )
}