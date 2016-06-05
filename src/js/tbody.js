class Tbody {
	constructor(id){
		this.id = id;
		this.rows = [];
		console.log('object created!');
	}
	appendRow(obj){
		this.rows.push(obj);
	}
	removeRow(obj){
		for(let i = 0, len = this.rows.length; i<len; i++){
			if(this.rows[i] === obj){
				this.rows.splice(i,1);
				return true;
			}
		}
		return false;
	}
	replaceRow(obj){
		for(let i = 0, len = this.rows.length; i<len; i++){
			if(this.rows[i] === obj){
				this.rows.splice(i,1,obj);
				return true;
			}
		}
		return false;
	}
}
export default Tbody;
