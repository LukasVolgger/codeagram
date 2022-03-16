function generateCurrentUserProfileHTMl() {
    return `
		<button class="user-profile-container profile-btn" onclick="noFunction()">
			<img class="user-profile-img user-profile-img-main" src="${currentUser[0].profilePicture}" alt="Current User Profile">
		</button>
		<button class="profile-btn username" onclick="noFunction()">${currentUser[0].userName}</button>
		<button class="btns" onclick="noFunction()">Change User</button>
	`;
}

function generateUserProfilesHTML(i) {
    return `
		<div class="user-profile">
			<button class="user-profile-container profile-btn" onclick="noFunction()">
				<img class="user-profile-img user-profile-img-main" src="${userProfiles[i].profilePicture}" alt="${userProfiles[i].userName}">
			</button>
			<button class="user-name-small profile-btn" onclick="noFunction()">${userProfiles[i].userName}</button>
		</div>
	`;
}

function generateSuggestedUserProfilesHTML(i) {
    return `
		<div class="suggested-user-profile">
			<button class="user-profile-container profile-btn" onclick="noFunction()">
				<img class="user-profile-img" src="${userProfiles[i].profilePicture}" alt="${userProfiles[i].userName}">
			</button>
			<button class="profile-btn username" onclick="noFunction()">${userProfiles[i].userName}</button>
            <button class="btns" onclick="noFunction()">Follow</button>
		</div>
	`;
}

function generatePostsHTML(i) {
    return `
		<div id="post-${i}" class="post">
			<div class="post-header">
				<button class="user-profile-container profile-btn" onclick="noFunction()">
					<img class="user-profile-img" src="${posts[i].userProfilePicture}" alt="${posts[i].userName}">
				</button>
				<div class="post-info">
					<button class="username profile-btn" onclick="noFunction()">${posts[i].userName}</button>
					<span class="post-title">${posts[i].title}</span>
				</div>
				<button class="post-menu-btn btns icon-btn" onclick="noFunction()"><img src="./img/icons/menu.svg" alt="Menü"></button>
			</div>
			<img class="post-image" src="${posts[i].image}">
			<div class="post-nav">
				<div class="post-nav-icons-left">
					<button class="btns icon-btn" onclick="noFunction()"><img class="icons" src="./img/icons/heart.svg" alt="Like"></button>
					<button class="btns icon-btn" onclick="noFunction()"><img class="icons" src="./img/icons/comment.svg" alt="Add comment"></button>
					<button class="btns icon-btn" onclick="noFunction()"><img class="icons" src="./img/icons/paper_plane.svg" alt="Share"></button>
				</div>
				<button class="btns icon-btn" onclick="noFunction()"><img class="icons" src="./img/icons/bookmark.svg" alt="Bookmark"></button>
			</div>
			<div class="post-likes">
				<span>${posts[i].likes} Likes</span>
			</div>
			<div id="post-demo-comments-${i}" class="post-demo-comments d-none"></div>
			<div id="post-comments-${i}" class="post-comments d-none"></div>
			<form class="post-comment-form" onsubmit="addComment(${i}); return false;">
				<div class="post-comment-input-container">
					<button type="button" class="btns icon-btn" onclick="noFunction()"><img class="icons" src="./img/icons/smiley.svg" alt="Emojis"></button>
					<input type="text" placeholder="Add comment" id="post-comment-input-${i}" class="post-comment-input" required>
				</div>
				<button class="btns" type="submit">Send</button>
			</form>
		</div>
	`;
}