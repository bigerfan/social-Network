import Image from "next/image"
import Link from "next/link"
import { PostCreator } from "./PostCreator"

export const SearchUsers = ({ users, loader,char }) => {
    return (
        <ul className='-4'>
            {users.map(user =>
                <li className='my-4'>
                    <PostCreator user={user} />
                </li>
            )}
            {loader && <div className='insideLoader'></div>}
            {users.length < 1 && char.length > 3 && <p className='text-slate-200 text-pretty'>user Not Found :(</p>}
        </ul>
    )
}
