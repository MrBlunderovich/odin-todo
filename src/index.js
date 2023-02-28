import "./style.css";
import Render from "./refresh";
import State from "./state";
import Controller from "./Controller";

State.loadProjects();

Render(State);
