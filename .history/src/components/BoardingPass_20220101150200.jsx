import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BoardingPass() {
  const { id } = useParams();
  const [ApplicantData, setApplicantData] = useState();

  useEffect(() => {}, [id]);
  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/user/${id}`);
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div class="card mb-3 col-6">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title p-0 m-0">Name {id}</h5>
              <p class="card-text p-0  m-0">Regd Num</p>
              <p class="card-text p-0  m-0">Gender</p>
              <p class="card-text p-0 m-0">Prefrences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
