function elementsById() {
    let first = document.getElementById('first'),
        second = document.getElementById('second');
    console.log(first.innerText + ' ' + second.innerText);
}

function getForm() {
    let values = {};
    let polValues = document.getElementsByName('pol');

    polValues.forEach(function (item) {
        if (item.checked == true) {
            values[item.value] = { status: 'checked' }
        } else {
            values[item.value] = { status: 'false' }
        }
    })
    console.log(values);
}

function getBigForm() {
    let finalForm = {};
    finalForm['name'] = document.getElementById('name').value;
    finalForm['surname'] = document.getElementById('surname').value;
    finalForm['age'] = document.getElementById('age').value;

    let sexValues = document.getElementsByName('sex'),
        index = 0;

    sexValues.forEach(function (item) {
        if (item.checked == true) {
            sexValues[index] = {};
            sexValues[index]['value'] = item.value;
            sexValues[index]['status'] = 'checked';
            index++;
        } else {
            sexValues[index] = {};
            sexValues[index]['value'] = item.value;
            sexValues[index]['status'] = 'false';
            index++;
        }
    })
    finalForm['sex'] = sexValues;

    console.log(JSON.stringify(finalForm));
}

function setStyle(fontColor, fontSize) {
    let elems = document.getElementsByClassName('listNumbers')[0].childNodes;

    elems.forEach(function (item) {
        if (item.nodeType == 1) {
            item.style.color = fontColor;
            item.style.fontSize = fontSize;
        }
    });
}

function buildNames (names, parentNode) {
    let root = document.getElementsByClassName(parentNode)[0];
    if (root != undefined) {
        names.forEach(function (item) {
            let li = document.createElement('li');
            li.innerText = item;
            root.append(li);
        });
        return true;
    } else {
        return false;
    }
}