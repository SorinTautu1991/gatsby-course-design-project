import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
);
export default base;
