import { useNavigate } from "react-router";
import "./notFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2>ოპააა...</h2>
        <p>გვერდი ვერ მოიძებნა</p>
        <button onClick={() => navigate("/")}>მთავარზე დაბრუნდებ</button>
      </div>
    </div>
  );
};
