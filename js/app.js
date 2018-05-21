document.addEventListener('DOMContentLoaded', () => {
  console.dir("here we go");

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormEntered);

  });

  const handleFormEntered = function(event){
    event.preventDefault();
    const formResult = document.querySelector('#form-result');
    formResult.textContent = `| Title: ${this.title.value} | Author: ${this.author.value} | Category: ${this.category.value} | Genre: ${this.genre.value}`;
  };
