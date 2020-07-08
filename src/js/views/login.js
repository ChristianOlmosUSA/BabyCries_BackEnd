import React from "react";
import "../../styles/CustomLogin.scss";
var LoginBG = require("../../img/LoginBG.jpg");

export const Login = () => (
	<div className="background-image h-100 w-100">
		<div className="d-flex justify-content-center h-100">
			<div className="card">
				<div className="card-header">
					<h3>Sign In</h3>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<input type="text" className="form-control" placeholder="username" />
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-key" />
								</span>
							</div>
							<input type="password" className="form-control" placeholder="password" />
						</div>
						<div className="row align-items-center remember">
							<input type="checkbox" />
							Remember Me
						</div>
						<div className="form-group">
							<input type="submit" value="Login" className="btn float-right login_btn" />
						</div>
					</form>
				</div>

				<div className="card-footer">
					<div className="d-flex justify-content-center links">
						Don&#39;t have an account?
						<a href="../createNewAccount">Create a new account</a>
					</div>
					<div className="d-flex justify-content-center">
						<a href="#">Forgot your password?</a>
					</div>
					{/*	            do we really want social media icons on a secure login page for a baby!! I've commented out.
					<div className="d-flex justify-content-end social_icon">
					<span>
							<i className="fab fa-facebook-square" />
						</span>
						<span>
							<i className="fab fa-google-plus-square" />
						</span>
						<span>
							<i className="fab fa-twitter-square" />
						</span> 
					</div>*/}
				</div>
			</div>
		</div>
	</div>
);
