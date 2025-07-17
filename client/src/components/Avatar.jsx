import PropTypes from 'prop-types';

const Avatar = ({ src, alt, size = 'md' }) => {
  const sizes = {
    sm: 'w-24 h-24',  // 96px
    xl: 'w-32 h-32',  // 128px
    lg: 'w-40 h-40',  // 160px
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`
        ${sizes[size]} 
        rounded-full 
        object-cover 
        object-top 
        aspect-square 
        transition-transform duration-300 
        hover:scale-105
      `}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Avatar;
