import React, { useState } from 'react';

function GraduateComponent() {
  return (
    <div>
      <h3>Graduate Details</h3>
      <label>
        Degree:
        <input type="text" name="degree" />
      </label><br />
      <label>
        Year:
        <input type="number" name="year" />
      </label><br />
      <label>
        Final Year Score:
        <input type="text" name="score" />
      </label><br />
      <label>
        University:
        <input type="text" name="univ" />
      </label><br />
    </div>
  );
}

function PGComponent() {
  return (
    <div>
      <h3>PG Details</h3>
      <label>
        Year:
        <input type="number" name="pgYear" />
      </label><br />
      <label>
        Thesis Subject:
        <input type="text" name="thesis" />
      </label><br />
    </div>
  );
}

function UnderGradComponent() {
  return (
    <div>
      <h3>UnderGrad Details</h3>
      <label>
        SSC:
        <input type="text" name="ssc" />
      </label><br />
      <label>
        HSC:
        <input type="text" name="hsc" />
      </label><br />
    </div>
  );
}

function UserDetailsForm() {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div>
      <h2>User Details Form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label><br />

        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label><br />

        <label>
          Education:
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="">Select</option>
            <option value="Graduate">Graduate</option>
            <option value="PG">PG</option>
            <option value="UnderGrad">UnderGrad</option>
          </select>
        </label><br />

        {userType === 'Graduate' && <GraduateComponent />}
        {userType === 'PG' && <PGComponent />}
        {userType === 'UnderGrad' && <UnderGradComponent />}
      </form>
      {<div>Person Name is : {name}</div>}
    </div>
  );
}
export default UserDetailsForm;
