import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	const [dropDown, setDropDown] = useState(false);
	const toggleUpOrDrop = () => setDropDown(!dropDown);
	const [babyName, setBabyName] = useState("Magic Monitor");

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top"
			style={{ overflow: "visible" }}>
			<Link className="nav-brand" to="./">
				Magic Monitor
			</Link>
			<button
				href="#"
				onClick={() => toggleUpOrDrop()}
				className={"navbar-toggler"}
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className={"collapse navbar-collapse" + (dropDown ? " collapse" : "")} id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="./" onClick={() => toggleUpOrDrop()}>
							HOME
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about" onClick={() => toggleUpOrDrop()}>
							ABOUT US
						</Link>
					</li>
					{store.token ? (
						<>
							<li>
								<Link className="nav-link" to="/video" onClick={() => toggleUpOrDrop()}>
									LIVE VIDEO
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/dashboard" onClick={() => toggleUpOrDrop()}>
									DASHBOARD
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/historylist" onClick={() => toggleUpOrDrop()}>
									PREVIOUS SLEEPS
								</Link>
							</li>
						</>
					) : (
						""
					)}
					{store.token ? (
						<li>
							<Link
								className="nav-link"
								to="/"
								onClick={() => {
									store.token = null;
									store.user_info = null;
									store.babies = null;
									toggleUpOrDrop();
									window.localStorage.clear();
								}}>
								LOG OUT
							</Link>
						</li>
					) : (
						<li>
							<Link className="nav-link" to="/login" onClick={() => toggleUpOrDrop()}>
								LOGIN
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

{
	/*<nav className="navbar navbar-light bg-light w-100" onMouseLeave={() => setDropDown(false)}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{`${babyName}`}</span>
			</Link>
			<div className="ml-auto NBLinks">
				<Link className="nav-button" to="./">
					HOME
				</Link>
				<Link className="nav-button" to="/about">
					ABOUT US
				</Link>
				{store.token ? (
					<span>
						<Link className="nav-button" to="/video">
							LIVE VIDEO
						</Link>
						<Link className="nav-button" to="/dashboard">
							DASHBOARD
						</Link>
						<Link className="nav-button" to="/historylist">
							PREVIOUS SLEEPS
						</Link>
					</span>
				) : (
					""
				)}
				{store.token ? (
					<Link className="nav-button" to="/login">
						LOG OUT - NOT IMPLEMENTED
					</Link>
				) : (
					<Link className="nav-button" to="/login">
						LOGIN
					</Link>
				)}
			</div>
			<div
				type="button"
				className="btn btn-secondary Hamburger"
				onClick={() => {
					toggleUpOrDrop();
				}}>
				<i className="fa fa-bars " />
			</div>
			{dropDown ? (
				<div className="container-fluid Hamburger text-center">
					<Link className="nav-button w-100" to="./">
						HOME
					</Link>
					<Link className="nav-button" to="/about">
						ABOUT US
					</Link>
					{store.token ? (
						<span>
							<Link className="nav-button" to="/video">
								LIVE VIDEO
							</Link>
							<Link className="nav-button" to="/dashboard">
								DASHBOARD
							</Link>
							<Link className="nav-button" to="/historylist">
								PREVIOUS SLEEPS
							</Link>
						</span>
					) : (
						""
					)}
					{store.token ? (
						<Link className="nav-button" to="/login">
							LOG OUT - NOT IMPLEMENTED
						</Link>
					) : (
						<Link className="nav-button" to="/login">
							LOGIN
						</Link>
					)}
				</div>
			) : (
				""
			)}
            </nav>*/
}
