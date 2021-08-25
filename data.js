module.exports.users = [
    {
        'firstname': "James",
        'lastname': "Bond",
        'email': "james.bond@gmail.com",
        'password': "b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536"  
    },
    {
        'firstname': "Tony",
        'lastname': "Stark",
        'email': "starkrulz@gmail.com",
        'password': "a836ebba36776b21dd0f5cdca497bff65c5bdfc8411cfbfe0111f27bde1c1894"  
    },
    {
        'firstname': "Ali",
        'lastname': "G",
        'email': "nameisnotborat@gmail.com",
        'password': "3b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c"  
    }
]

module.exports.schedules = [
    {
        'user_id': 0,
        'day': 1,
        'start_at': "2PM",
        'end_at': "4PM"
    },
    {
        'user_id': 0,
        'day': 2,
        'start_at': "2PM",
        'end_at': "4PM"
    },
    {
        'user_id': 0,
        'day': 3,
        'start_at': "2PM",
        'end_at': "4PM"
    },
    {
        'user_id': 2,
        'day': 5,
        'start_at': "8AM",
        'end_at': "6PM"
    }
]


module.exports.posts = [
    {   
        'id':0,
        'user_id': 0,
        'post': "Here is my first post"
    },
    {
        'id':1,
        'post': "Today I bought a coffee, lockdown sucks."
    },
    {   'id':2,
        'user_id': 0,
        'post': "This is probably my last post, this blog site is not very good."
    },
    {   'id':3,
        'user_id': 2,
        'post': "Had leftover pizza for breakfast."
    }
]