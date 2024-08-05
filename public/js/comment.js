document.addEventListener('DOMContentLoaded', () => {
  const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_id = window.location.toString().split('/').pop();

    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment.');
      }
    }
  };

  const commentForm = document.querySelector('#new-comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', commentFormHandler);
  }
});
