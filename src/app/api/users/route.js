import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/utils';
import { User } from '@/lib/models';

export async function GET(req) {
    try {
        await connectToDB();

        const { page = 1, limit = 10 } = Object.fromEntries(req.nextUrl.searchParams);

        const pageValue = parseInt(page, 10);
        const limitValue = parseInt(limit, 10);
        const skipValue = (pageValue - 1) * limitValue;

        const users = await User.find()
                                .skip(skipValue)
                                .limit(limitValue);

        const totalUsers = await User.countDocuments();
        const totalPages = Math.ceil(totalUsers / limitValue);

        return NextResponse.json({
            users,
            pagination: {
                totalUsers,
                totalPages,
                currentPage: pageValue,
                limit: limitValue
            }
        });
    } catch (error) {
        return NextResponse.json({ message: 'Error retrieving users', error: error.message }, { status: 500 });
    }
}


