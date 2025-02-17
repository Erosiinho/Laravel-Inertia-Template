<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return Inertia::render('Dashboard/index');
});

require __DIR__.'/auth.php';
