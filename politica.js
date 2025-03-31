(async function() {
    const filePath = "\универсальное_пользовательское_соглашение.txt"; // Замените на вашу ссылку
    const cookieName = "accepted_terms";
    
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
    }
    
    function getCookie(name) {
        return document.cookie.split('; ').some(row => row.startsWith(name + '='));
    }
    
    function showConsentBanner() {
        let panel = document.createElement("div");
        panel.style = "position:fixed; bottom:0; z-index:90000000; left:0; right:0; background:white; padding:10px; box-shadow:0 -2px 5px rgba(0,0,0,0.2); text-align:center;";
        
        let message = document.createElement("p");
        message.textContent = "Загружается текст...";
        panel.appendChild(message);
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "accept_terms";
        
        let label = document.createElement("label");
        label.htmlFor = "accept_terms";
        label.textContent = "Я принимаю условия и cookies";
        
        let button = document.createElement("button");
        button.textContent = "OK";
        button.onclick = function() {
            if (checkbox.checked) {
                setCookie(cookieName, "true", 7);
                panel.remove();
            }
        };
        
        panel.appendChild(checkbox);
        panel.appendChild(label);
        panel.appendChild(button);
        document.body.appendChild(panel);
        
        console.log(filePath)
        fetch(filePath)
            .then(response => response.text())
            .then(text => message.textContent = text)
            .catch(error => message.textContent = "Ошибка загрузки текста");
    }
    
    if (!getCookie(cookieName)) {
        showConsentBanner();
    }
})();
