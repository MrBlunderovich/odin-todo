import "./style.css";
import createPageStructure from "./PageStructure";
import Render from "./Refresh";
import State from "./State";
import Controller from "./Controller";
//
State.loadProjects();

Render(State);
