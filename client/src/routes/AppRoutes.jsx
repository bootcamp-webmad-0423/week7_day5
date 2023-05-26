import { Routes, Route } from 'react-router-dom'
import CoastersListPage from '../pages/CoastersListPage/CoastersListPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage'
import HomePage from '../pages/HomePage/HomePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersListPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />

            <Route path="/perfil" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes