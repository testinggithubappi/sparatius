<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Rating extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rating', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userid')->unsigned();
            $table->enum('type', ['service', 'eclass'])->nullable();
            $table->bigInteger('eclassId')->unsigned();
            $table->bigInteger('serviceId')->unsigned();
            $table->integer('ratingScore');
            $table->string('description')->nullable();
            $table->timestamps();
            $table->foreign('userid')
                ->references('id')
                ->on('users')
                ->onCascade('delete');
            $table->foreign('serviceId')
                ->references('id')
                ->on('servicesLookup')
                ->onCascade('delete');
            $table->foreign('eclassId')
                ->references('id')
                ->on('eclasses')
                ->onCascade('delete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rating');
    }
}
