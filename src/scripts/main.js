import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/dummy.css";
import "./dummy.js";
import { getCurrentYear } from "./utils.js";
const year=document.querySelector("#year");
if(year) year.textContent=getCurrentYear();
