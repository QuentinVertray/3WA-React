// /component/Lien.jsx
import { Link } from "react-router";

const Lien = ({ label, to }) => {
    return <Link to={to}>{label}</Link>;
};

export default Lien;
