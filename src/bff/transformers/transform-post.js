export const transformPost = (dbpost) => ({
	id: dbpost.id,
	title: dbpost.title,
	content: dbpost.content,
	imageUrl: dbpost.image_url,
	publeshedAt: dbpost.published_at
})


