module.exports = {
    apps : [
        {
            name: "nextjs",
            mode: "cluster",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            watch: true,
            env_development: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 8000,
                "NODE_ENV": "production",
            }
        }
    ]
}