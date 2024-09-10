import { PostGallery } from "@/components/postGallery"
import { UserPageC } from "@/components/user"
import { getUserPosts } from "@/lib/actions"
import { validateAuthSession } from "@/lib/lucia"
import Image from "next/image"
import { redirect } from "next/navigation"

const ClientPage = async () => {

    const user = await validateAuthSession()
    if (!user) {
        redirect('/login')
    }

    const postsIds = user.activity

    const posts = await getUserPosts(postsIds)

    return (
        <UserPageC user={user} posts={posts} role={'client'}/>
    )
}

export default ClientPage