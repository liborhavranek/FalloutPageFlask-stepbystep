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