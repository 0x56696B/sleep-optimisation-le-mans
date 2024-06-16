import { useLocation } from "react-router";
import "./styles/OptimizedResult.css";
import { analyzeData } from "../handlers/requestsHandler";
import { useState } from "react";

const OptimizedResult = () => {
  const location = useLocation();
  const responseData = location.state;
  const [result, setResult] = useState("");

  console.log(responseData);

  if (!responseData) {
    return <div className="no-data">No data available</div>;
  }

  const { name, people } = responseData;

  const handleClick = () => {
    analyzeData(responseData.id).then((data) => {
      setResult(data);
    });
  };

  return (
    <div>
      <h1>Team: {name}</h1>
      <div className="container">
        {people && people.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Experience (years)</th>
                <th>Weight (kg)</th>
                <th>Height (cm)</th>
                <th>Sleep Time (hours)</th>
                <th>Role</th>
                <th>Activity Level (1-10)</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person: any) => (
                <tr key={person.id}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>
                  <td>{person.experience}</td>
                  <td>{person.weight}</td>
                  <td>{person.height}</td>
                  <td>{person.sleepTime}</td>
                  <td>{person.role}</td>
                  <td>{person.activityLevel.level}</td>
                </tr>
              ))}
              <div className="submit-container">
                <button
                  onClick={handleClick}
                  className="submit-btn"
                  type="submit"
                >
                  ANALYZE
                </button>
              </div>
              <h1>Analyzed result:</h1>
              <p>{result}</p>
            </tbody>
          </table>
        ) : (
          <div className="no-data">No people data available</div>
        )}
      </div>
    </div>
  );
};

export default OptimizedResult;
