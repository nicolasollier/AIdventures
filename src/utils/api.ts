import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const openai = axios.create({
  baseURL: OPENAI_API_URL,
  headers: {
    'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});