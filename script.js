window.onload = function (e) {

    var form = document.getElementById('form'),
        formInputList = form.elements,
        container = document.getElementById('container'),
        buttonsWrapper = document.getElementById('buttons-wrapper'),
        body = document.getElementsByTagName('body')[0];

    //form validation
    form.onsubmit = function (e) {
        var i;

        e.preventDefault();

        for (i = 0; i < formInputList.length; i++) {
            if (formInputList[i].id != 'submit') {
                if (formInputList[i].value == '') {
                    formInputList[i].className = 'error';
                } else {
                    formInputList[i].className = '';
                }
            }
        }
    };

    buttonsWrapper.addEventListener('click', function (e) {
        var classNameToAdd,
            classNameToRemove,
            classListArray,
            classListArrayEdited = [],
            userInputText,
            userInputElement,
            userInputElementId,
            userInputElementClass,
            elem,
            elementToRemove,
            targetForm,
            data = {},
            propName,
            table,
            tbody,
            tr,
            td,
            i,
            j;

        e.preventDefault();

        if (e.target.value != undefined) {
            if (e.target.value == 'addClass') {
                classNameToAdd = prompt('Class name to add');
                if (classNameToAdd !== null && classNameToAdd !== '' &&
                    classNameToAdd.trim().length !== 0) {
                    if (container.className == '') {
                        container.className = classNameToAdd.trim();
                    } else {
                        container.className += (' ' + classNameToAdd.trim());
                    }
                }
                //container.classList.add(classNameToAdd);
            }
            if (e.target.value == 'removeClass') {
                classNameToRemove = prompt('Class name to remove');
                classListArray = container.className.split(' ');
                for (i = 0; i < classListArray.length; i++) {
                    if (classListArray[i] != classNameToRemove) {
                        classListArrayEdited.push(classListArray[i]);
                    }
                }
                container.className = classListArrayEdited.join(' ');
                if (container.className == '') {
                    container.removeAttribute('class');
                }
                //container.classList.remove(classNameToRemove);
            }
            if (e.target.value == 'addTextNode') {
                userInputText = prompt('Enter text:');
                if (userInputText != null) {
                    container.innerText += (' ' + userInputText);
                }
            }
            if (e.target.value == 'emptyContainer') {
                container.innerText = '';
            }
            if (e.target.value == 'addElement') {
                userInputElement = prompt('Element name to add:');
                userInputElementId = prompt('ID');
                userInputElementClass = prompt('Class');

                elem = document.createElement(userInputElement);
                container.appendChild(elem);
                if (userInputElementId !== '') {
                    elem.id = userInputElementId;
                }
                if (userInputElementClass !== '') {
                    elem.className = userInputElementClass;
                }
            }
            if (e.target.value == 'removeElement') {
                elementToRemove = prompt('Selector to remove:');
                if (container.querySelector(elementToRemove) !== null) {
                    container.removeChild(container.querySelector(elementToRemove));
                }
            }
            if (e.target.value == 'serializeAndShow') {
                targetForm = document.querySelector(prompt('Enter forms selector:'));

                if (document.getElementById('table-1') !== null) {
                    body.removeChild(document.getElementById('table-1'));
                }

                table = body.appendChild(document.createElement('table'));
                table.id = 'table-1';
                tbody = table.appendChild(document.createElement('tbody'));
                formInputList = targetForm.elements;


                for (j = 0; j < formInputList.length; j++) {
                    if (formInputList[j].id != 'submit') {
                        data[formInputList[j].id] = formInputList[j].value;
                    }
                }

                for (propName in data) {
                    if (data.hasOwnProperty(propName)) {
                        tr = tbody.appendChild(document.createElement('tr'));
                        td = tr.appendChild(document.createElement('td'));
                        td.appendChild(document.createTextNode(propName));
                        td = tr.appendChild(document.createElement('td'));
                        td.appendChild(document.createTextNode(data[propName]));
                    }
                }
                console.log(data);
            }
        }
    });
};
