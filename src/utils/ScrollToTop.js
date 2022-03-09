import React, { useEffect } from 'react';
import { useNavigate, useLocation,useParams } from 'react-router-dom';


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const ScrollToTop = ({ history })  =>{
  useEffect(() => {
    if(history !== undefined){
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      }
    }
  },[]);

  return (null);
}

export default withRouter(ScrollToTop);