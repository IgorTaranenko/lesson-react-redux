import React from 'react';
import PostItem from './PostItem.js'

export default ({posts}) => {
	if (!posts.length) {
		return <p>Постов пока нет!</p>
	}
	return posts.map(post => <PostItem post={post} key={post} />
	)
}