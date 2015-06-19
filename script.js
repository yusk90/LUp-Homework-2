window.onload = function (e) {

    var form = document.getElementById('form'),
        formInputList = form.elements,
        container = document.getElementById('container'),
        buttonsWrapper = document.getElementById('buttons-wrapper'),
        body = document.getElementsByTagName('body')[0],
        buttonsData = {};

    buttonsData.addClass = addClass;
    buttonsData.removeClass = removeClass;
    buttonsData.addTextNode = addTextNode;
    buttonsData.emptyContainer = emptyContainer;
    buttonsData.addElement = addElement;
    buttonsData.removeElement = removeElement;
    buttonsData.serializeAndShow = serializeAndShow;

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

    function addClass() {
        var classNameToAdd = prompt('Class name to add');

        /*if (classNameToAdd !== null && classNameToAdd !== '' &&
            classNameToAdd.trim().length !== 0) {
            if (container.className == '') {
                container.className = classNameToAdd.trim();
            } else {
                container.className += (' ' + classNameToAdd.trim());
            }
        }*/

        if (classNameToAdd != '' && classNameToAdd != null) {
            container.classList.add(classNameToAdd);
        }
    }

    function removeClass() {
        var classNameToRemove = prompt('Class name to remove'),
            classListArray,
            classListArrayEdited = [],
            i;

        /*classListArray = container.className.split(' ');
        for (i = 0; i < classListArray.length; i++) {
            if (classListArray[i] != classNameToRemove) {
                classListArrayEdited.push(classListArray[i]);
            }
        }
        container.className = classListArrayEdited.join(' ');
        if (container.className == '') {
            container.removeAttribute('class');
        }*/

        if (classNameToRemove != '') {
            container.classList.remove(classNameToRemove);
        }
    }

    function addTextNode() {
        var userInputText = prompt('Enter text:');

        if (userInputText != null) {
            //container.innerText += (' ' + userInputText);
            container.appendChild(document.createTextNode(userInputText + ' '));
        }
    }

    function emptyContainer() {
        container.innerText = '';
    }

    function addElement() {
        var userInputElement,
            userInputElementId,
            userInputElementClass,
            elem;

        userInputElement = prompt('Element name to add:');
        if (userInputElement !== '' && userInputElement !== null) {
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
    }

    function removeElement() {
        var elementToRemove = prompt('Selector to remove:');

        if (elementToRemove !== '') {
            if (container.querySelector(elementToRemove) !== null) {
                container.removeChild(container.querySelector(elementToRemove));
            }
        }
    }

    function serializeAndShow() {
        var targetForm,
            data = {},
            propName,
            table,
            tbody,
            tr,
            td,
            j;

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

    buttonsWrapper.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.value) {
            buttonsData[e.target.value]();
        }
    });

};
