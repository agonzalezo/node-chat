module.exports = {
  apps : [
      {
        name: "web-chat",
        script: "./src/server.js",
        watch: false,
        instance_var: 'instancia1',
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 3000,
            "NODE_ENV": "production",
        }
      }
  ]
}
