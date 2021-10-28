import enablePublicAccess from 'cors';
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  try {

    await enablePublicAccess(req, res);

    const database_id = process.env.NOTION_DATABASE_ID
    const response = await notion.databases.query({
      database_id,
    });
    const results = response.results;
    const length = results.length;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.end(JSON.stringify({ length, data: results}));
  } catch (error) {
    res.statusCode = 500;
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    );
  }
}
