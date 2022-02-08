var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
let rover = {
    direction: "N", 
    y: 0,
    x: 0,
    travelLog: []
};

let turnLeft = (rover) =>{
    if(rover.direction === "N"){
      rover.direction ="W";  
    }
    else if(rover.direction === "S"){
        rover.direction ="E";
    } 
    else if(rover.direction === "E"){
        rover.direction ="N";
    }
    else if (rover.direction === "W"){
        rover.direction ="S";
    }
    console.log(rover);
}
let turnRight = (rover) =>{
    if(rover.direction === "N"){
        rover.direction ="E";  
      }
      else if(rover.direction === "E"){
          rover.direction ="S";
      } 
      else if(rover.direction === "S"){
          rover.direction ="W";
      }
      else if(rover.direction === "W"){
          rover.direction ="N";
      }
      console.log(rover);
}

let moveForward = (rover) =>{
    if(rover.direction === "N"){
        rover.y--;
        
    }
    else if(rover.direction === "S"){
        rover.y++;
        
    }
    else if(rover.direction === "E"){
        rover.x++;
    }
    else if(rover.direction === "W"){
        rover.x--;
    }
    else{
        console.error()
    }
        console.log(rover)
}


let pilotRover = (pilot) =>{
    for(let i = 0; i < pilot.length; i++){
        let travelLog = rover.travelLog;
        if(pilot.charAt(i) === "r"){
           turnRight(rover);
        }
        else if(pilot.charAt(i) === "l"){
            turnLeft(rover);
        }
        else if(pilot.charAt(i) === "f"){
            moveForward(rover);
        }
        else{
            console.log("error")
        }travelLog.push(pilot)
        } 
      
} 
pilotRover("llfflff");