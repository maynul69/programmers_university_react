
import React from 'react';


const Apply = () => {
    return (
      <div className="container w-50 py-5">
        <form class="needs-validation" novalidate>
          <div class="form-row  justify-content-center">
            <div className="d-flex">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="First name"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="Last name"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
              </div>
            </div>
            <div >
              <div class="col-md-6 mb-3">
                <label for="validationTooltip03">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="validationTooltip03"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationTooltip03">Enter Your Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip03"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
};

export default Apply;





