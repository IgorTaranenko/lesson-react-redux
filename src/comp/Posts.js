import React from 'react';
import {connect} from 'react-redux'
import PostItem from './PostItem.js'

const Posts = ({posts}) => {
	if (!posts.length) {
		return <p>Постов пока нет!</p>
	}
	return posts.map(post => <PostItem post={post} key={post} />
	)
}

export default Posts