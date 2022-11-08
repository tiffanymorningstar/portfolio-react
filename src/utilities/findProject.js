import { projects } from "../data/projects";
import hyphenateWords from "./hyphenateWords";

// const findProject = 
//    projects.filter(function(project) {
//    return project 
// }); 


function findProject(name) {
   const filteredProjects = projects.filter(project => {
       const currentName = hyphenateWords(project.title)
       return currentName === name
   })
   const result = filteredProjects[0]
   return result
}

export default findProject


// Return an object containing all of a project's data
// 💡
// Hint:  use the filter method, and implement the hyphenateWordsfunction that you just created earlier in order to confirm a match