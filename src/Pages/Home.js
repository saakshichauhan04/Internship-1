import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Home = () => {
  const formData = {
    username: '',
    password: ''
  };

  const [form, setForm] = useState(formData);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [store, setStore] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage and parse it
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setStore(storedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Push the current form data to the store array
    const updatedStore = [...store, form];
    // Store the updated data in local storage
    localStorage.setItem('data', JSON.stringify(updatedStore));
    // Update the state with the new data
    setStore(updatedStore);
    // Reset the form
    setForm(formData);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <form className="row m-auto" action="">
              <div className="col-md-7 my-3">
                <label htmlFor="username">
                  Username:
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    onChange={handleChange}
                    value={form.username}
                    name="username"
                  />
                </label>
              </div>
              <div className="col-md-7 my-3">
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={handleChange}
                    value={form.password}
                    name="password"
                  />
                </label>
              </div>
              <button className="btn w-50 btn-primary my-3" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>

          <div className="col-8">
            <h1>All users</h1>
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Username</th>
                  <th scope="col">Password</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {store.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.username}</td>
                    <td>{data.password}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
