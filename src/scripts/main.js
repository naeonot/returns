import "../styles/main.css";
import "../styles/responsive.css";
import { getCurrentYear } from "./utils.js";
const year=document.querySelector("#year");
if(year) year.textContent=getCurrentYear();
