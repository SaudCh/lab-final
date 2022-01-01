import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BoardingPass() {
  const { id } = useParams();
  const [ApplicantData, setApplicantData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/get/${id}`);
        const responseData = await response.json();
        setApplicantData(responseData.student);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      <div class="card mb-3 col-6">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title p-0 m-0">
                Name: {ApplicantData.studentName}
              </h5>
              <p class="card-text p-0  m-0">
                Regd Num: {ApplicantData.registrationNumber}
              </p>
              <p class="card-text p-0  m-0">Gender: {ApplicantData.gender}</p>
              <p class="card-text p-0 m-0">
                {/* Prefrences: {ApplicantData.prefrences.map((e) => e.)} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
