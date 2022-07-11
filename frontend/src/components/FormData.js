import React from 'react';
import HobbyCheckbox from "./HobbyCheckbox";
function FormData(props) {
    return (
        <section>
          <br />
          <div
            id="alertSuccess"
            className="d-none alert alert-success"
            role="alert"
          >
            User Added/Updated Succesfully.
          </div>
          <div id="alertFailure" className="d-none alert alert-danger" role="alert">
            Something went wrong
          </div>
          <form onSubmit={props.addUpdateser}>
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={props.form.name}
                  onChange={props.onFormChange}
                  id="inputName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={props.form.email}
                  onChange={props.onFormChange}
                  id="inputEmail"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputAge" className="col-sm-2 col-form-label">
                Age
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={props.form.age}
                  onChange={props.onFormChange}
                  id="inputAge"
                />
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gridRadios1"
                    checked={props.form.gender === "m"}
                    onChange={props.onFormChange}
                    value="m"
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gridRadios2"
                    checked={props.form.gender === "f"}
                    onChange={props.onFormChange}
                    value="f"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Female
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Hobbies</legend>
              <div className="col-sm-10 ">
                {props.hobbies.map((hobbie, ind) => {
                  return (
                    <HobbyCheckbox
                      handleCheckBox={props.handleCheckBox}
                      key={hobbie.id}
                      data={hobbie}
                    />
                  );
                })}
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      );
}

export default FormData;