function like(postId) {
    const likeCount = document.getElementById(`likes-count-${postId}`);
    const likeButton = document.getElementById(`like-button-${postId}`);
  
    // fetch posle request
    fetch(`/like_post/${postId}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        likeCount.innerHTML = data["likes"];
        if (data["liked"] === true) {
          likeButton.className = "fa-solid fa-thumbs-up";
        } else {
          likeButton.className = "fa-regular fa-thumbs-up";
        }
      })
      .catch((e) => alert("Příspěvek se nepodařilo olikovat."));
  }

  function dislike(postId) {
    const dislikeCount = document.getElementById(`dislikes-count-${postId}`);
    const dislikeButton = document.getElementById(`dislike-button-${postId}`);
  
    // fetch posle request
    fetch(`/dislike_post/${postId}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        dislikeCount.innerHTML = data["dislikes"];
        if (data["disliked"] === true) {
          dislikeButton.className = "fa-solid fa-thumbs-down";
        } else {
          dislikeButton.className = "fa-regular fa-thumbs-down";
        }
      })
      .catch((e) => alert("Příspěvek se nepodařilo olikovat."));
  }




  var button = document.getElementById('myButton');
  button.innerHTML = 'Click me';