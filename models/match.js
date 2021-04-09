const fs = require('fs');
const path = require('path');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'data.json'
);

const getMatchesFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Match {
	constructor(id, team1, team2, time, score1, userId) {
		this.id = id;
		this.team1 = team1;
		this.team2 = team2;
		this.time = time;
		this.score1 = score1;
		this.userId = userId;
	}

    static getMatchesFromFile (cb) {
        getMatchesFromFile(cb)
    }

	static fetchAll(cb) {
		getMatchesFromFile(cb);
	}

	static findById(id, cb) {
		getMatchesFromFile((matches) => {
			const match = matches.find((m) => m.id === id);
			cb(match);
		});
	}
};
