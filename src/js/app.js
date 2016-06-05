import '../css/style.css';
import Person from './person';

class Friend extends Person{
	constructor(name){
		super(name);
	}
	callName(){
		alert(this.name);
		console.log(`Hello ${this.name}`);
	}
}

var friend = new Friend('Ryo');

friend.callName();

let custom = {};

import Tbody from './tbody';

custom.tbody01 = new Tbody('tbody01');
custom.tbody02 = new Tbody('tbody02');
custom.tbody03 = new Tbody('tbody03');

let dummyRow = document.createElement('tr');
dummyRow.innerHTML = '<td>hoge</td><td>fuga</td><td>piyo</td>';

custom.dummyRow = dummyRow;


window.document.custom = custom;
