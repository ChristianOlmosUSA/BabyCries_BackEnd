import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { BabyForm } from "../component/babyForm";
import { AlarmForm } from "../component/alarmForm";
import moment from "moment";
import "../../styles/home.scss";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);
	const [babyState, setBabies] = useState("empty");
	let data = [];

	useEffect(
		() => {
			actions.getUserData();
		},
		[babyState]
	);

	return (
		<div className="text-center backdrop container-fluid">
			{store.token ? (
				<div className="d-flex flex-column bd-highlight mb-3">
					{store.user_info.msg == "Token has expired" ? ((store.token = null), <Redirect to="/login" />) : ""}
					<div>User email = {store.user_info.email}</div>
					<div>User ID = {store.user_info.id}</div>
					<div>User active = {store.user_info.is_active ? "True" : "False"}</div>
					<div className="d-flex flex-column mx-auto">
						{store.babies &&
							store.babies.map((item, key) => {
								return (
									<div key={key} className="m-4 p-2 bd-highlight card h-auto">
										<div className="d-flex flex-row mx-auto">
											<div>
												{item.first_name} {item.last_name}
											</div>
										</div>
										<div className="card-body">
											<div>ID : {item.id}</div>
											<div>Gender : {item.baby_gender}</div>
											<div>DOB : {item.dob_baby}</div>
											<div>Time Zone : {item.time_zone}</div>
											<div>Parent ID : {item.parent_id}</div>
											<div>Active : {item.is_active ? "True" : "False"}</div>
											<div>
												{item.alarms.map(alarm => {
													return (
														<div key={alarm.id}>
															ID ={alarm.id} Time = {alarm.created_date}
														</div>
													);
												})}
												{
													<div className="container d-flex flex-column text-left m-3">
														<div className="p-2">Breathing and Decible Level</div>
														<AreaChart
															width={300}
															height={150}
															data={item.alarms}
															layout="horizontal"
															verticalAlign="top"
															align="center"
															margin={{
																top: 0,
																right: 0,
																left: -60,
																bottom: 0
															}}>
															<XAxis dataKey="created_date" />
															<YAxis dataKey="decibel_level" />
															<Tooltip wrapperStyle={{ top: -140, left: 0 }} />
															<Legend />
															<Area
																type="monotone"
																dataKey="decibel_level"
																stroke="#82ca9d"
																fill="#82ca9d"
															/>
															<Area
																type="monotone"
																dataKey="breathing"
																stroke="#8884d8"
																fill="#8884d8"
															/>
														</AreaChart>
													</div>
												}
											</div>
											<div
												className="btn btn-danger"
												type="button"
												id={item.id}
												onClick={event => {
													actions.deleteBaby(item.id);
													//console.log(event.target.id);
													let tmp = store.babies.filter(baby => {
														return baby.id != event.target.id;
													});

													//Refresh using the state
													store.babies = tmp;

													setBabies(tmp);
												}}>
												Delete baby here
											</div>
										</div>
									</div>
								);
							})}
					</div>
					<BabyForm />
					<AlarmForm />
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</div>
	);
};
/*Dashboard.propTypes = {
	history: PropTypes.object
};*/
/*if ((store.token = null)) {
		history.push("/login");
	}*/