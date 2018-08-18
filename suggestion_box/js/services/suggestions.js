app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [

            {
                title: 'Free Pizza at club meetings',
                upvotes: 15,
                id: 1,
                comments: [{
                        body: 'i cant wait',
                        upvotes: 1
                    },
                    {
                        body: 'i can eat two',
                        upvotes: 3
                    }
                ],
            },
            {
                title: 'End all club emails with Jimmy Kemmel jokes',
                upvotes: 10,
                id: 2,
                comments: [{
                        body: 'nirvana the best',
                        upvotes: 3
                    },
                    {
                        body: 'kurt, chris, david',
                        upvotes: 2
                    }
                ],
            },
            {
                title: 'Retrofit water fountain with Canadin Beer',
                upvotes: 25,
                id: 3,
                comments: [{
                        body: 'money is everything',
                        upvotes: 3
                    },
                    {
                        body: 'not money isn\'t everything',
                        upvotes: 2
                    }
                ],
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 19,
                id: 4,
                comments: [

                    {
                        body: 'Jovi Jovi Jovi ',
                        upvotes: 3
                    },
                    {
                        body: 'not a bad idea !!',
                        upvotes: 2
                    }
                ],
            },
            {
                title: 'share love and food in the end of all club meetings',
                upvotes: 7,
                id: 5,
                comments: [{
                        body: 'food food every where ',
                        upvotes: 3
                    },
                    {
                        body: 'food is the first option when compared to love',
                        upvotes: 2
                    }
                ],
            }

        ]
    };
    return demoSuggestions;
}]);