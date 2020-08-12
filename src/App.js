import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import PostForm from './comp/PostForm.js'
import AsyncPosts from './comp/AsyncPosts.js'
import Posts from './comp/Posts.js'

export default function App () {
	return (
	<div className="container">
		<Row>
			<Col>
				<PostForm />
			</Col>
		</Row>
		<Row>
			<Col>
				<h2>Синхронные посты</h2>
				<Posts posts={[]} />
			</Col>
			<Col>
				<h2>Асинхронные посты</h2>
				<AsyncPosts posts={[]} />
			</Col>
		</Row>
	</div>
	)
}
