import AboutMe from "@modules/AboutMe/AboutMe";
import Experience from "@modules/Experience/Experience";
import MyProjects from "@modules/MyProjects";

const sectionsData = [
	{
		id: "about-me",
		title: "Get to know me",
		subHeader: "About",
		secondaryBackground: true,
		module: <AboutMe />,
	},
	{
		id: "resume",
		title: "Experience",
		subHeader: "Timeline",
		secondaryBackground: false,
		module: <Experience />,
	},
	{
		id: "projects",
		title: "Some of the work I've done",
		subHeader: "Projects",
		secondaryBackground: true,
		module: <MyProjects />,
	},
];

export default sectionsData;

