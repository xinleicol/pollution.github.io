import DeveloperError from"../Core/DeveloperError.js";function getElement(e){if("string"==typeof e){const t=document.getElementById(e);if(null===t)throw new DeveloperError(`Element with id "${e}" does not exist in the document.`);e=t}return e}export default getElement;