export default {
  apps: [{
    name: 'momentum-frontend',
    script: 'npm',
    args: 'run dev -- --host 0.0.0.0 --port 3000',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
      HOST: '0.0.0.0'
    },
    watch: false,
    max_memory_restart: '1G',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};