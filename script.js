document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to number
  const ageNumber = Number(age);

  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNumber > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4 seconds delay
  });

  votePromise
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
