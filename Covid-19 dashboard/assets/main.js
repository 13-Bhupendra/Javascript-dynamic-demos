const api = "https://api.rootnet.in/covid19-in/stats/latest";

async function covidDashBoard() {
const dashboardContent = document.getElementById("dashboardContent");

 
    const response = await fetch(api)
    const data = await response.json();
    const state =  data.data.regional;

    dashboardContent.innerHTML = " "

    state.forEach((state,index) => {

        const totalCases = state.confirmedCasesIndian + state.confirmedCasesForeign;

        const row = `
        <tr>
            <td>${index + 1}</td>
            <td>${state.loc}</td>
            <td>${state.confirmedCasesIndian}</td>
            <td>${state.confirmedCasesForeign}</td>
            <td>${state.discharged}</td>
            <td>${state.deaths}</td>
            <td>${totalCases}</td>
        </tr>
        `
        dashboardContent.innerHTML += row;

    });

}
 
covidDashBoard();