import React from 'react';
import PostItem from './PostItem.js'

export default ({posts}) => {
	if (!posts.length) {
		return <button className="btn btn-primary">Загрузить посты</button>
	}
		return posts.map(post => <PostItem post={post} key={post} />)
}