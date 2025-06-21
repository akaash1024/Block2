// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.5;
//             if (success) {
//                 resolve("Data fetched successfully");
//             } else {
//                 reject("Failed to fetch data");
//             }
//         }, 1000);
//     });
// }


// getData()
//     .then((data) => {
//         console.log("Resolved:", data);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });



getUser(function (user) {
    getPosts(user.id, function (posts) {
        getComments(posts[0], function (comments) {
            console.log(comments);
        });
    });
});


getUser()
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0]))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));
