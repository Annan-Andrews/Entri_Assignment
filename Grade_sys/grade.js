let grade = [
  { grade: "A+", min: 90, max: 100 },
  { grade: "A", min: 80, max: 89 },
  { grade: "B+", min: 70, max: 79 },
  { grade: "B", min: 60, max: 69 },
  { grade: "C+", min: 50, max: 59 },
  { grade: "C", min: 40, max: 49 },
  { grade: "D+", min: 30, max: 39 },
  { grade: "D", min: 20, max: 29 },
  { grade: "E", min: 0, max: 19 }
]

let MinGrade = 30


function getGrade(mark) {
  for (let i = 0; i < grade.length; i++) {
      if (mark >= grade[i].min && mark <= grade[i].max) {
          return grade[i].grade
      }
  }
}


function isPassed(mark) {
  return mark >= MinGrade
}




function displayResult(message, flag) {  
  let resultDiv = document.getElementById('result')
  resultDiv.innerHTML = message


      if (flag) {
        resultDiv.style.color = "green";
        resultDiv.style.fontWeight = "bold";
    } else {
        resultDiv.style.color = "red";
        resultDiv.style.fontWeight = "bold";
    }
}


function Calculate() {
  let markInput = document.getElementById('mark').value.trim()

  if (markInput === "") {
      displayResult("Please enter a mark.", false)
      return
  }

  let mark = parseFloat(markInput)

  if (mark < 0 || mark > 100) {
      displayResult("Please enter a valid mark between 0 and 100.", false)
      return
  }

  let grade = getGrade(mark)
  let passed = isPassed(mark)


  if (passed) {
      displayResult(`Congratulations! You passed with a grade of ${grade}.`, true)
  } else {
      displayResult(`Sorry, you did not pass. Your grade is ${grade}.`, false)
  }
}

document.getElementById('submitBtn').addEventListener('click', Calculate)
