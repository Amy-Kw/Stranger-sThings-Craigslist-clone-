const handleAddNewPost = async () => {
    try {
     const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {"Content-Type": "application/json",
      body: JSON.stringify({})
    },
}),
}
}

const result = await response.json();
console.log(result);