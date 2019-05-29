module.exports = function main(inputs) {
    var distance = inputs.distance
	var parkTime = inputs.parkTime
	var money 
	switch(true) {
        case distance >0 && distance <= 2: money = 6; break;
		case distance >2 && distance <= 8: money = 6 + (distance - 2) * 0.8; break;
		case distance >8: money = 6 + 6 * 0.8 + (distance - 8) * 0.8 * 1.5; break;
    }
	return Math.round(money + parkTime * 0.25)
};
