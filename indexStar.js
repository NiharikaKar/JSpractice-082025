
// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

// Funtion to update rating
function str(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

let commentContainer = 
    document.getElementById("comment-container");

function createInputBox() {
    let div = document.createElement("div");

    div.setAttribute("class", "comment-details");

    div.innerHTML += `<input type="text"
                             placeholder="add text here"
                             class="input" />
                      <button class="btn submit">
                           Submit
                      </button>`;
    return div;
}

function addReply(text) {
    let div = document.createElement("div");

    div.setAttribute("class", "all-comment");
    
    div.innerHTML += `<div class="card">
                      <span class="text">
                      ${text}
                      </span>
                      <span id="reply" class="reply">
                      Add Reply
                      </span></div>`;
    return div;
}

commentContainer.addEventListener("click", function (e) {
    let replyClicked =
        e.target.classList.contains("reply");
    let submitClicked =
        e.target.classList.contains("submit");
    let closestCard =
        e.target.closest(".all-comment");

    if (replyClicked) {
        closestCard.appendChild(createInputBox());
    }

    if (submitClicked) {
        const commentDetails =
            e.target.closest(".comment-details");
        if (commentDetails.children[0].value) {
            closestCard.appendChild(
                addReply(commentDetails.children[0].value));
            commentDetails.remove();
        }
    }
});