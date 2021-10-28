const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  const database_id = process.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id,
  });
  const results = response.results;

  res.status(200).json({ results })
}
