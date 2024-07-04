function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector("table"),r="";n.insertAdjacentHTML("afterend",'\n  <form\n    class="new-employee-form"\n    novalidate\n  >\n    <label>\n      Name:\n      <input\n        data-qa="name"\n        name="name"\n        type="text"\n        required\n      />\n    </label>\n    <label>\n      Position:\n      <input\n        data-qa="position"\n        name="position"\n        type="text"\n        required\n      />\n    </label>\n    <label>\n      Office:\n      <select data-qa="office">\n        <option selected>Tokyo</option>\n        <option>Singapore</option>\n        <option>London</option>\n        <option>New York</option>\n        <option>Edinburgh</option>\n        <option>San Francisco</option>\n      </select>\n    </label>\n    <label>\n      Age:\n      <input\n        data-qa="age"\n        name="age"\n        type="number"\n        required\n      />\n    </label>\n    <label>\n      Salary:\n      <input\n        data-qa="salary"\n        name="salary"\n        type="number"\n        required\n      />\n    </label>\n    <button type="submit">Save to table</button>\n  </form>\n  ');var a=document.querySelector(".new-employee-form");function o(e,r){var a=e.cellIndex,o=e.textContent,i=t(n.querySelector("tbody").rows);i.sort(function(e,t){var n=e.cells[a].textContent,i=t.cells[a].textContent,l=/[^0-9]/g;return["Name","Position","Office"].includes(o)?"ascDirection"===r?n.localeCompare(i):i.localeCompare(n):["Salary","Age"].includes(o)?"ascDirection"===r?+n.replace(l,"")-+i.replace(l,""):+i.replace(l,"")-+n.replace(l,""):void 0});var l=n.querySelector("tbody");l.innerHTML="",i.forEach(function(e){return l.appendChild(e)})}function i(e,t){var n=e.querySelector(".cell-input");if(n){var r=n.value.trim();e.textContent=""!==r?r:t,n.remove()}}function l(e,t,n){var r=document.createElement("div");r.classList.add("notification",n),r.setAttribute("data-qa","notification"),r.insertAdjacentHTML("beforeend",'\n    <h2 class="title" style="font-size: inherit;">'.concat(e,"</h2>\n    <p>").concat(t,"</p>\n    ")),document.body.insertAdjacentElement("beforeend",r),setTimeout(function(){r.remove()},5e3)}n.addEventListener("click",function(e){var t=e.target.closest("thead th");t&&(t.textContent!==r?(o(t,"ascDirection"),r=t.textContent):(o(t,"descDirection"),r=""))}),n.addEventListener("click",function(e){var r=e.target.closest("tbody tr"),a=t(n.querySelector("tbody").rows);r&&!r.classList.contains("active")&&(a.forEach(function(e){return e.removeAttribute("class")}),r.setAttribute("class","active"))}),n.addEventListener("dblclick",function(e){var t=e.target.closest("tbody td");if(t){var n=document.createElement("input"),r=t.textContent;t.innerHTML="",n.classList.add("cell-input"),t.append(n),n.value=r,n.focus();var a=function(){i(t,r)};n.addEventListener("keydown",function(e){"Enter"===e.key&&(n.removeEventListener("blur",a),i(t,r))}),n.addEventListener("blur",a)}}),a.addEventListener("submit",function(e){e.preventDefault();var t=document.createElement("tr"),r=a.querySelector('input[name="name"]').value.trim(),o=a.querySelector('input[name="age"]').value.trim(),i=a.querySelector('input[name="salary"]').value.trim();if(!a.querySelector('input[name="position"]').value.trim()||!r||!o||!i)return l("All fields must be filled","Please fill in all fields","error");if(r.length<4)return l("The name is to short","The name must contain at least 4 characters","error");if(18>+o||+o>90)return l("Incorrect age entry","The age must be between 18 and 90","error");var c=!0,u=!1,s=void 0;try{for(var d,f=a.children[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){var m=d.value;if(m.matches("label")){var p=m.firstChild.data.toLowerCase().replace(/[^a-z]/g,""),y=m.lastElementChild.value;(function(e,t,r){var a=n.querySelector("tbody"),o=n.querySelectorAll("thead th"),i=!0,l=!1,c=void 0;try{for(var u,s=o[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)if(u.value.textContent.toLowerCase()===e){var d="salary"===e?function(e){var t=e.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");return"$".concat(t)}(t):t;r.insertAdjacentHTML("beforeend","<td>".concat(d,"</td>"))}}catch(e){l=!0,c=e}finally{try{i||null==s.return||s.return()}finally{if(l)throw c}}a.insertAdjacentElement("afterbegin",r)})(p,y,t)}m.lastElementChild&&m.lastElementChild.matches("input")&&(m.lastElementChild.value="")}}catch(e){u=!0,s=e}finally{try{c||null==f.return||f.return()}finally{if(u)throw s}}return l("Emploee added successfully","The Emploee has been added to the table.","success")});
//# sourceMappingURL=index.4817d284.js.map