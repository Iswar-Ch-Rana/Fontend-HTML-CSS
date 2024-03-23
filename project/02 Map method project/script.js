import { Students } from "./data.js";

const tableBody = document.querySelector(".table tbody");

function renderDataInTable(StudentsData) {

    const arrayOfRows = StudentsData.map((student) => {

        const marksArray = Object.values(student.marks);
        const totalMark = marksArray.reduce((acc, curr) => acc + curr, 0); 
        
        const totalSubjects = marksArray.length;
        
        const averageMark = totalMark / totalSubjects;
        console.log(averageMark);

        return `<tr>
            <td>${student.id}</td>
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.marks.math}<br/>
            <td>${student.marks.english}</td>
            <td>${student.marks.science}</td>
            <td>${totalMark}</td>
            <td>${averageMark.toFixed(2)}</td>
        </tr>`;
    });
    tableBody.innerHTML = arrayOfRows.join(" ");
};

renderDataInTable(Students);
