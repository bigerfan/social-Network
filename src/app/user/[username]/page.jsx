import { PostGallery } from "@/components/postGallery";
import { UserPageC } from "@/components/user";
import { getUserPosts } from "@/lib/actions";
import { validateAuthSession } from "@/lib/lucia";
import { User } from "@/lib/models";
import Image from "next/image";
import { redirect } from "next/navigation";

const UserPage = async ({ params }) => {

    const valid = await validateAuthSession()    

    if(valid.username == params.username){
        redirect('/user')
    }

    const user = await User.findOne({ username: params.username })
    const posts = await getUserPosts(user.activity)
    console.log(posts);
    

    return (
        <UserPageC user={user} posts={posts}/>
    )
}

export default UserPage