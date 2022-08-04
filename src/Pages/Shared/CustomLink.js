import { Link, useMatch, useResolvedPath} from "react-router-dom";
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className="">
        <Link
          style={{ background: match ? "#4f37e8" : "white",color: match ? "white" : "#4f37e8" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  export default CustomLink;