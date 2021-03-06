import * as shortid from 'shortid';

export class SleepData {
	id:string;
	loggedAt:Date;

	constructor() {
		//Assign a random ID
		this.id = shortid();
		this.loggedAt = new Date();
	}

	summaryString():string {
		return 'Unknown sleep data';
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
