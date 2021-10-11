<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ServiceProvicerProfile extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('serviceProviderProfile', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userId')->unsigned();
            $table->string('description')->nullable();
            $table->string('captureId')->nullable();
            $table->string('videoPath')->nullable();
            $table->integer('countryId')->nullable();
            $table->integer('cityId')->nullable();
            $table->integer('stateId')->nullable();
            $table->string('zipCode')->nullable();
            $table->timestamp('joinedDate')->nullable();
            $table->integer('yearExperience')->nullable();
            $table->timestamps();
            $table->foreign('userId')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('serviceProviderProfile');
    }
}
