<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class GenerateLangTsFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lang:ts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate TS lang files.';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        Artisan::call('lang:js -s lang --json');
    }
}
