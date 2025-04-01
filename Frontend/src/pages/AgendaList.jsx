import { useState, useEffect } from "react";
import axios from "axios";

const AgendaList = () => {
    const [agenda, setAgenda] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

      setLoading(true);
      axios
        .get("http://127.0.0.1:8000/agenda/")
        .then((response) => {
          console.log("API Response:", response.data);
          const data = Array.isArray(response.data) ? response.data : [];
          setAgenda(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("There was an error fetching the agenda!", error);
          setAgenda([]);
          setLoading(false);
        });
    }, []);
    
    return (
      <div>
        <h2>Agenda List</h2>
        {loading ? (
          <p>Loading agenda items...</p>
        ) : (
          <ul>
            {agenda.length > 0 ? (
              agenda.map((item) => (
                <li key={item.id}>
                  <strong>{item.day}:</strong> {item.title}
                </li>
              ))
            ) : (
              <p>No agenda items available.</p>
            )}
          </ul>
        )}
      </div>
    );
  }

  export default AgendaList;