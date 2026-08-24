# Laravel Inertia Template

Template de démarrage pour des applications web basées sur **Laravel 11**, **Inertia.js** et **Vue 3** (TypeScript). Il fournit une base prête à l'emploi avec authentification, gestion de profil, tableau de bord et localisation, pour éviter de reconfigurer ces éléments à chaque nouveau projet.

## Stack technique

- **Backend** : Laravel 11 (PHP 8.2+), Laravel Sanctum
- **Frontend** : Vue 3, Inertia.js, TypeScript, Tailwind CSS, Vite
- **Authentification** : Laravel Breeze
- **Routing frontend** : Ziggy (routes Laravel accessibles côté JS)
- **Localisation** : `laravel-js-localization` / `lang.js`
- **Environnement de dev** : Laravel Sail (Docker)

## Fonctionnalités incluses

- Authentification complète (connexion, inscription, mot de passe oublié, etc.) via Breeze
- Gestion du profil utilisateur
- Page de tableau de bord (Dashboard)
- Traductions/localisation partagées entre PHP et JS
- Environnement Docker prêt à l'emploi via Sail

## Structure du projet

- `app/` : code applicatif Laravel (contrôleurs, modèles, etc.)
- `resources/js/Pages` : pages Inertia (Auth, Dashboard, Profile)
- `resources/js/Components` : composants Vue réutilisables
- `resources/js/Layouts` : layouts Vue (authentifié / invité)
- `routes/` : définition des routes Laravel

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
sail npm install
```

```bash
sail npm run dev
```

### Generate JS localization

```bash
sail artisan lang:ts
```