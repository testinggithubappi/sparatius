<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Booking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booking', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userId')->unsigned();
            $table->bigInteger('serviceId')->unsigned();
            $table->float('totalDuration')->nullable();
            $table->float('sessionDuration')->nullable();
            $table->float('totalPrice')->nullable();
            $table->string('transactionId')->nullable();
            $table->string('captureId')->nullable();
            $table->integer('eClassId')->nullable();
            $table->enum('BookingType', ['eclass', 'session']);
            $table->timestamps();
            $table->foreign('userId')
                ->references('id')
                ->on('users')
                ->onCascade('delete');
            $table->foreign('serviceId')
                ->references('id')
                ->on('servicesLookup')
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
        Schema::dropIfExists('booking');
    }
}
