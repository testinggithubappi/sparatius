<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ServiceLookUp extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('serviceslookup', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('userId')->unsigned();
            $table->bigInteger('serviceId')->unsigned();
            $table->enum('chatType', ['video', 'audio', 'text']);
            $table->float('price')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
            $table->foreign('userId')
                ->references('id')
                ->on('users')
                ->onCascade('delete');
            $table->foreign('serviceId')
                ->references('id')
                ->on('services')
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
        Schema::dropIfExists('serviceslookup');
    }
}
