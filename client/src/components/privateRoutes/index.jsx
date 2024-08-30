// import { checkToken, getRole } from '../../utils/localfunction';
// import { Outlet, Navigate } from 'react-router-dom';
// const PrivateRoute = props => {
//   return checkToken() && props.role == getRole() ? (
//     <Outlet />
//   ) : (
//     <Navigate to={`${props.role}/login`} />

//   );
// };

// export default PrivateRoute;
import { checkToken } from '../../utils/localfunction';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = props => {
  return checkToken(props.role) ? (
    <Outlet />
  ) : (
    <Navigate to={`${props.role}/login`} />
  );
};

export default PrivateRoute;
