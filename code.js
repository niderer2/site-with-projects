function addInfo(name, txt, src, link_1, link_2) {
  if (!document.body) {
    console.error("document.body не доступен");
    return;
  }


  const container = document.createElement("div");
  container.className = name;
  container.style.position = "absolute";
  container.style.width = "80vw";

  const textDiv = document.createElement("div");
  textDiv.className = `${name}_txt`;
  textDiv.textContent = txt || "Нет текста";
  textDiv.style.fontSize = "1.7rem";

  const link1Div = document.createElement("div");
  link1Div.className = `${name}_link_1`;
  if (link_1) {
    const link1 = document.createElement("a");
    link1.href = link_1;
    link1.textContent = "ссылка на гитхаб";
    link1Div.appendChild(link1);
  } else {
    link1Div.textContent = "Нет ссылки на гитхаб";
  }

  const link2Div = document.createElement("div");
  link2Div.className = `${name}_link_2`;
  if (link_2) {
    const link2 = document.createElement("a");
    link2.href = link_2;
    link2.textContent = "ссылка на сайт";
    link2Div.appendChild(link2);
  } else {
    link2Div.textContent = "Нет ссылки на сайт";
  }

  const img = document.createElement("img");
  img.className = `${name}_img`;
  if (src) {
    img.src = src;
  } else {
    img.src = "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg", "https://github.com/niderer2/site-with-projects"; // Заглушка
  }
  img.alt = "image";
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.position = "absolute";
  img.style.top = "0px";
  img.style.right = "-120px";

  container.appendChild(textDiv);
  container.appendChild(link1Div);
  container.appendChild(link2Div);
  container.appendChild(img);

  document.body.appendChild(container);
  console.log("Элемент добавлен в body", container);
}


window.onload = function() {
    txt = "Этот же сайт. Путеводитель по всем остальным сайтам. В нём вы найдёте общую информацию, а также ссылку на GitHub и на сайт, если это сайт. Это реквием?"
    addInfo("site_with_projects", txt, "Screenshot_1.png", "https://github.com/niderer2/site-with-projects", "https://niderer2.github.io/site-with-projects/");
    
    txt = 'Танчики. Ничем не примечательная игра. Работает строго на ПК, управление: движение — AD, стрельба — пробел. Цель игры — набрать как можно больше очков. Это самая моя первая игра на JS.'
    addInfo("for_in_tanks", txt, "images.png", "https://github.com/niderer2/for-in-tanks.githab.io", "https://niderer2.github.io/for-in-tanks.githab.io/");
    
    txt = 'Игра "Собери букет" создана специально на 8 Марта для девочек из моего класса. Они её не оценили... Игра способна корректно работать как на ПК, так и на телефонах. В правом верхнем углу есть кнопка, в ней есть обучение.'
    addInfo("bouquet_by_Edgar_Nid", txt, "Screenshot_2.png", "https://github.com/niderer2/bouquet_by_Edgar_Nid", "https://niderer2.github.io/bouquet_by_Edgar_Nid/");
    
    txt = 'Программа способна создать кастомные множества Мандельброта. Вся информация есть в README и в пользовательском соглашении.'
    addInfo("Mandelbrot_set", txt, "Множество.jpg", "https://github.com/niderer2/Mandelbrot_set", "");
    
}