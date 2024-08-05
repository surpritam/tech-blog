document.addEventListener('DOMContentLoaded', () => {
  const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post.');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else if (response.status === 401) {
        document.location.replace('/login');
      } else {
        alert('Failed to delete post.');
      }
    }
  };

  const newPostForm = document.querySelector('#new-post-form');
  if (newPostForm) {
    newPostForm.addEventListener('submit', newPostHandler);
  }

  const postList = document.querySelector('.post-list');
  if (postList) {
    postList.addEventListener('click', delButtonHandler);
  }
});
