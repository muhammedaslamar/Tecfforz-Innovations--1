import React from "react";
import axios from "axios";
import Card from "../card/card";
import { useEffect, useState } from "react";
import authService from "../authService";

function Dispcard() {
  const curToken = authService.getCurrentUser();
  const userId = authService.getCurrentId();
  const [array, setArry] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      //const response = await axios.get(`http://localhost:1000/api/v2/getTasks/${userId}`);
      if (curToken) {
        const token = curToken;
        try {
          const response = await axios
            .get("http://localhost:1000/api/v2/getTasks", {
              headers: { Authorization: token },
            })
            .then((response) => {
              setArry(response.data.list);
            });
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetch();
  }, []);


  const del = async (itemId) => {
    await axios
      .delete(`http://localhost:1000/api/v2/deleteTask/${itemId}`, {
        data: { id: userId },
      })
      .then((response) => {
        alert("The task is Delted!!");
      });
  };

  const updateid=(itemId2)=>{
    localStorage.setItem("updateid", JSON.stringify(itemId2));
  }


  return (
    <div>
      <div className="ourtbody ">
      {array &&
        array.map((item, index) => (
          <>
            <Card
              name={item.name}
              gender={item.gender} 
              phone={item.phone}
              imageUrl={item.imageUrl}
              id={item._id} 
              delid={del}
              upid={updateid} 
              key={index}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Dispcard;
