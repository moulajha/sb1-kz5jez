module.exports = {
  apps: [{
    name: 'saas-mvp',
    script: 'dist/main.js',
    instances: 1,
    exec_mode: 'fork',
    watch: true,
    max_memory_restart: '200M',
    env: {
      NODE_ENV: 'development'
    }
  }]
}