/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZ0a2I1cnZOdnFwNXhvZUgvYnZPU295UGxHUFZSZDRxazVMUEZMZTduZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBPL2F4bGI1N1ZKZkZQc1h5Y3AzLzQ2dDExN3U2Y2UvMHQxVEtObndpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyS29RY1AwZVV2bHFqV3BMUzhMMmpRUXJQU2M1dWZ3eThqajl4RStKTm4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZStVLzhnNGsrd3RrVnk0bXc4L0I5UmpYcG9YNCtnZ0FaaS9HYXBRQTNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJa3lUQ3BhWEoyazVWUERmckF6aUptRWRNZjcybEZNQUJsamYza2xOMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNUNHZPZ1dFbk5LeTYwWnEyTDVpTXo3aU5qRFZ1NURNbVFWK2FNMTBqd289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUpTNFZxQXJUMmhtcXU0R01qS1ZWTGZaSUYyajg5K2xkUHRyMSszdUpIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGhHUklNcWxMYmJ6VlhzS1NOZ0NKNGJvTXpuTzhDSWhhZ29SZDMxNzkwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMTzFrcXBqUC9TdEdSQ2hiT2xBa2Fram5mYnk2Z3NrRzBkMGdXM0RkRVZSN3R6aXJLa1ZFRVJ2LzN6ek56MVAvd0t5Nk1RaEE4YTRicElPcEpjWGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJJRVRRenViWG8xL2VQTC9YdHV6ZGNYMU9iKzdCbyswdElFcHpnL2RKWVYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfLWJnVUdrdlFHVzdRSmFRY28xNGJ3IiwicGhvbmVJZCI6ImRjMmE0NDMxLWJiYjItNDA0Zi04NDcwLTNlZjc2ZDI2YTc1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkeitwSjhaeU5kTTU5a2E4UGFaWUJHa2NTT3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVpEa1BBc1M3TFJ6SGxMczhSMWFjRDgyVUgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBYODFWSEpaIiwibWUiOnsiaWQiOiIyMzQ3MDQ1NTA1MDk2OjE2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJNkttT0lCRUorWnQ3c0dHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGVkZYZUcrRDZUNmpraFErVjVKTnhraG1hRS96UlR5dHYvOERsaFBIcEhnPSIsImFjY291bnRTaWduYXR1cmUiOiJJTkt3YTBhQkpHLzJWSVRvRjJ4TmhnRHVhTVhKR3c1ZHBSRVNucWREVWJCbXA1dFh4TDZwbEF0OHFMUlVicEdQbkxRZEdlNk1obk9vc2ZBeCtrb1BDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU2NYaHdJQ0liUVAxYUJKbHl4Q1FYNFo5WlVsTW5QUGFNNEtwbVN4TkYxRVFrbnduZEIzMHg5T2xsNVlLWTRYdHpvWWtIcTdvb0dDOUIxbkd1TFZyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ1NTA1MDk2OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJWUlYzaHZnK2srbzVJVVBsZVNUY1pJWm1oUDgwVThyYi8vQTVZVHg2UjQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUyNDkwNjl9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'Lordkay';
const packname = process.env.PACKNAME || 'manjakay 🤖';
const dev = process.env.DEV || '2347045505096';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'MANJAKAY';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'false';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || '';

const antitag = process.env.ANTITAG || 'false';
const antidelete = process.env.ANTIDELETE || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
