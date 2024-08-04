import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import SideBar, {
  DirectoryItem,
  updateSelectedItem,
} from "../components/Sidebar";
import { Chevron, FileIcon, FolderIcon } from "../components/Icons";
import {
  Blue,
  Green,
  Light,
  LightGreen,
  Orange,
  Pink,
  Red,
  Yellow,
} from "../components/ColoredText";
import CodeSegment from "../components/CodeSegment";

import "./_about.css";

const AboutText = (props: { page: string }): ReactNode => {
  switch (props.page) {
    case "passion":
      return (
        <div className="about-code-segment">
          <CodeSegment keyPrefix="passion">
            <span className="font-normal">
              <br />
              <Red className="font-bold italic">{`<about_me>`}</Red>
              <br />
              <br />
              <Orange>def</Orange>
              <Yellow> passion</Yellow>
              <Orange>()</Orange>
              <Light>:</Light>
              <br />
              <div className="ml-4 text-custom-text-300">
                I am a <Pink>lifelong programmer</Pink> and <Pink>learner</Pink>{" "}
                with a deep-rooted <LightGreen>passion </LightGreen>
                for <Pink>problem solving</Pink>, <Pink>coding</Pink>, and{" "}
                <Pink>computers</Pink>. I began writing code when I was{" "}
                <Blue>12 years old</Blue> starting with <Red>C++</Red>, and I
                have <Blue>never</Blue> looked back.
                <br />
                <br />
                Over the years, I have honed my <Pink>skills</Pink> and expanded
                my
                <Blue> knowledge</Blue> by continuously{" "}
                <LightGreen>self-studying</LightGreen> the{" "}
                <Red>latest tech</Red> that I catch wind of.
                <br />
                <br />I have always been{" "}
                <Blue>eager to tackle new challenges </Blue>
                and projects, from <LightGreen>
                  web development
                </LightGreen> to <LightGreen>Minecraft modding</LightGreen> to{" "}
                <LightGreen>Unity scripting</LightGreen> to{" "}
                <LightGreen>3D modeling</LightGreen> and <Red>more</Red> ...
                Whenever and wherever I see a chance to{" "}
                <Yellow>automate</Yellow> or <Yellow>innovate</Yellow>, I take
                it and <Red>run</Red>.
                <br />
                <br />
                <Blue>while</Blue>
                <Orange>{`(self.`}</Orange>
                <Red>is_alive</Red>
                <Orange>{`)`}</Orange>
                <Light>:</Light>
                <br />
                <div className="ml-4">
                  <Yellow>print</Yellow>
                  <Orange>{`(`}</Orange>
                  <Green>"experience"</Green>
                  <Orange>{`)`}</Orange>
                  <br />
                  <Yellow>print</Yellow>
                  <Orange>{`(`}</Orange>
                  <Green>"learn"</Green>
                  <Orange>{`)`}</Orange>
                  <br />
                  <Yellow>sleep</Yellow>
                  <Orange>{`(`}</Orange>
                  <LightGreen>24</LightGreen>
                  <Light> * </Light>
                  <LightGreen>60</LightGreen>
                  <Light> * </Light>
                  <LightGreen>60</LightGreen>
                  <Orange>{`)`}</Orange>
                </div>
              </div>
              <br />
            </span>
          </CodeSegment>
        </div>
      );
    case "hobbies":
      return (
        <div className="about-code-segment">
          <CodeSegment keyPrefix="hobbies">
            <span className="font-normal text-custom-text-300">
              <br />
              <Red className="font-bold italic">{`<about_me>`}</Red>
              <br />
              <br />
              <Orange>function</Orange>
              <Yellow> hobbies</Yellow>
              <Orange>()</Orange>
              <Light>:</Light> <Blue> void </Blue>
              <Orange>{`{`}</Orange>
              <br />
              <div className="ml-4">
                I love <Red>riding my motorcycle</Red> as much as possible,
                enjoying the
                <LightGreen> escape</LightGreen> and{" "}
                <LightGreen>freedom</LightGreen> that it gives me.
                <br />
                <br />
                <Red>Building computers</Red> is another <Blue>hobby</Blue> of
                mine, where I get to play one of the several forms of{" "}
                <Pink>“adult Legos”</Pink> out there. I{" "}
                <LightGreen>built my first computer at 14 </LightGreen> and fell
                in love with the <Pink>research</Pink>, <Pink>planning</Pink>,
                and <Pink>process</Pink> that comes with the territory.
                <br />
                <br />
                <Red>Coding</Red> is also a never-ending <Blue>journey</Blue>{" "}
                for me. I’m always on the lookout for new ways to{" "}
                <Yellow>create</Yellow>, <Yellow>innovate</Yellow>, and{" "}
                <Yellow>solve</Yellow> problems using code.
                <br />
                <br />I also take <LightGreen>pride</LightGreen> in{" "}
                <Red>maintaining</Red> and <Red>upgrading</Red> my{" "}
                <Red>home server</Red> and
                <Red> network</Red>, making sure my <Pink>media storage</Pink>,{" "}
                <Pink>personal projects</Pink>, and
                <Blue> Dockerized</Blue> <Pink>video game servers</Pink> are all
                running <Yellow>smoothly</Yellow>.
                <br />
                <br />
                Finally, I have a <LightGreen>passion</LightGreen> for the{" "}
                <Red>3D modelling</Red>, <Red>texturing</Red>, and
                <Red> programming</Red> sides of <Red>game development</Red>.
                <br />
              </div>
              <Orange>{`}`}</Orange>
            </span>
            <br />
            <br />
          </CodeSegment>
        </div>
      );
  }

  return "";
};

export default function About(): ReactNode {
  const updateSelection = (selectionName: string): void => {
    setSelectedName(selectionName);
    setDirectoryTree((old) => {
      return updateSelectedItem(old, selectionName, setSelectedPage);
    });
  };

  const [selectedName, setSelectedName] = useState<string>("passion");
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
    {
      name: "..",
      icon: <FolderIcon />,
      disabled: true,
    },
    {
      name: "_me",
      icon: <FolderIcon />,
      children: [
        {
          name: "passion",
          icon: <FileIcon />,
          selected: true,
          onClick: () => updateSelection("passion"),
        },
        {
          name: "hobbies",
          icon: <FileIcon />,
          onClick: () => updateSelection("hobbies"),
        },
        {
          name: "goals",
          icon: <FileIcon />,
          onClick: () => updateSelection("goals"),
        },
        {
          name: "..",
          icon: <FolderIcon />,
          disabled: true,
        },
      ],
    },
    {
      name: "_site",
      icon: <FolderIcon />,
      children: [
        {
          name: "credits",
          icon: <FileIcon />,
          onClick: () => updateSelection("credits"),
        },
        {
          name: "inspiration",
          onClick: () => updateSelection("inspiration"),
          icon: <FileIcon />,
        },
        {
          name: "design",
          icon: <FileIcon />,
          onClick: () => updateSelection("design"),
        },
        {
          name: "..",
          icon: <FolderIcon />,
          disabled: true,
        },
      ],
    },
  ]);

  const [selectedPage, setSelectedPage] = useState<DirectoryItem>(
    (directoryTree[1].children as DirectoryItem[])[1]
  );
  // temporary solution - get all pages that are in the "me" section
  // this is used so that the footer text can be updated with the correct pathing
  // automatically with the use of the directory tree object
  const pagesInMeSection: string[] = (directoryTree[1].children || [])?.map(
    (child) => child.name
  );

  return (
    <>
      <div id="about" className="w-full h-full flex flex-grow">
        <SideBar tree={directoryTree} title="~/_about/" />
        <div className="p-4 flex-grow">
          <h1 className="text-2xl text-bold italic text-custom-red uppercase max-[750px]:text-center">
            [ {selectedName} ]
          </h1>
          <AboutText page={selectedName} />
        </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_about/
          {pagesInMeSection.includes(selectedName) ? "_me" : "_site"}{" "}
          <strong>
            {` > vim ./`}
            <Orange>{selectedName}</Orange>.*{" "}
            <span className="blinking-text">_</span>
          </strong>
        </span>
      </Footer>
    </>
  );
}
