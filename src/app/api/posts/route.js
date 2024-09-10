import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/utils';
import { Post } from '@/lib/models';

export async function GET(req) {
    try {
        await connectToDB();

        const { page = 1, limit = 10 } = Object.fromEntries(req.nextUrl.searchParams);

        const pageValue = parseInt(page, 10);
        const limitValue = parseInt(limit, 10);
        const skipValue = (pageValue - 1) * limitValue;

        const posts = await Post.find()
            .sort({createdAt:-1})
            .skip(skipValue)
            .limit(limitValue);

        const totalPosts = await Post.countDocuments();
        const totalPages = Math.ceil(totalPosts / limitValue);

        return NextResponse.json({
            posts,
            pagination: {
                totalPosts,
                totalPages,
                currentPage: pageValue,
                limit: limitValue
            }
        });
    } catch (error) {
        return NextResponse.json({ message: 'Error retrieving posts', error: error.message }, { status: 500 });
    }
}

