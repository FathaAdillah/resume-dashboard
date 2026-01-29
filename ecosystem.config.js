module.exports = {
  apps: [{
    name: "resume-dashboard",
    cwd: "/home/ubuntu/public/resume-dashboard",
    script: "npm",
    args: "start -- -p 3002",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: 3002,

      // Disable Next.js telemetry yang bisa spawn process
      NEXT_TELEMETRY_DISABLED: "1",

      // Force single-threaded Node.js
      UV_THREADPOOL_SIZE: "1",

      // Node options untuk memory limit
      NODE_OPTIONS: "--max-old-space-size=200"
    },
    autorestart: true,
    max_memory_restart: "250M",

    // Kill timeout untuk ensure clean shutdown
    kill_timeout: 3000,

    // Wait ready untuk pastikan app siap
    wait_ready: true,
    listen_timeout: 10000
  }]
}