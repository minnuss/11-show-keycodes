const keyCodes = document.querySelectorAll('.keycodes__content--key');

window.addEventListener('keydown', (e) => {
    let key = e.key;
    let keyCode = e.keyCode;
    let code = e.code;

    if (key === " ") key = 'Space';

    keyCodes[0].innerHTML = `${key}  <small>event.key</small>`;
    keyCodes[1].innerHTML = `${keyCode}  <small>event.keyCode</small>`;
    keyCodes[2].innerHTML = `${code} <small>event.code</small>`;
})