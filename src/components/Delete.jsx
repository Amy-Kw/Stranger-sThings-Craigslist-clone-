export async function deletePost (id) {
    console.log("do you see this");

    try {
        const response = await fetch(`${POST_URL}`/id), {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
            Authurization:
        },
    }
    const result = await response.json();
    return result;
} catch (error) {
    console.error(error);
}
}