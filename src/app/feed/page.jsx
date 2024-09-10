'use client'

import { FeedPosts } from '@/components/FeedPosts';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Feed = () => {

  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])
  const [next, setNext] = useState(true)
  const [loading, setLoading] = useState(false)
  const [Users, setUsers] = useState([])

  useEffect(
    () => {
      const fetchPosts = async () => {
        if (!next || loading) return
        try {

          setLoading(true)


          const res = await axios.get(`http://localhost:3000/api/posts?page=${page}&limit=5`)
          const posts = res.data.posts

          const AllUsers = (await axios.get('http://localhost:3000/api/users?page=1&limit=200')).data.users

          const fetchedUsers = posts.map(post => AllUsers.find(user => user._id === post.creator));

          setUsers(prevUsers => [...prevUsers, ...fetchedUsers])

          if (!res.data || res.status !== 200) {
            throw new Error(res.status)
          }

          console.log(
           res.data.pagination.totalPages
          );

          setPosts(prevPosts => [...prevPosts, ...posts])


          if (page >= res.data.pagination.totalPages) {
            setNext(false)
            setLoading(false)
          }
        } catch (error) {
          throw new Error(error)
        } finally {
          setLoading(false)
        }
      }

      fetchPosts()
    }
    , [page, next])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 101 && next && !loading) {
        setPage((prevPage) => prevPage + 1)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [next, loading]);


  return (
    <>
      <FeedPosts posts={posts} users={Users} loading={loading} next={next} textForTop={'Last Posts'} />
    </>
  )
}

export default Feed