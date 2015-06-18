//Script that contains all the objects used in Nemi

function calendarObject(id, name){
	this.id 	= 	id;
	this.name 	= 	name;
}

function EventIdObject(id, summary, date, description){
	this.id				=	id;
	this.summary		=	summary;
	this.date			=	date;
	this.description	=	description;
		
}

function EventObject(summary, date, description){
	this.summary		=	summary;
	this.date			=	date;
	this.description	=	description;
		
}

function EventDateObject(start, end){
	this.start		=	start;
	this.end		=	end;
}

function StartObject(date, time){
	this.date 	=	date;
	this.time 	=	time;
}

function EndObject(date, time){
	this.date 	=	date;
	this.time 	=	time;
}

function DescriptionObject(identifier, tag, usage, parameters){
	this.identifier	=	identifier;
	this.tag		=	tag;
	this.usage		= 	usage;
	this.parameters	=	parameters;
}

function TextParametersObject(text){
	this.text	=	text;
}

function EmailParametersObject(email, icon, title, body){
	this.email 	=	email;
	this.icon	=	icon;
	this.title	=	title;
	this.body	=	body;
}

function PhoneParametersObject(number, type, icon){
	this.number	=	number;
	this.type	=	type;
	this.icon	=	icon;
}

function UrlParametersObject(url, type, icon){
	this.url	=	url;
	this.type	=	type;
	this.icon	=	icon;
}