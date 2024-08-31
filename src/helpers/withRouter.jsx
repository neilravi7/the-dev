import { useLocation } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    return (
      <Component
        {...props}
        location={location.state}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
