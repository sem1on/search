const list = document.querySelectorAll('.list li');

function debounce (fn, ms) {
    let timeout;
    return function () {
        const funCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout);
        timeout = setTimeout(funCall, ms);
    }
}

function onSearch (e) {
    let value = e.target.value.toLowerCase();
    if(value != ''){
        list.forEach(elem => {
            if (!elem.innerText.toLowerCase().includes(value)) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        })
    } else {
        list.forEach(elem => {
            elem.classList.remove('hide');
        })
    }
}

onSearchDebbounes = debounce(onSearch, 300);

document.querySelector('.search-panel').addEventListener('keyup', onSearchDebbounes);
