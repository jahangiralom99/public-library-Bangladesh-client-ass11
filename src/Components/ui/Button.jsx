import { BsArrowRight } from "react-icons/bs";
import PropTypes from 'prop-types';

const Button = ({children, className}) => {
  return (
    <button className={`font-['inherit'] text-2xl font-bold flex items-center gap-2 text-red-400 hover:text-red-600 ${className} transition transform hover:translate-x-4 motion-reduce:transition-none motion-reduce:hover:transform-none	duration-500`}>
      {children}
      <BsArrowRight className="text-red-400 hover:text-red-600 transition transform hover:translate-x-4 motion-reduce:transition-none motion-reduce:hover:transform-none	duration-500" />
    </button>
  );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
  };
  
export default Button;
