const container = document.querySelector('.container');

for(let i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.style.cssText = "width: 30px; height: 30px";
    div.style.backgroundColor = "blue";
    container.append(div);
}

