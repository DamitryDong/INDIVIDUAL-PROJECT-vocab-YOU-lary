/* eslint-disable quotes, indent, no-trailing-spaces, semi, arrow-spacing, function-paren-newline, comma-spacing, eol-last */

import clearDom from "../utils/clearDom";
import selectCategory from "./SelectCategory";
import renderToDOM from "../utils/renderToDom";

const addWordForm = (obj = {}, user) => {
    clearDom();
    const buttonId = obj.firebaseKey ? 'update-card' : 'Cardit'; // Determine the button ID dynamically
    const buttonName = obj.firebaseKey ? 'Update!' : 'Card it!';     
    const domString = `
        <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" style="margin-top: 200px; color: white; width: 60%;">
            <div class="mb-3">
                <label for="wordName" class="form-label">Word</label>
                <input type="text" class="form-control" id="wordName" aria-describedby="wordHelp" placeholder="Enter the word" value="${obj.wordName || ''}" required>
            </div>
            <div class="mb-3">
                <label for="definition" class="form-label">Definition</label>
                <textarea class="form-control" id="definition" style="height: 100px" placeholder="Enter the definition">${obj.definition || ''}</textarea>
            </div>
            <div class="mb-3" id="select-Category">
                <!-- Category selection will be rendered here -->
            </div>
            
            <button type="submit" class="btn btn-success" id="${buttonId}--${obj.firebaseKey}">${buttonName}</button>
        </form>
        `;
    renderToDOM('#form-container', domString);
    if (user) {
      selectCategory(`${obj.Category || ''}`, user);
    }
  };
  
  export default addWordForm;