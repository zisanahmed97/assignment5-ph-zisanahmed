const api = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

let allIssues = []



async function loadIssues(){

const res = await fetch(api)
const data = await res.json()

allIssues = data.data

document.getElementById("issueCount").innerText = allIssues.length

console.log(allIssues);

}




loadIssues();