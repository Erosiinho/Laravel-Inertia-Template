# Laravel Inertia Template

## Before starting : Sail

Sail is the tool we use to serve our application during development. This section shows the requirements to use it and how to use it to serve Laravel Inertia Template.

## Requirements
- Docker Desktop with WSL2 backend
- Fill .env file with your desired values
- Follow this step : https://laravel.com/docs/11.x/sail#configuring-a-shell-alias

When running the commands below, you should be in a bash shell in WSL, and the distro you are using must have access to the docker daemon (can be set in Docker Desktop)

## Getting started

```bash 
git clone https://vcs-git.shine.lan/ShineDigital/Laravel-Inertia-Template.git
   ```
```bash 
cd Laravel-Inertia-Template
   ```
```bash 
cp .env.example .env
   ```
```bash 
docker run --rm \
-u "$(id -u):$(id -g)" \
-v "$(pwd):/var/www/html" \
-w /var/www/html \
laravelsail/php84-composer:latest \
composer install --ignore-platform-reqs 
   ```

## Commands

### Start the stack

```bash
sail up -d
```

### Stop the stack

```bash
sail down
```

You need to setup both Laravel and Vite to get started.

### Starting Laravel

```bash
sail up -d
```
```bash
sail exec laravel.test php artisan key:generate
```
```bash
sail artisan migrate
```

### Starting Vite

```bash
sail npm run dev
```

### Generate JS localization

```bash
sail artisan lang:ts
```