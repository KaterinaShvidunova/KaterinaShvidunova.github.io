(function(){
	var createDom = {
		addConteiner: function(){
			var container = document.createElement('div');
			document.body.appendChild(container);
			container.className = 'container';
		},
		addtitle: function(nameTitle){
			var title = document.createElement(nameTitle);
			title.innerHTML = 'Тест по программированию';
			title.className = 'title-container';
			document.body.lastElementChild.appendChild(title);
		},
		addForm: function(fcount, count) {
			for (k = 1; k < fcount+1; k++) {
				
						var form = document.createElement('form');
						document.body.lastChild.appendChild(form);
						var title = document.createElement('h3');
						title.innerHTML = k+'. Вопрос №'+k;
						form.appendChild(title);
				
					for (i = 0; i < count; i++){

						var checkbox = document.createElement('input');
						checkbox.setAttribute('type', 'checkbox');
						checkbox.className = 'checkbox-item';
						var label = document.createElement('label');
						label.className = 'answer-item';
						label.appendChild(checkbox);
						var textNode = document.createTextNode('Вариант ответа №'+(i+1));
						label.appendChild(textNode);
						form.appendChild(label);
					};
			};
		},
		addButton: function() {
			var button = document.createElement('button');
			button.innerHTML = 'Проверить мои результаты';
			button.className = 'myButton';
			document.body.lastElementChild.appendChild(button);
		},
	};
	createDom.addConteiner();
	createDom.addtitle('h1');
	createDom.addForm(3,3);
	createDom.addButton();
	})();