const send = document.getElementById("send");

send.onclick = () => {
    const method = document.getElementById("method").value;
    const url = document.getElementById("url").value;
    const body = document.getElementById("body").value.trim();

    request(method, url, body).then(
        response => {
            const status = document.getElementById("response-status");
            status.innerText = "status: " + response.status.toString();

            response.text().then(data => {
                const body = document.getElementById("response-body");
                body.innerText = "body: " + data;
                // console.log(data);
            })
        }
    )
};

async function request(method, url, body) {
    const resp = await fetch(url, {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        body: body ? body : undefined,
        headers: body ? {
            "X-Requested-With": "fetch",
            "Content-Type": "application/json"
        } : {
            "X-Requested-With": "fetch",
        },
    });
    return resp;
}