function convert() {
    const API_KEY = "2a1420435f0297a3df5e4393";
    let fc = document.querySelector("#fc").value;
    let fcs = document.querySelector("#fcs").value;
    let tcs = document.querySelector("#tcs").value;
    let out = document.querySelector("#out");

    let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fcs}/${tcs}/${fc}`;

    fetch(url, {
        method:'GET',
        headers: {
            'accept' : 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let conversion_rate = data.conversion_rate;
        let conversion_result = data.conversion_result.toFixed(2);

        let htmlx = `<h3>Result:</h3> <h1>${conversion_result}</h1> <h3>Conversion Rate:</h3> <h2>${conversion_rate}</h2>`;
        out.innerHTML = htmlx;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
