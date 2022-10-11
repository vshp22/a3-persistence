window.onload = function () {
  //const sbutton = document.querySelector('button')
  const sbutton = document.getElementById("addrecord");
  sbutton.onclick = AddRecord;
};

const AddRecord = function (e) {
  // prevent default form action from being carried out
  e.preventDefault();
  const firstPage = document.querySelector("#firstPage");
  //const table = document.createElement("table")
  //table.id = "storedData"
  const table = document.getElementById("storedData");
  table.innerHTML = "";
  table.innerHTML +=
    "<tr><th>Class</th>" +
    "<th>Assignment1 Score</th>" +
    "<th>Assignment2 Score</th>" +
    "<th>Project Score </th>" +
    "<th>Exam Score</th>" +
    "<th>Final Grade</th>" +
    "<th>Delete</th></tr>";
  //const firstPage = document.querySelector("#firstPage");
  const studentName = document.querySelector("#studentName"),
    a1score = document.querySelector("#a1score"),
    a2score = document.querySelector("#a2score"),
    projectSc = document.querySelector("#projectSc"),
    examScore = document.querySelector("#examScore");
    console.log(studentName.value);
  const json = {
    studentName: studentName.value,
    a1score: a1score.value,
    a2score: a2score.value,
    projectSc: projectSc.value,
    examScore: examScore.value,
  };
  
  const body = JSON.stringify(json);
  console.log(body);

  fetch("/AddRecord", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }

  })
  .then(response => response.json())
  .then(json => {
          //table.innerHTML = "<form>"
          console.log(json)
          json.forEach((student, index) => {
            table.innerHTML +=
              "<tr id=entry" +
              index +
              "><td>" +
              student.studentName +
              "</td>" +
              "<td>" +
              student.a1score +
              "</td>" +
              "<td>" +
              student.a2score +
              "</td>" +
              "<td>" +
              student.projectSc +
              "</td>" +
              "<td>" +
              student.examScore +
              "</td>" +
              "<td>" +
              student.finalScore +
              "</td>" +
              //+ "<td>" + "<button type='button' id ="+index+" onclick=deleteStudent("+ index + ")>X</button>" +
              //"</td></tr>"
              "<td>" +
              "<button type='button' id =" +
              index +
              " onclick=deleteStudent(this.id)>X</button>" +
              "</td></tr>";
          });
          //table.innerHTML += "</form>"
        });
      //"<span class='glyphicon glyphicon-remove' />"
      //console.log(student.finalScore)
      document.body.appendChild(table);
      firstPage.reset(); // this resets the forms fields to empty

  fetch("/getRecords", {
    method: "GET"
  })
  .then(response => response.json())
  .then(json => {
    console.log(json)
          json.forEach((student, index) => {
            table.innerHTML +=
              "<tr id=entry" +
              index +
              "><td>" +
              student.studentName +
              "</td>" +
              "<td>" +
              student.a1score +
              "</td>" +
              "<td>" +
              student.a2score +
              "</td>" +
              "<td>" +
              student.projectSc +
              "</td>" +
              "<td>" +
              student.examScore +
              "</td>" +
              "<td>" +
              student.final_score +
              "</td>" +
              //+ "<td>" + "<button type='button' id ="+index+" onclick=deleteStudent("+ index + ")>X</button>" +
              //"</td></tr>"
              "<td>" +
              "<button type='button' id =" +
              index +
              " onclick=deleteStudent(this.id)>X</button>" +
              "</td></tr>";
          });
  });

  return false;
  
};

/*   const deleteRow = function (e){
    e.preventDefault()
 
    return false
  });
  //firstPage.reset(); // this resets the forms fields to empty
  //return false;
};

// const submit1 = function (e) {
//   // prevent default form action from being carried out
//   e.preventDefault();

//   const firstPage = document.querySelector("#firstPage");
//   //const table = document.createElement("table")
//   //table.id = "storedData"
//   const table = document.getElementById("storedData");
//   table.innerHTML = "";
//   table.innerHTML +=
//     "<tr><th>Class</th>" +
//     "<th>Assignment1 Score</th>" +
//     "<th>Assignment2 Score</th>" +
//     "<th>Project Score </th>" +
//     "<th>Exam Score</th>" +
//     "<th>Final Grade</th>" +
//     "<th>Delete</th></tr>";

//   const studentName = document.querySelector("#studentName"),
//     a1score = document.querySelector("#a1score"),
//     a2score = document.querySelector("#a2score"),
//     projectSc = document.querySelector("#projectSc"),
//     examScore = document.querySelector("#examScore");
//   const json = {
//     studentName: studentName.value,
//     a1score: a1score.value,
//     a2score: a2score.value,
//     projectSc: projectSc.value,
//     examScore: examScore.value,
//   };

//   const body = JSON.stringify(json);

//   fetch("/submit", {
//     method: "POST",
//     body,
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       //table.innerHTML = "<form>"
//       json.forEach((student, index) => {
//         table.innerHTML +=
//           "<tr id=entry" +
//           index +
//           "><td>" +
//           student.studentName +
//           "</td>" +
//           "<td>" +
//           student.a1score +
//           "</td>" +
//           "<td>" +
//           student.a2score +
//           "</td>" +
//           "<td>" +
//           student.projectSc +
//           "</td>" +
//           "<td>" +
//           student.examScore +
//           "</td>" +
//           "<td>" +
//           student.finalScore +
//           "</td>" +
//           //+ "<td>" + "<button type='button' id ="+index+" onclick=deleteStudent("+ index + ")>X</button>" +
//           //"</td></tr>"
//           "<td>" +
//           "<button type='button' id =" +
//           index +
//           " onclick=deleteStudent(this.id)>X</button>" +
//           "</td></tr>";
//       });
//       //table.innerHTML += "</form>"
//     });
//   //"<span class='glyphicon glyphicon-remove' />"
//   //console.log(student.finalScore)
//   document.body.appendChild(table);
//   firstPage.reset(); // this resets the forms fields to empty
//   return false;
//};

/*   const deleteRow = function (e){
    e.preventDefault()
 
    return false
  } */



/* function productDelete(ctl) {
    $(ctl).parents("tr").remove();
  } */

function deleteStudent(buttonId) {
  const table = document.getElementById("storedData");
  /* table.innerHTML += "<tr><th>Student</th>"
      + "<th>Assignment1 Score</th>"
      + "<th>Assignment2 Score</th>"
      + "<th>Project Score </th>"
      + "<th>Exam Score</th>"
      + "<th>Final Grade</th>"
      + "<th>Delete</th></tr>" */

  let json = {
    index: buttonId,
  };
  let body = JSON.stringify(json);
  fetch("/delete", {
    method: "POST",
    body,
  })
    .then((response) => response.json())
    .then((json) => {
      //     console.log(json)
      //table.innerHTML = "<form>"
      table.innerHTML = "";
      //let table =
      table.innerHTML +=
        "<tr><th>Class</th>" +
        "<th>Assignment1 Score</th>" +
        "<th>Assignment2 Score</th>" +
        "<th>Project Score </th>" +
        "<th>Exam Score</th>" +
        "<th>Final Grade</th>" +
        "<th>Delete</th></tr>";

      json.forEach((student, index) => {
        console.log(index);
        table.innerHTML +=
          "<tr id=entry" +
          index +
          "><td>" +
          student.studentName +
          "</td>" +
          "<td>" +
          student.a1score +
          "</td>" +
          "<td>" +
          student.a2score +
          "</td>" +
          "<td>" +
          student.projectSc +
          "</td>" +
          "<td>" +
          student.examScore +
          "</td>" +
          "<td>" +
          student.finalScore +
          "</td>" +
          //+ "<td>" + "<button type='button' onclick=deleteStudent("+ index + ")>X</button>" +"</td></tr>"
          "<td>" +
          "<button type='button' id =" +
          index +
          " onclick=deleteStudent(this.id)>X</button>" +
          "</td></tr>";
      });
      //table.innerHTML += "</form>"
    });
  //const table = document.getElementById("storedData")

  //firstPage.reset(); // this resets the forms fields to empty
  //table.innerHTML = ""

  return false;
}



