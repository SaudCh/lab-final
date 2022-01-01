import { useState } from "react";
import axios from "axios";
import LiveSearch from "./LiveSearch";
import { getHostels } from "./data";
const AddApplicant = () => {
  const hostels = getHostels();

  const [studentName, setStudentName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [pref, setPref] = useState();
  const [gender, setGender] = useState();
  const [file, setFile] = useState();

  const [message, setMessage] = useState();

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setFile(e.target.files[0]);
    }
  };

  const addDetails = async (e) => {
    e.preventDefault();

    let prefrences = [];
    pref.map((e, ind) => (prefrences[ind] = e.value));

    const formData = new FormData();
    formData.append("image", file);
    formData.append("studentName", studentName);
    formData.append("registrationNumber", registrationNumber);
    formData.append("gender", gender);
    formData.append("prefrences", prefrences);

    //console.log(formData);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();
    console.log(responseData);
    setStudentName("");
    setRegistrationNumber("");
  };

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      {message && <div className="alert alert-success">{message}</div>}
      <form>
        <div>
          <label className="mb-2">Student Name</label>
          <input
            type="text"
            className="form-control mb-3"
            name="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2">Registration Number</label>
          <input
            type="text"
            className="form-control mb-3"
            value={registrationNumber}
            name="registrationNumber"
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2">Hostel Prefrences</label>
          <LiveSearch data={hostels} val={pref} setVal={setPref} />
        </div>

        <div>
          <label className="mb-2">Gender</label>
          <div class="form-check form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onClick={() => setGender("Male")}
            />
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onClick={() => setGender("Female")}
            />
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
        </div>

        <div>
          <input type="file" accept=".jpg,.png,.jpeg" onChange={handleChange} />
        </div>

        <button
          className="btn btn-primary form-control"
          onClick={(e) => addDetails(e)}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default AddApplicant;
