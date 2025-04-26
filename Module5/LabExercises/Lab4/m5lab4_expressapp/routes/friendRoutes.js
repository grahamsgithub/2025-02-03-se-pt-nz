// Module 5 Lab 4

const express = require("express");
const router = express.Router();
const friends = require('../models/friends')


// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating


// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    console.log(req.query);
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter; // Get the 'letter' query parameter
    let matchingFriends = [...friends];

    // Filter by gender if the 'gender' query parameter is provided
    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

    // Filter by starting letter if the 'letter' query parameter is provided
    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }

    if (matchingFriends.length > 0) {
        // Return valid data when matches are found
        res.status(200).json(matchingFriends);
    } else {
        // Return an error response when there are no matches
        res.status(404).json({ error: "No friends matching the given criteria" });
    }
});

// NB to test the above filter endpoint, you can use the following URLs:
// http://localhost:3000/friends/filter?gender=female&letter=R
// should return 1 match: 'Rachael'
// http://localhost:3000/friends/filter?gender=female&letter=A
// should return 0 matches: 'No friends matching the given criteria'

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    console.log(req.headers);

    // Extract only the user-agent, content-type, and accept headers
    const headerInfo = {
        "user-agent": req.headers['user-agent'],
        "content-type": req.headers['content-type'],
        "accept": req.headers['accept']
    };

    // Return the extracted header information as JSON
    res.json(headerInfo);
    console.log(headerInfo); // Log the header information to the console
});

// NB the above code can be browser tested using the following URL:
// http://localhost:3000/friends/info
// but it will only return user-agent and accept not content-type
// because the browser does not send a content-type header in a GET request
// (it only sends this in POST and PUT requests).
// Mirza: Is this correct?


// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', (req, res) => {
    console.log(req.params);
    let friendId = parseInt(req.params.id); // Convert the 'id' parameter to an integer

    // Find the friend with the matching ID
    let matchingFriend = friends.find(friend => friend.id === friendId);

    if (matchingFriend) {
        // Return the matched friend if found
        res.status(200).json(matchingFriend);
    } else {
        // Return a 404 error if no friend is found with the given ID
        res.status(404).json({ error: `No friend found with ID ${friendId}` });
    }
});

// the above code can be browser tested using the following URL:
// http://localhost:3000/friends/3
// then just change out the number to test for other friends

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
})

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    let friendId = parseInt(req.params.id); // Convert the 'id' parameter to an integer
    let updatedFriend = req.body; // Get the updated friend data from the request body

    // Find the index of the friend with the matching ID
    let friendIndex = friends.findIndex(friend => friend.id === friendId);

    if (friendIndex !== -1) {
        // Update the friend's data
        friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };

        // Return the updated friend object
        res.status(200).json(friends[friendIndex]);
    } else {
        // Return a 404 error if no friend is found with the given ID
        res.status(404).json({ error: `No friend found with ID ${friendId}` });
    }
});

// the above code can be browser tested using the previous syntax:
// e.g. http://localhost:3000/friends/3
// but only after using postman or thunderclient (used here)
// to sent a PUT request with a body containing the updated data
// in this case have updated the name in id 3 from 'Rachael' to 
// 'Amber NEW'

module.exports = router;