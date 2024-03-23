const getDataFromEndpoint = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
}

async function fetchDataAndRender() {
    let Students = [];
    try {
        Students = await getDataFromEndpoint("http://localhost:3050/data");
        renderDataInTable(Students);
    } catch (error) {
        console.log('There was an error retrieving the student data: ', error);
    }

    console.log('Students Data:', Students);
}

const tableBody = document.querySelector(".table tbody");

function renderDataInTable(StudentsData) {
    if (!Array.isArray(StudentsData)) {
        console.log('Invalid data format. Expected an array.');
        return;
    }
    
    const arrayOfRows = StudentsData.map((student) => {
        const totalMark = student.marks.math + student.marks.science + student.marks.english;
        const totalSubjects = Object.keys(student.marks).length;
        const averageMark = totalMark / totalSubjects;

        return `<tr>
            <td>${student.id}</td>
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.marks.math}</td>
            <td>${student.marks.english}</td>
            <td>${student.marks.science}</td>
            <td>${totalMark}</td>
            <td>${averageMark.toFixed(2)}</td>
        </tr>`;
    });
    tableBody.innerHTML = arrayOfRows.join(" ");
}

fetchDataAndRender();
