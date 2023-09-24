import { io } from 'socket.io-client';

const URL = 'https://api-fofoca.onrender.com';

export const socket = io(URL);
