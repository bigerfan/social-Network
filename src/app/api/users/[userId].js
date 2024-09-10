import { connectToDB } from '../../../../lib/utils';
import { User } from '../../../../lib/models';

export async function GET(req, { params }) {
    await connectToDB();

    try {
        const user = await User.findById(params.userId);
        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), {
                status: 404,
            });
        }
        return new Response(JSON.stringify(user), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch user' }), {
            status: 500,
        });
    }
}
