//Script that contains all the objects used in Nemi

function calendarObject(id, name){
	this.id 	= 	id;
	this.name 	= 	name;
}

function EventObject(id, summary, date, location, description){
	this.id				=	id;
	this.summary		=	summary;
	this.date			=	date;
	this.location		=	location;
	this.description	=	description;
		
}

function EventDateObject(start, end){
	this.start	=	start;
	this.end	=	end;
}

function StartObject(date, time){
	this.date 	=	date;
	this.time 	=	time;
}
 
function EndObject(date, time){
	this.date 	=	date;
	this.time 	=	time;
}

function DescriptionObject(identifier, tag, parameters){
	this.identifier	=	identifier;
	this.tag		=	tag;
	this.parameters	=	parameters;
}
  
function TextParametersObject(text){
	this.text	=	text;
}

function ImageParametersObject(url, width, height, scale){
	this.url	=	url;
	this.width	=	width;
	this.height	=	height;
	this.scale	=	scale;
}
 
function EmailParametersObject(usage, email, title, body, icon){
	this.usage	= 	usage;
	this.email 	=	email;
	this.title	=	title;
	this.body	=	body;
	this.icon	=	icon;

}

function PhoneParametersObject(usage, number, type, icon){
	this.usage	= 	usage;
	this.number	=	number;
	this.type	=	type;
	this.icon	=	icon;
}

function UrlParametersObject(usage, url, type, icon){
	this.usage	= 	usage;
	this.url	=	url;
	this.type	=	type;
	this.icon	=	icon;
}