/* eslint-disable react/display-name */
import * as React from "react";
import { debounce } from './graphUtils';

const ResizeHandlerHOC = (Component) => {
  const WrapperComponent = (props) => {
    const [rerender, setRerender] = React.useState(false);

    React.useEffect(() => {
      // Add event listener
      const handleResize = debounce(function (e) {
        setRerender((ele) => !ele);
      });

      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return <Component {...props} rerender={rerender} />;
  };

  return WrapperComponent;
};

export default ResizeHandlerHOC;
