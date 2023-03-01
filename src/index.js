import "./style.css";
import createPageStructure from "./PageStructure";
import Render from "./Refresh";
import State from "./State";
import Controller from "./Controller";

createPageStructure();

State.loadProjects();

Render(State);
