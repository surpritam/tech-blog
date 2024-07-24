document.addEventListener('DOMContentLoaded', () => {
    const editPostHandler = async (event) => {
      event.preventDefault();
  
      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();
      const id = window.location.toString().split('/').pop();
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post.');
        }
      }
    };
  
    document
      .querySelector('#edit-post-form')
      ?.addEventListener('submit', editPostHandler);
  });
  