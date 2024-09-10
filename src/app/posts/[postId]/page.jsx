import { PostCreator } from "@/components/PostCreator"
import { SinglePost } from "@/components/SinglePost"
import { Post, User } from "@/lib/models"

const UserSinglePost =async ({ params }) => {

  const postId = params.postId

  const post = await Post.findById(postId)
  const user = await User.findById(post.creator)

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col gap-3 border-b-2 px-2 py-2 pb-6 w-[80%] md:w-[60%] rounded-sm border-[var(--bgsoft)]">
        <PostCreator user={user} />
        <SinglePost post={post} />
      </div>
    </div>
  )
}

export default UserSinglePost