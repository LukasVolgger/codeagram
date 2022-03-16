let currentUser = [{
    'userName': 'lukas',
    'profilePicture': './img/users/lukas_volgger.jpg'
}];

let userProfiles = [

    {
        'userName': 'anastasiya',
        'profilePicture': './img/users/anastasiya_lobanovskaya.jpg'
    },

    {
        'userName': 'daniel',
        'profilePicture': './img/users/daniel_xavier.jpg'
    },

    {
        'userName': 'garcia',
        'profilePicture': './img/users/khalid_garcia.jpg'
    },

    {
        'userName': 'spencer',
        'profilePicture': './img/users/spencer_selover.jpg'
    },

    {
        'userName': 'asim',
        'profilePicture': './img/users/asim_alnamat.jpg'
    },

    {
        'userName': 'mariana',
        'profilePicture': './img/users/mariana_lina.jpg'
    }

];

let posts = [

    {
        'userName': 'spencer',
        'userProfilePicture': 'img/users/spencer_selover.jpg',
        'title': 'The TRUE first Web-Designer of the world!',
        'image': './img/posts/webdesign.jpg',
        'likes': 5.687,
        'comments': []
    },

    {
        'userName': 'garcia',
        'userProfilePicture': 'img/users/khalid_garcia.jpg',
        'title': 'I\'m afraid of learning python >.<',
        'image': './img/posts/python.jpg',
        'likes': 7.543,
        'comments': []
    },

    {
        'userName': 'daniel',
        'userProfilePicture': 'img/users/daniel_xavier.jpg',
        'title': 'Java development in progress...',
        'image': './img/posts/java.jpg',
        'likes': 8.183,
        'comments': []
    },

    {
        'userName': 'anastasiya',
        'userProfilePicture': 'img/users/anastasiya_lobanovskaya.jpg',
        'title': 'At the beginning, learning to code feels like...',
        'image': './img/posts/programming.jpg',
        'likes': 11.927,
        'comments': []
    }

];

function render() {
    renderUserProfiles();
    renderPosts();
    renderComments();
    renderCurrentUserProfile();
    renderDemoComments();
}

function renderUserProfiles() {
    // Get all containers and clear them
    let container1 = document.getElementById('profiles-container');
    let container2 = document.getElementById('suggested-profiles-container');
    container1.innerHTML = '';
    container2.innerHTML = '';

    // Iterate through userProfiles object and generate all user profiles
    // Limited by 5	to fit in containers
    for (let i = 0; i < 6; i++) {
        container1.innerHTML += generateUserProfilesHTML(i);
        container2.innerHTML += generateSuggestedUserProfilesHTML(i);
    }
}

function renderPosts() {
    // Get container and clear it
    let container = document.getElementById('posts-container');
    container.innerHTML = '';

    // Iterate through posts object and generate each of it
    for (let i = 0; i < posts.length; i++) {
        container.innerHTML += generatePostsHTML(i);
    }
}

function renderComments() {
    // Iterate through posts object
    for (let i = 0; i < posts.length; i++) {

        // Get container and clear it
        let container = document.getElementById(`post-comments-${i}`);
        container.innerHTML = '';

        // Iterate through comments in posts object
        for (let j = 0; j < posts[i].comments.length; j++) {

            // Check if posts has comments
            if (posts[i].comments[j].length != 0) {

                // Show comments container
                container.classList.remove('d-none');

                // Add comments
                container.innerHTML += `				
                    <span class="user-comment"><b>${currentUser[0].userName}:</b> ${posts[i].comments[j]}</span>
                `;
            }
        }
    }
}

// DEACTIVATE DEMO COMMENTS
//--------------------------
// Comment or delete the whole function if these are not wanted
// Delete 'margin-top: 8px' from class '.post-comment-form'
// Add 'padding-bottom: 8px' on class '.post-comments'
function renderDemoComments() {
    let demoComment1 = document.getElementById(`post-demo-comments-0`);
    let demoComment2 = document.getElementById(`post-demo-comments-1`);
    let demoComment3 = document.getElementById(`post-demo-comments-2`);
    let demoComment4 = document.getElementById(`post-demo-comments-3`);
    demoComment1.classList.remove('d-none');
    demoComment2.classList.remove('d-none');
    demoComment3.classList.remove('d-none');
    demoComment4.classList.remove('d-none');

    // Pre-defined comments (Demo only)
    demoComment1.innerHTML += `
		<span class="user-comment"><b>${userProfiles[0].userName}: </b>Iiiiieeeewwww o.o</span>
	`;
    demoComment2.innerHTML += `
		<span class="user-comment"><b>${userProfiles[4].userName}: </b>Suggested solution: If you give him a name and pet him, he's definitely cute.</span>
	`;
    demoComment2.innerHTML += `
		<span class="user-comment"><b>${userProfiles[2].userName}: </b>No way! O.O</span>
	`;
    demoComment3.innerHTML += `
		<span class="user-comment"><b>${userProfiles[5].userName}: </b>Every day the same with you >.<</span>
	`;
    demoComment4.innerHTML += `
		<span class="user-comment"><b>${userProfiles[3].userName}: </b>There must be an error in the matrix...</span>
	`;
    demoComment4.innerHTML += `
		<span class="user-comment"><b>${userProfiles[1].userName}: </b>Maybe you are the chosen one!</span>
	`;
}

function renderCurrentUserProfile() {
    let container = document.getElementById('current-user-profile');
    container.innerHTML = '';
    container.innerHTML += generateCurrentUserProfileHTMl();

    document.getElementById('current-user-profile-header').src = `${currentUser[0].profilePicture}`;
}

function addComment(i) {
    // Get the value of the input field in the post
    let comment = document.getElementById(`post-comment-input-${i}`).value;

    // Push comment to object
    posts[i].comments.push(comment);

    // Clear input after adding comment to object
    document.getElementById(`post-comment-input-${i}`).value = '';

    renderComments();
}

function noFunction() {
    alert('Demo website, no function!');
}