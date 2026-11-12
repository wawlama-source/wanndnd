import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base muss zum Repo-Namen passen: https://<user>.github.io/wanndnd/
export default defineConfig({
  base: '/wanndnd/',
  plugins: [react()],
})
