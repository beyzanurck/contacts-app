import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.js'],
    testMatch: ['./src/tests/**/*.test.jsx'],
    globals: true
  }
})
// client/src/App.jsx
// client/src/tests/About.test.jsx
// client/src/components/About.jsx


