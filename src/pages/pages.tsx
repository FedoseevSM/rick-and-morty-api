import { Routes, Route } from 'react-router-dom';
import { MainPage } from '@/pages/main-page';

export const Routing = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainPage />
                } />
        </Routes>
    )
}