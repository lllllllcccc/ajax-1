

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx，还是失败4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签

                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到body里面
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }

    };
    request.send();

};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js")
    request.onload = () => {
        console.log("1")
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    };
    request.onerror = () => {
        console.log("2")

    };
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/1.html");
    request.onload = () => {

        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div)
    };
    request.onerror = () => {

    };
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/1.xml");

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {

            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "1.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name;
        }
    };
    request.send();
};
let n = 1;
getPAGE.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}.json`);
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);

            array.forEach(item => {

                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li)
            });
            n += 1;

        }


    }
    request.send();
};