import AboutMe from "@modules/AboutMe/AboutMe";
import MyProjects from "@modules/MyProjects";

const sectionsData = [
	{
		id: "about-me",
		title: "Get to know me",
		subHeader: "About",
		secondaryBackground: true,
		module: <AboutMe />
	},
	{
		id: "projects",
		title: "Some of the work I've done",
		subHeader: "Projects",
		secondaryBackground: false,
		module: <MyProjects />
	},
];

export default sectionsData;

