const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#article-title').value.trim();
  const author = document.querySelector('#article-author').value.trim();
  const description = document.querySelector('#article-description').value.trim();
  const date = document.querySelector('#article-date');

  if (title && author && description && date) {
    const response = await fetch(`/api/article`, {
      method: 'POST',
      body: JSON.stringify({ title, author, description, date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/article/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete article');
    }
  }
};

document
  .querySelector('.new-article-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.article-list')
  .addEventListener('click', delButtonHandler);
