var param_btn = document.getElementById('offcanvas-params-btn');
var setup = document.getElementById('current-setup');
var threads_slider = document.getElementById('input-fastdna-threads');
threads_slider.max = window.navigator.hardwareConcurrency;
var threads_num = document.getElementById('threads-num');
threads_num.innerText = threads_slider.value;
console.log(threads_num);
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
params = {
  'input-path-output': "Output path",
  'input-path-classifier': "Classifier path",
  'input-path-virus': "Viruses path",
  'input-fastdna-path': "fastDNA path",
  'input-fastdna-threads': 'Threads',
  'input-fastdna-hits': "Considered hits"
}

param_btn.onclick = function () {
  setup.innerHTML = '';
  for (const [key, val] of Object.entries(params)) {
    var elem = document.getElementById(key);
    if (elem && elem.value !== "") {
      var elem_value = elem.value;
      // var entry = document.createElement('h6');
      // entry.innerText = `${val}: ${elem_value}`;
      var entry = document.createElement('div')
      entry.className = 'list-group-item';
      entry.innerHTML = `<div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${val}</h5>
                          </div>
                          <p class="mb-1 dynamic-break">${elem_value}</p>`;
      setup.appendChild(entry);
    }
    else {
      continue;
    }
  }
  // output = document.getElementById('input-path-output').value
  // var output_entry = document.createElement('h6');
  // output_entry.id = 'output-path-entry';
  // output_entry.innerText = `${params['input-path-output']}: ${output}`;
  // console.log(output);
  // setup.appendChild(output_entry);
}


var hometab = document.getElementById('pills-home-tab')
console.log(hometab.ariaSelected)

function test() {
  console.log(clicked)
}

// const hometab_obj = document.getElementsByClassName('nav-item');
// for (const elem of hometab_obj) {
//     if (elem.id == "pills-home-tab") {
//         hometab_obj.addEventListener('click', test);   
//     }
//     else {
//         console.log("not home");
//     }
// }
function hideButton() {
  param_btn.style.display = "none";
}
// function showButton(){
//   param_btn.style.display = "block";
// }


var tabEl = document.querySelectorAll('button[data-bs-toggle="pill"]')
tabEl.forEach(function (el) {
  el.addEventListener('shown.bs.tab', function (event) {
    console.log(event.target.id); // newly activated tab
    if (event.target.id === 'pills-home-tab') {
      // param_btn.style.display = "none";
      gsap.to(param_btn, {
        y: 60,
        opacity: 0,
        ease: "power1.inOut",
        force3D: true,
        onComplete: hideButton,
        duration: 0.2
      })
    }
    else {
      param_btn.style.display = "block";
      gsap.to(param_btn, {
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
        force3D: true,
      })
    }
    // event.relatedTarget // previous active tab
  })
})

// const tabEl = document.querySelector('button[data-bs-target="#pills-home"]')
// tabEl.addEventListener('shown.bs.tab', event => {
//     if (param_btn.style.display === "none") {
//         param_btn.style.display = "block";
//       } else {
//         param_btn.style.display = "none";
//       }
// //   event.target // newly activated tab
// //   console.log(event.target.clicked)
// //   event.relatedTarget // previous active tab
// })

threads_slider.addEventListener('input', (e) => {
  threads_num.textContent = e.target.value;
})


// console.log(window.navigator.hardwareConcurrency);
// console.log(document.getElementById('input-fastdna-threads').max);



//something about form validation form bootstrap idk
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}
// const inputs_predict = document.getElementById("pills-predict").querySelectorAll('input')
// console.log(inputs_predict)
// dot indicator (not working well and kinda not intuitive)
// Array.from(inputs_predict).forEach(input => {
//   input.addEventListener('change', (e) => {
//     console.log(window.getComputedStyle(input, ':invalid'));
//     if (window.getComputedStyle(input, ':invalid').content !== 'none') {
//       const path = []
//       while (input) {
//         if (input.className === 'accordion-item') {
//           var i = input.querySelectorAll('span');
//           console.log(i);
//           i[0].style.display = "block"
//           break;
//         }
//         path.push(input)
//         input = input.parentElement
//       }
//     }
//     else {
//       const path = []
//       while (input) {
//         if (input.className === 'accordion-item') {
//           var i = input.querySelectorAll('span');
//           console.log(i);
//           i[0].style.display = "none"
//           break;
//         }
//         path.push(input)
//         input = input.parentElement
//       }
//     }
//     // console.log(path)
//     // badge = findAncestor('input', 'badge')
//     // console.log(badge);
//   })
// })
// let invalid_sections = (function() {
//   let set = new Set();
//   return {
//     add: function(value) { set.add(value); },
//     clear: function() { set.clear(); },
//     getValues: function() { return set; }
//   };
// })();

toast_container = document.getElementsByClassName('toast-container')[0];
// let invalid_sections = new Set();
// Array.from(inputs_predict).forEach(input => {
//   toast_container.innerHTML = '';
//   input.addEventListener('invalid', (e) => {
//     // console.log(input.labels[0].textContent)
//     // let invalidSections = invalid_sections;

//     while (input) {
//       if (input.className === 'accordion-item') {
//         var i = input.querySelectorAll('h2.accordion-header')[0].innerText;
//         console.log(typeof i);
//         var t = document.createElement('div')
//         t.id = `${i.replace(/ /g, "-")}`
//         t.classList = 'toast'
//         t.role = 'alert'
//         t.ariaAtomic = 'true';
//         t.ariaLive = 'assertive';
//         //<div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//         t.innerHTML = `
//     <div class="toast-header">
//         <!-- <img src="..." class="rounded me-2" alt="..."> -->
//         <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
//         <strong class="me-auto">Error</strong>
//         <!-- <small>11 mins ago</small> -->
//         <button type="button" class="btn-close" data-bs-dismiss="toast"
//             aria-label="Close"></button>
//     </div>
//     <div class="toast-body">
//         <p>${i} has invalid fields.</p>
//     </div>
// </div>`;
//         toast_container.appendChild(t);
//         // console.log(invalidSections.add(i));
//         // i[0].style.display = "block"
//         break;
//       }
//       input = input.parentElement
//     }

//     // invalid_sections = invalidSections;
//     // console.log(document.querySelectorAll('.toast')[0].querySelector('.toast-body'))
//     // var toastElList = [].slice.call(document.querySelectorAll('.toast'))
//     // var toastList = toastElList.map(function(toastEl) {
//     //   toastEl.querySelector('p').textContent = `${i} has invalid fields.`
//     //   return new bootstrap.Toast(toastEl)
//     // })
//     // toastList.forEach(toast => {
//     //   // console.log(toast.querySelector('.toast-body'))
//     //   toast.show()
//     // })
//     // console.log(input.querySelector('h3'))
//     // console.log(window.getComputedStyle(input, ':invalid'));
//     // console.log(path)
//     // badge = findAncestor('input', 'badge')
//     // console.log(badge);
//   })
// })

document.getElementById('post-button').addEventListener("click", (e) => {
  let invalid_sections = new Set();
  // invalid_sections.add(1);
  // console.log(toast_container);
  // console.log(invalid_sections);
  toast_container.innerHTML = '';
  let invalidInputs = document.getElementById("predict-form").querySelectorAll(':invalid')
  console.log(invalidInputs);

  Array.from(invalidInputs).forEach(invalid => {
    while (invalid) {
      if (invalid.className === 'accordion-item') {
        var i = invalid.querySelectorAll('h2.accordion-header')[0].innerText;
        console.log(typeof i);
        invalid_sections.add(i);
        // i[0].style.display = "block"
        break;
      }
      invalid = invalid.parentElement
    }
  })
  console.log(invalid_sections);

  invalid_sections.forEach(section => {
    console.log(section)
    var t = document.createElement('div')
    t.id = 'liveToast'
    t.classList = 'toast'
    t.role = 'alert'
    t.ariaAtomic = 'true';
    t.ariaLive = 'assertive';
    //<div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    t.innerHTML = `
      <div class="toast-header">
          <!-- <img src="..." class="rounded me-2" alt="..."> -->
          <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <strong class="me-auto">Error</strong>
          <!-- <small>11 mins ago</small> -->
          <button type="button" class="btn-close" data-bs-dismiss="toast"
              aria-label="Close"></button>
      </div>
      <div class="toast-body">
          <p>${section} has invalid fields.</p>
      </div>
  </div>`;
    toast_container.appendChild(t);
  })

  console.log(toast_container)
  console.log(document.querySelectorAll('.toast'))
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  console.log(toastElList)
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => {
    // console.log(toast.querySelector('.toast-body'))
    toast.show()
  })

})
// useless focusing on element from toast
// document.getElementById("toast-target").addEventListener("click", () => {
//   document.getElementById("input-path-output").focus();
// })


//potential info icon move on info open
// var info_output_text = document.getElementById('outputInfoText');
// function addToInfo(infoText, targetIcon){
//   infoText.appendChild(targetIcon);
// }

// var info_btn = document.getElementById('info-output');
// info_btn.addEventListener('click', (e) => {
//   target = e.target;
//   console.log(target);
//   gsap.to(target, {
//     y: 65,
//     x: -150,
//     // opacity: 0,
//     ease: "power1.inOut",
//     force3D: true,
//     onComplete: addToInfo(info_output_text, target),
//     duration: 0.2
//   })
// })