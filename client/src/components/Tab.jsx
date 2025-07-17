import PropTypes from 'prop-types';

const Tab = ({ active, onClick, children, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer py-4 px-1 font-medium text-sm flex items-center border-b-2 ${active
        ? 'border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400'
        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}
    >
      {icon}
      {children}
    </button>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node
};

export default Tab;