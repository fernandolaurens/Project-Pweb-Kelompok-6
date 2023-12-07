<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('contacts', function (Blueprint $table) {
        $table->renameColumn('tempat_lahir', 'temp_daerah_asal');
    });

    // Add a new column with the desired name
    Schema::table('contacts', function (Blueprint $table) {
        $table->string('daerah_asal')->after('temp_daerah_asal')->nullable();
    });

    // Copy data from the old column to the new column
    DB::table('contacts')->update(['daerah_asal' => DB::raw('temp_daerah_asal')]);

    // Remove the old column
    Schema::table('contacts', function (Blueprint $table) {
        $table->dropColumn('temp_daerah_asal');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
