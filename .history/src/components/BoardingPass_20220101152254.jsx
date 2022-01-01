import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BoardingPass() {
  const { id } = useParams();
  const [ApplicantData, setApplicantData] = useState();

  useEffect(() => {
    const getApplicatsDetails = async () => {
      //console.log(process.env.REACT_APP_BACKEND_URL);
      await axios
        .get(process.env.REACT_APP_BACKEND_URL + `/get/${id}`)
        .then((response) => {
          console.log(response.data.student);
          setApplicantData(response.data.student);
        })
        .catch((e) => console.log(e));
    };

    getApplicatsDetails();
  }, [id]);

  return (
    <div>
      {ApplicantData ? (
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
                  Prefrences: {ApplicantData.prefrences}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
