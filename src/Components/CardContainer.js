import { useEffect, useState } from "react";

export default function CardContainer() {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(res => res.json())
            .then(data => setBlogPosts(data))
            .catch(err => console.error(err))
    }, [])

    const handleFormSubmit = evt => {
        evt.preventDefault()
        const formData = {}
        formData.title = evt.target.title.value
        formData.content = evt.target.content.value

        fetch('htpp://localhost:5001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(cleanData => setBlogPosts(cleanData))
            .catch(err => console.error(err))

    }
    return (
		<>
			<form action='' onSubmit={e => handleFormSubmit(e)}>
				<label htmlFor=''>
					<input type='text' name='title' id='' />
				</label>
				<label htmlFor=''>
					<input type='text' name='content' id='' />
				</label>
				<button type='submit'>Add BlogPost</button>
			</form>

			<div className='cardContainer'>
				{blogPosts.map((singlePost, index) => {
					return (
						<div className='singleCard' key={singlePost._id}>
							<img src={`https://source.unsplash.com/random/${index}`} alt='' srcSet='' />
							<h2>title: {singlePost.title} </h2>
							<p>{singlePost.content}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}