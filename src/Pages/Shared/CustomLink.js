import { Link, useMatch, useResolvedPath} from "react-router-dom";
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className="">
        <Link
          style={{ background: match ? "#9400B4" : "white",color: match ? "white" : "#9400B4" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  export default CustomLink;