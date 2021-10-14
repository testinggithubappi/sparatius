<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatheadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chatheads', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('from_id');
            $table->bigInteger('to_id');
            $table->bigInteger('session_id');
            $table->bigInteger('token');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chatheads');
    }
}
