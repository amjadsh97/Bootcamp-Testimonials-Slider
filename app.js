firstPost = " “ If you want to lay the best foundation possible I’d recommend\n" +
    "            taking this course. The depth the instructors go into is incredible.\n" +
    "            I now feel so confident about starting up as a professional\n" +
    "            developer. ”";
secondPost = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t" +
    " recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";

firstImage = "images/image-john.jpg";
secondImage = "images/image-tanya.jpg";

firstAuthor = "John Tarkpor";
secondAuthor = "Tanya Sinclair";

firstCategory = "UX Engineer";
secondCategory = "Junior Front-end developer";

posts = [firstPost, secondPost];
images = [firstImage, secondImage];
categories = [firstCategory, secondCategory];

function changeFirstLink() {
    document.getElementById("post").innerHTML = firstPost;
    document.getElementById("img--person").src = images[0];
    document.getElementById("author--post").innerHTML = firstAuthor;
    document.getElementById("category").innerHTML = categories[0];
}

function changeSecondLink() {
    document.getElementById("post").innerHTML = secondPost;
    document.getElementById("img--person").src = images[1];
    document.getElementById("author--post").innerHTML = secondAuthor;
    document.getElementById("category").innerHTML = categories[1];
}
