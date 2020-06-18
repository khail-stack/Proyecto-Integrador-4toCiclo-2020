import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-t-50 p-b-90">
          <form class="login100-form validate-form flex-sb flex-w">
            <span class="login100-form-title pb-5">Login</span>

            <div
              class="wrap-input100 validate-input mb-3"
              data-validate="Username is required"
            >
              <input
                class="input100"
                type="text"
                name="username"
                placeholder="Username"
              />
              <span class="focus-input100"></span>
            </div>

            <div
              class="wrap-input100 validate-input mb-5"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn mt-5">
              <button class="login100-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
