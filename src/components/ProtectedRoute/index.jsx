import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    let location = useLocation();
    console.log("isLoggedIn : ", isLoggedIn);
    if(!isLoggedIn) {
        console.log("isLoggedIn in if block : ", isLoggedIn);
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return <Outlet/>
};

export default ProtectedRoute;
// import { useNavigate , Outlet } from 'react-router-dom'
// import Login from '../Login'

// const PrivateRoute = ({ isLoggedIn }) => {
    
//     // approach that work
//     const navigate = useNavigate();
        
//     if(isLoggedIn){
//         return <Outlet/>;
//     }else{
//         return <Login />
//     }
// };
// export default PrivateRoute;



// Approach 2 that is not working 
// import { Navigate, Outlet } from 'react-router-dom'
// const PrivateRoutes = ({isLoggedIn}) => {
//     console.log("isLoggedIn: ", isLoggedIn);
//     return (
//         isLoggedIn ? <Outlet /> : <Navigate to='/login' />
//     )
// }
// export default PrivateRoutes;

// Higher Order Component Approach that works

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthRedirect = (WrappedComponent) => {
//     const WithAuthRedirect = (props) =>{
//         const { isLoggedIn } = props;
//         const navigate = useNavigate();
//         useEffect(()=>{
//             console.log("isLoggedIn", isLoggedIn);
//             if(!isLoggedIn){
//                 navigate("/login");
//             }
//         },[isLoggedIn, navigate]);
//         return <WrappedComponent {...props} />
//     }
//     return WithAuthRedirect;
// }
// export default AuthRedirect;