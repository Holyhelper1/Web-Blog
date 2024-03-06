export const transformPost = (dbpost) => ({
	id: dbpost.id,
	title: dbpost.title,
	content: dbpost.content,
	imageUrl: dbpost.image_url,
	publishedAt: dbpost.published_at
})


