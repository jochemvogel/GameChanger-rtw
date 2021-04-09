const { match } = require('assert');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const Match = require('../models/match')

function getAdmin(req, res) {
	const dataFilePath = './data/data.json';

	if (!fs.existsSync(dataFilePath)) {
		const matches = '';
		res.render('admin/index', {
			matches,
		});
		return;
	}

	let rawData = fs.readFileSync(dataFilePath);

	let matches = JSON.parse(rawData);

	res.render('admin/index', {
		matches,
	});
}

function getAddMatch(req, res) {
	res.render('admin/add-match', {
		id: uuidv4()
	});
}

function postAddMatch(req, res) {
	const dataFilePath = './data/data.json';

	/* Check if file does not exists, yet */
	if (!fs.existsSync(dataFilePath)) {
		fs.appendFile(dataFilePath, '{}', () => {
			console.log('Created new file');
		});
	}

	/* Execute it after the file is created (process.nextTick & setImmediate don't do the trick) */
	setTimeout(() => {
		const dataFile = fs.readFileSync(dataFilePath);

		const data = Array.from(JSON.parse(dataFile));

		data.push(req.body);

		const whatToWrite = JSON.stringify(data, null, 2);
		fs.writeFile('./data/data.json', whatToWrite, (err) => {
			if (err) {
				throw err;
			}
			console.log('Succesfully update data.json');
		});

		res.redirect('/admin');
	}, 10);
}

function getEditMatch(req, res) {
    const matchId = req.params.id;
	Match.findById(matchId, (match) => {
		res.render('admin/edit-match', {
			match,
		});
	});
}

function postEditMatch(req, res) {
    const updatedMatch = req.body;

    const matchId = req.params.id;

    const rawData = fs.readFileSync('./data/data.json');
    const matchArr = Array.from(JSON.parse(rawData));

    const editedMatchIndex = matchArr.findIndex(item => item.id === matchId);

    matchArr.splice(editedMatchIndex, 1)

    matchArr.unshift(updatedMatch)

    const whatToWrite = JSON.stringify(matchArr);

    fs.writeFile('./data/data.json', whatToWrite, (err) => {
        if (err) {
            throw err;
        }
        console.log('Succesfully update data.json');
    });

    res.redirect('/admin');
}

function postRemoveMatch(req, res) {
    const matchId = req.params.id;

    const rawData = fs.readFileSync('./data/data.json');
    const matchArr = Array.from(JSON.parse(rawData));

    const editedMatchIndex = matchArr.findIndex(item => item.id === matchId);

    matchArr.splice(editedMatchIndex, 1)

    const whatToWrite = JSON.stringify(matchArr);

    fs.writeFile('./data/data.json', whatToWrite, (err) => {
        if (err) {
            throw err;
        }
        console.log('Succesfully update data.json');
    });

    res.redirect('/admin');
}

module.exports = { getAdmin, postAddMatch, getAddMatch, getEditMatch, postEditMatch, postRemoveMatch };
