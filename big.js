var names=new Array();
names[0]="zain";
names[1]="Ali";
names[2]="Jen";
names[3]="jason";
names[4]="Jao";
names[5]="zaib";
names[6]="hassan";
names[7]="lara";
names[8]="Bilal";
names[9]="john";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}