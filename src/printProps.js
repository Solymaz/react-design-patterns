// higher order component return a component/function
// we are going to display the component that we passed as an argument with all of the props

export const printProps = (Component) => {
  return (props) => {
    console.log(props);
    <Component {...props} />;
  };
};
