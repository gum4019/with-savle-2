import client from 'libs/prisma';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { params } = req.body;
    const results = await client.voteComment.create({
      data: {
        text: params.text,
        voteId: parseInt(params.id),
      },
    });
    if (results) {
      res.json({
        success: true,
        results,
      });
    } else {
      res.json({
        success: false,
      });
    }
  }
}

export default handler;
