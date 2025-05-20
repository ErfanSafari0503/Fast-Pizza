import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classStyle = 'text-sm text-blue-500 hover:text-blue-700';

  if (to === '-1')
    return (
      <button className={classStyle} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  else
    return (
      <Link to={to} className={classStyle}>
        {children}
      </Link>
    );
}

export default LinkButton;
