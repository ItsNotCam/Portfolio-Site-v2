import React from 'react';
import { Orange } from '../components/ColoredText';
import * as Skills from './skills';

type WorkListItem = {
	title: string[];
	company: string;
	location: string;
	description: JSX.Element;
	timeframe: string;
	skills: {
		name: string;
		icon: JSX.Element;
	}[];
};

export const WorkList: WorkListItem[] = [
	{
		title: ["Software Engineering Intern IV"],
		company: "BAE Systems Inc.",
		location: "Falls Church, VA",
		description: (
			<>
				Solo <Orange>developed multiple applications</Orange> including design, architecture, development, documentation, and deployment.
				Greatly streamlined existing automation processes, saving over 720 man hours / year.
				Assisted in the emergency efforts to resolve the <Orange>2024 CloudStrike BSODs</Orange> on company machines.
			</>
		),
		timeframe: "2024-2025",
		skills: [
			Skills.JavascriptSkill,
			Skills.TypeScriptSkill,
			Skills.NodeJSSkill,
			Skills.NextJSSkill,
			Skills.ReactSkill,
			Skills.TailwindSkill,
			Skills.SqlServerSkill,
			Skills.IisSkill,
			Skills.DockerSkill,
			Skills.PowerShellSkill
		]
	},{
		title: ["Freelance Game Developer"],
		company: "",
		location: "My Apartment, VA",
		description: (
			<>
				Built out a freelance operation that, from year one, generated over <Orange>$100,000/yr</Orange> in personal revenue. 
				Raised <Orange>over $50,000 for</Orange> <a href="" target='_blank'>charity</a>. Invited on to a studio to be a technical consultant. Demonstrated 
				excellent self-management skills and work ethic, maintained professional communication, and consistently 
				provided excellent customer service.
			</>
		),
		timeframe: "2020-2024",
		skills: [Skills.CSharpSkill, Skills.UnitySkill]
	},{
		title: ["Software Engineering Intern"],
		company: "ScienceLogic,",
		location: "Remote",
		description: (
			<>
				Added a new feature into an existing tool to display changes in account activity.
			</>
		),
		timeframe: "2021-2021",
		skills: [Skills.PhpSkill]
	},{
		title: ["Cyber DevOps Software Engineering Intern IT","Sys. Admin Intern II"],
		company: "BAE Systems Inc.",
		location: "Reston, VA",
		description: (
			<>
				<a href="" target="_blank">VP of IT</a> personally offered me a <Orange>full time role</Orange> and a <Orange>full ride</Orange> to my university for my contributions. 
				Self-managed to create several applications and automations that increased employee productivity by 
				several orders of magnitude. 
			</>
		),
		timeframe: "2019-2020",
		skills: [
			Skills.PythonSkill,
			Skills.JavascriptSkill,
			Skills.BootstrapSkill, 
			Skills.FlaskSkill,
			Skills.ReactSkill,
			Skills.DockerSkill, 
			Skills.SqliteSkill,
			Skills.MaterialUISkill,
			Skills.PowerShellSkill
		]
	},{
		title: ["Junior Software Engineering Intern"],
		company: "Parsons Corp.",
		location: "Centreville, VA",
		description: (
			<>
				Assisted in the development of a conceptual REST API that provided authentication and authorization over LDAP.
				Implemented a feature into an internal tool that allowed for the selection of specific key exchange algorithms for tunneling. 
			</>
		),
		timeframe: "2019-2020",
		skills: [Skills.PythonSkill]
	},
];